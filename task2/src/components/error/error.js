import React from 'react'
import styles from './Error.module.css'

function ErrorModal(props) {
  return (
    <div className={styles.backdrop} onClick={props.onClose}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>Error</h2>
        </div>
        <div className={styles.content}>
          <p>{props.errorMessage}</p>
          <div className={styles.actions}>
            <button className={styles.button} onClick={props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorModal
