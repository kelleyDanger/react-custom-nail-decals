import React from 'react';
import classNames from 'classnames';
import HandImg from '../public/assets/images/hand.png';
import '../public/assets/css/custom.scss';

class App extends React.Component {
  render() {
    return (
     <div>
        <Introduction />
        <Hand />
      </div>);
  }
}

class Introduction extends React.Component {
	render() {
		return (
			<div id="introduction">
				<h1>Custom Nail Decals</h1>
				<p>To begin, click a fingernail below & select a decal from the list below! When you've selected decals for each nail, hit the Checkout button.</p>
			</div>
		);
	}
}

class Hand extends React.Component {
	render() {
		return (
			<div id="handWrapper">
				<Fingernail finger="thumb" />
				<Fingernail finger="pointer" />
				<Fingernail finger="middle" />
				<Fingernail finger="ring" />
				<Fingernail finger="pinky" />
				<img id="handImg" src={HandImg} />
			</div>
		);
	}
}

class Fingernail extends React.Component {
	render() {
		console.log(this.props.finger);
		let classes = classNames(
			'fingernail', this.props.finger
		);

		return (
			<div className={classes}><img src="https://image.flaticon.com/icons/png/128/284/284749.png" /></div>
		)
	}
}

class DecalList extends React.Component {

}

class Decal extends React.Component {

}

export default App