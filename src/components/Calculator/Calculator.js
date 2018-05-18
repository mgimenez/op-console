import './Calculator.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Calculator extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.refs.inputOperation.focus();
  }



  render() {
    return (
      <form className="calculator arrow input" onSubmit={(e) => this.props.onSubmitForm(e, this.refs.inputOperation.value)}>
        <input className="calculator__input" type="text" data-index={this.props.operationIndex} value={this.props.operation} onChange={e => this.props.updateInputValue(e)} ref="inputOperation" onKeyDown={(e) => this.props.browserOperations(e)} />
      </form>
    )
  }

}


export default Calculator;