import { Dispatch, SetStateAction } from "react"

const Input = ({ text, setText }: { text: string, setText: Dispatch<SetStateAction<string>> }) => {
  return (
      <input type="text" name="add task" onChange={({ target: { value } }) => setText(value)} value={ text }/>
  )
}

export default Input