export default function NormalButton(props) {
  return (
    <button
      type={props.type || "button"}
      onClick={props.onClick}
      className={`${props.className} outline-none shadow flex justify-center font-[600] transition-all duration-500 hover:scale-110`}>
      {props.icon} {props.text}
    </button>
  )
}