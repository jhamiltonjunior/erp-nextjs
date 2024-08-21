export default function BigButtonInfo(props) {
  return (
    <button
      className={`${props.className} shadow p-4 flex  justify-center font-[600] transition-all duration-500 hover:scale-110`}>
      {props.text} - {props.quantity}
    </button>
  )
}