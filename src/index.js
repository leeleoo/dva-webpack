import React, { PureComponent } from 'react'
import ReactDom from 'react-dom'
import style from './index.less'

export default class App extends PureComponent {
  render() {
    return <div><h1 className={style.test}>react</h1></div>
  }
}
const container = document.getElementById('root')
ReactDom.render(<App/>, container)
function getComponent(a:String,b:Number) {
  var element = document.createElement('div')
  var button  = document.createElement('button')
  var br      = document.createElement('br')
  button.innerHTML = 'Click me and look at the console!' + a + b;
  element.appendChild(br);
  element.appendChild(button);
  button.onclick = async e => {
    const module = await import(/* webpackChunkName: "print" */ './print')
    module.default()
  }
  return element
}

document.body.appendChild(getComponent(1,2))