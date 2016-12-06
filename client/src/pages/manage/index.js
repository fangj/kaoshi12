import React from 'react';
import ReactDOM from 'react-dom';

export default class Manage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Manage</div>
    );
  }
}

ReactDOM.render(<Manage/>, document.getElementById('App'));

