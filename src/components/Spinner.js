import React from 'react';

const Spinner = (props) => {
  return(
    //ui feature to add spinner
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};


//default message. makes the component more reusable
// has a message if you choose to use inside a different component
Spinner.defaultProps = {
  message: 'Loading...'
}

export default Spinner;