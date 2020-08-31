import React, {Component} from 'react';
import './Panel.css';

class Panel extends Component {
  render() {
    console.log(this);
    return (
    <div className="Panel-container">
      <div className="Panel-headingRow">
      		{this.props.title}
      </div>
      <div className="Panel-textRow">
      		{this.props.children.props.children}
      </div>
    </div>
    );
  }
}

export default Panel;