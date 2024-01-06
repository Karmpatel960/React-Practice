const express = require('express')
const bodyParser = require('body-parser')
const { Pool } = require('pg')

const app = express()
const port = 3000

const pool = new Pool({
  user: 'user123',
  host: 'db',
  database: 'defaultdb',
  password: 'password123',
  port: 5432,
})

app.use(bodyParser.json())

app.get('/setup', async (req, res) => {
  try {
    // SQL script to create users table
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL
      );
    `

    await pool.query(createTableQuery)

    res.json({ message: 'Setup complete. Users table created.' })
  } catch (error) {
    console.error('Error during setup:', error)
    res.status(500).json({ error: 'Internal server error during setup.' })
  }
})

app.post('/api/users', async (req, res) => {
  const { name, email } = req.body
  const result = await pool.query(
    'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
    [name, email]
  )
  res.json(result.rows[0])
})

// READ
app.get('/api/users', async (req, res) => {
  const result = await pool.query('SELECT * FROM users')
  res.json(result.rows)
})

// UPDATE
app.put('/api/users/:id', async (req, res) => {
  const { id } = req.params
  const { name, email } = req.body
  const result = await pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *',
    [name, email, id]
  )
  res.json(result.rows[0])
})

// DELETE
app.delete('/api/users/:id', async (req, res) => {
  const { id } = req.params
  const result = await pool.query(
    'DELETE FROM users WHERE id = $1 RETURNING *',
    [id]
  )
  res.json(result.rows[0])
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
