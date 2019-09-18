import React from 'react';
import './App.css';
import Colors from './Colors'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      color: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.setLocalSt = this.setLocalSt.bind(this);
    this.getLocalSt = this.getLocalSt.bind(this);
  }
  componentDidMount(){
    this.getLocalSt();
  }
  handleChange(event){
    const value = event.currentTarget.value;
    
    this.setState(prevState => {
      return {color: value}}, ()=>{this.setLocalSt();}        
    );    
  }

  setLocalSt(){
    localStorage.setItem('color', JSON.stringify(this.state.color));
  }
  getLocalSt (){
    const saveColor = JSON.parse(localStorage.getItem('color'));
    this.setState (()=>{
      if(saveColor === null) {
        return (console.log('no hay información guardada en LS'))
      } else {
        return ({
          color : saveColor
        })
      }
    })
  }

  render() {
    return (
      <div className="App" style={{backgroundColor:`${this.state.color}`}}>
       <Colors handleChange = {this.handleChange}></Colors>
      </div>
    );
  }
}

export default App;
