import React from "react";
import ControlItem from "./components/ControlItem";

const CONTROL_ITEMS = [{value: 100, title: "Volume"}, 
                      {value: 100, title: "Treble"}, 
                      {value: 100, title: "Mid"}, 
                      {value: 100, title: "Bass"}];

class App extends React.Component {
  
  render() {
    return (
      <>
      <ul>
        {CONTROL_ITEMS.map(({value, title}) => <ControlItem value={value} title={title}></ControlItem>)}
      </ul>
      
      </>
    );
  }
}

export default App;