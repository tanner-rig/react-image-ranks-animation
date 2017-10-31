import React, { Component } from 'react';

import Avatar from './avatar';
import { isImageValid } from '../actions/image-actions';

export default class Images extends Component {
  constructor() {
    super();

    this.state = { checkedRankings: null };
  }

  componentDidMount(){
    isImageValid(this.props.rankings).then((res)=>{
      this.setState({ checkedRankings: res });
    });
  }

  componentWillReceiveProps(nextProps) {
    isImageValid(nextProps.rankings).then((res)=>{
      this.setState({ checkedRankings: res });
    });
  }

  renderImages(rankings) {
    return rankings.map((ranking, index) => {
      return (
        <Avatar src={ranking.url} valid={ranking.valid} key={index} index={index} />
      );
    });
  }

  render() {
    if (!this.state.checkedRankings) return <div/>;
    return (
      <div className="images">
        {this.renderImages(this.state.checkedRankings)}
      </div>
    );
  }
}
