import React from 'react';
import ReactDOM from 'react-dom'
import classNames from 'classnames';

import '../public/assets/css/custom.scss';

import HandImg from 'images/hand.png';
import DecalImgs from 'images/decals/decals.js'

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			decalPack: 'Animals'
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const decalPack = event.target.value;
    this.setState({decalPack: decalPack});
  }

  render() {
    return (
     <div>
        <Introduction />
        <Hand />
        <DecalSelectList onChange={this.handleChange} />
        <DecalList decalPack={this.state.decalPack} />
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
		let classes = classNames(
			'fingernail', this.props.finger
		);
		return (
			<div className={classes}>
				<img src="https://image.flaticon.com/icons/png/128/284/284749.png" />
			</div>
		)
	}
}

class DecalSelectList extends React.Component {
	render() {
		return (
			<select onChange={this.props.onChange}>
			  <option value="Animals" defaultValue>Animals</option>
			  <option value="Emoticons">Emoticons</option>
			  <option value="Minimen">Minimen</option>
			  <option value="SacredGeometry">Sacred Geometry</option>
			</select>
		);
	}

}

class DecalList extends React.Component {
	render() {
		const decalPack = this.props.decalPack,
					decals = DecalImgs[decalPack].keys();

		const decalList = decals.map((decal, index) =>
			<Decal pack={decalPack} decal={decal} key={index} />
		);
		return (
			<div id="decals">{decalList}</div>
		)
	}
}

class Decal extends React.Component {
	render() {
		const pack = this.props.pack,
					decal = this.props.decal;
		return (
			<img src={`./client/public/assets/images/decals/${pack}/${decal}`} />
		)
	}
}
export default App