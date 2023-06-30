import { createRoot } from "react-dom/client";
import Message from "./Message";

const messageClass = 'global-message'

export default function message(options){
  let props
  if(typeof options === 'string'){
    props = {msg:options}
  }else{
    props = options
  }
  let container = document.querySelector(`.${messageClass}`)
  if(container){
    container.remove()
  }
  container = document.createElement('div')
  container.className = messageClass
  createRoot(container).render(<Message {...props} />)
  document.body.append(container)
  setTimeout(()=>{
    container.remove()
  },2800)
}