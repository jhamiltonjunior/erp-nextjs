export default function CustomTextArea(props) {
  return (
    <textarea name={props.name} id={props.id} className={`${props.className}
    border
    border-[lightgray] p-2 border-solid outline-none focus:border-[var(--principal-color)] min-h-[150px] max-h-[425px]
    `} cols="30" rows="10"></textarea>
  )
}