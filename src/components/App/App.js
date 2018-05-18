import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Operations from '../Operations/Operations';
import Calculator from '../Calculator/Calculator';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      operation: '',
      operationIndex: 0,
      result: 0,
      operations: [],
      results: [],
    }

    this.calculate = this.calculate.bind(this);
    this.browserOperations = this.browserOperations.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  onSubmitForm(e, operationValue) {
    e.preventDefault();
    if(operationValue) this.calculate(operationValue);
  }

  calculate(operation) {

    try {
      eval(operation);
      let result = eval(operation);
      this.storageOperation(operation, result);
    }
    catch(err) {
      this.storageOperation(operation, 'error');
    }
  }

  storageOperation(operation, result) {

    let operationsTemp = this.state.operations;
    let resultsTemp = this.state.results;
    operationsTemp.push(operation);
    resultsTemp.push(result);
    this.setState({
      operation: '',
      result: '',
      operations: operationsTemp,
      results: resultsTemp,
    })
  }

  updateInputValue(e) {
    this.setState({
      operation: e.target.value
    });
  }



  browserOperations(e) {
    let index;

    switch(e.keyCode) {
      case 38:

        if (this.state.operations.length) {
          if (this.state.operation) {
            if (this.state.operationIndex - 1 >= 0) {
              index = this.state.operationIndex - 1;
            } else {
              index = 0;
            }
          } else {
            index = this.state.operations.length - 1;
          }

          this.setState({
            operation: this.state.operations[index],
            operationIndex: index
          })
        }
        break;

      case 40:
        if (this.state.operation) {
          if (this.state.operationIndex + 1 <= this.state.operations.length -1) {
            index = this.state.operationIndex + 1
          } else {
            index = null;
          }

          this.setState({
            operation: index === null ? '' : this.state.operations[index],
            operationIndex: index
          })
        }
        break;

    }
  }



  render() {
    return (
      <main>
        <Operations operations={this.state.operations} results={this.state.results} />
        <Calculator
          onSubmitForm={this.onSubmitForm}
          calculate={this.calculate}
          operation={this.state.operation}
          operationIndex={this.state.operationIndex}
          browserOperations={this.browserOperations}
          updateInputValue={this.updateInputValue}
        />
      </main>
    )
  }

}


export default App;