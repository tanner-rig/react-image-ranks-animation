import React, { Component } from 'react';

import Images from './images';

export default class App extends Component {
  constructor() {
    super();

    // profile images
    let rankings = [
      {url:'http://www.naijaloaded.com.ng/wp-content/uploads/2017/08/social-instagram-new-square1-128.png'},
      {url:'http://lincolnsquarebarbershop.com/BarberShop/img/facebook.png'},
      {url:'https://cdn4.iconfinder.com/data/icons/miu-square-flat-social/60/youtube-square-social-media-128.png'}
    ];

    this.state = { rankings };

    this.sendToTop = this.sendToTop.bind(this);
  }

  sendToTop(num) {
    let newArray = this.state.rankings.slice();

    if (num === 1) {
      let lastObject = newArray.pop();
      newArray.unshift(lastObject);

      this.setState({ rankings: newArray});
    } else if (num === 2) {
      let element = newArray.splice(1, 1)[0];
      newArray.unshift(element);

      this.setState({ rankings: newArray});
    } else {
      let imageObject = newArray.splice(1, 1)[0];
      newArray.push(imageObject);

      this.setState({ rankings: newArray});
    }
  }

  render () {
    return (
      <div id="app">
        <Images rankings={this.state.rankings} />
        <button onClick={() => this.sendToTop(1)} className="reorderButton">3 To Top</button>
        <button onClick={() => this.sendToTop(2)} className="reorderButton">2 To Top</button>
        <button onClick={() => this.sendToTop(3)} className="reorderButton">3 To 2</button>
      </div>
    );
  }
}
