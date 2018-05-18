import './Operations.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Operations extends Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    this.refs.operations.scrollTo(0,this.refs.operations.scrollHeight)
  }


  render() {
    return (
      <div className="operations" ref="operations">
        {
          this.props.operations.map((item, index) => {
            return (
              <div key={index}>
                <div className="line arrow input">{item}</div>
                <div className={`line arrow output ${this.props.results[index] === 'error' ? 'error' : '' }`} >{this.props.results[index]}</div>
              </div>
            )
          })
        }
      </div>
    )
  }

}


export default Operations;