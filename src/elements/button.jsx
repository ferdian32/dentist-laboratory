export default function Button({ onClick, className, title }) {
  return (
    <button onClick={onClick} className={className}>
      {title}
    </button>
  )
}