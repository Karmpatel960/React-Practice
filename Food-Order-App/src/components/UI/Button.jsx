export default function Button({ children, textOnly, className, ...props }) {
  let css = textOnly ? 'text-button' : 'button'
  css += ' ' + className

  return (
    <button className={css} {...props}>
      {children}
    </button>
  )
}
