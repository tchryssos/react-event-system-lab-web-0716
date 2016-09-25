const React=require('react')

class Keypad extends React.Component{
  constructor(props){
    super()
    this.passwordEnter=this.passwordEnter.bind(this)
  }

  passwordEnter(){
    console.log("Entering password...")
  }

  render(){
    return(
      <input type="password" onKeyUp={this.passwordEnter}/>
    )
  }
}

module.exports=Keypad
