import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';


class App extends React.Component {
  // this is the same thing as calling a constructor when transpiled by Babel
  state={lat: null, errorMessage: '' };

  //can technically call data in constructor, but it's a better practice 
  //to do one-time data loading in a lifecycle method(componentDidMount)
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => {
        console.log(this.state.lat);
        this.setState({lat: position.coords.latitude});
      }, 
      err => {
        console.log(this.state.errorMessage);
        this.setState({errorMessage: err.message})
      }
    );
  }

  //putting our logic inside a helper method to make code more reusable and easier to amend in the future
  //prefer to only have one return statement in render method
  renderContent(){
    if(this.state.errorMessage && !this.state.lat){
      return <div>Error Message: {this.state.errorMessage}</div>
    }
    else if(!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat={this.state.lat} />
    }
    return <Spinner message={"Please accept location request"}/>
  }
  
  
  render(){
    return(
      <div>{this.renderContent()}</div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))
