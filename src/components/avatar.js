import React from 'react';

import './avatar.scss';

export default class Avatar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { contents: null, updating: false };
  }

  componentDidMount() {
    this.renderContents(this.props.valid, this.props.src);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.src !== nextProps.src) {
      this.setState({ updating: true });
      setTimeout(() => {
        this.renderContents(nextProps.valid, nextProps.src);
      }, 1500);
      setTimeout(() => {
        this.setState({ updating: false });
      }, 1700);
    }
  }

  renderInitials() {
    return (
      <div className="initials-square">
        <div className="initials">TR</div>
      </div>
    );
  }

  renderImage(src) {
    return <img src={src} className="image-square" />;
  }

  renderContents(valid, src) {
    if (valid) {
      return this.setState({ contents: this.renderImage(src)});
    } else {
      return this.setState({ contents: this.renderInitials()});
    }
  }

  render() {
    return (
      <div className="avatar" style={{ marginTop: `${this.props.index ? '3vh' : null}` }}>
        <div className={`background-square${this.props.index + 1} ${this.state.updating ? 'updating' : ''}`} >
          {this.state.contents}
        </div>
      </div>
    );
  }
}
