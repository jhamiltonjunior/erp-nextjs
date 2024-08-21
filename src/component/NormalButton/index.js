export default function NormalButton(props) {
  return (
    <button
      className={`${props.className} shadow flex justify-center font-[600] transition-all duration-500 hover:scale-110`}>
      {props.text}
    </button>
  )
}