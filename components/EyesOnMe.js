const React=require('react')

class EyesOnMe extends React.Component{
  constructor(props){
    super()
    this.eyesUp=this.eyesUp.bind(this)
    this.eyesDown=this.eyesDown.bind(this)
  }

  eyesUp(){
    console.log("Good!")
  }

  eyesDown(){
    console.log("Hey! Eyes on me!")
  }

  render(){
    return(
      <button onFocus={this.eyesUp} onBlur={this.eyesDown} type="button">Where are your eyes?</button>
    )
  }
}

module.exports=EyesOnMe
