import * as React from 'react';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      input: ''
    }
  }

  showCurrentInput(input) {
    this.setState({ input });
  }

  render() {
    return (
      <div>
        <i>IT WORKS!</i>
        <div>
          <input type="text" onChange={(e) => this.showCurrentInput(e.target.value)} />
        </div>
        <div className="f24 blue">{this.state.input}</div>
      </div>
    );
  }
}

export default App;