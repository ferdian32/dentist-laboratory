export default function Input({ type, name, id, onChange, placeholder, className, value }) {
  return <input type={type} name={name} id={id} onChange={onChange} placeholder={placeholder} className={className} value={value} required />
}