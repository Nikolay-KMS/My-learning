// import './App.css';
import React from "react";


// export function App (props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <ListItem key={number.toString()}
//               value={number} />
//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
//   );
// }

// function ListItem(props) {
//   // Вірно! Тут не потрібно визначати ключ:
//   return <li>{props.value}</li>;
// }


function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

export class App extends React.Component {
  constructor(props) {
    super(props);
    // this.handleChange = this.handleChange.bind(this);
    this.state = {temperature: ''};
  }

  // handleChange(e) {
  //   this.setState({temperature: e.target.value});   }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={temperature}
          onChange={(e) => this.setState({temperature: e.target.value})} />
        <BoilingVerdict
          celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}
