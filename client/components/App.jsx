import React from 'react';
import ReactDOM from 'react-dom'
import classNames from 'classnames';

import '../public/assets/css/custom.scss';

import HandImg from './assets/hand.png';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			decalPack: ''
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		const decalSet = event.target.value;
    this.setState({decalPack: decalSet});
    console.log('decal pack changed');
    //console.log('decal pack:' + decalSet);
    ReactDOM.render(
		  <Decals decalPack={decalSet} renderDecals={this.renderDecals} />,
		  document.getElementById('decals')
		);
  }

  renderDecals(decalPack) {
  	console.log(decalPack);
  	console.log("LOADING IMAGES");
  	
  	// pathEmoticons = require.context(`../public/assets/images/decals/Emoticons`, true, /^\.\/.*\.png$/);
  	//var pathDecals = require.context(`./client/public/assets/images/decals/${decalPack}`, true, /^\.\/.*\.png$/);
  	//var requireDecals = require.context("../public/assets/images/decals", true, /^\.\/.*\.png$/);
  	//var Emoticons = requireDecals("./Emoticons/");
  	//console.log(Emoticons);
  	//var ds = pathEmoticons.keys().map(pathEmoticons);
  	//var decals = requireDecals.keys().map(requireDecals);
  	//console.log(requireDecals);
  	//if (decalPack.size < 1) {
  	//	return false;
  	//}

  	//return decals.map((decal, index) => (
  	//	<img src={decal} id={index} />
  	//));
  }

  render() {
  	var decalPack = "Halloween"
  	var pathDecals = require.context(`./client/public/assets/images/decals/${decalPack}`, true, /^\.\/.*\.png$/);
    return (
     <div>
        <Introduction />
        <Hand />
        <DecalList onChange={this.handleChange} renderDecals={this.renderDecals}/>
        <div id="decals"></div>
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
			<div className={classes}><img src="https://image.flaticon.com/icons/png/128/284/284749.png" /></div>
		)
	}
}

class DecalList extends React.Component {
	render() {
		return (
			<select onChange={this.props.onChange}>
			  <option value="Animals" defaultValue>Animals</option>
			  <option value="Emoticons">Emoticons</option>
			  <option value="Halloween">Halloween</option>
			  <option value="SacredGeometry">Sacred Geometry</option>
			</select>
		);
	}

}


class Decals extends React.Component {
	render() {
		console.log('inside decals');
		var decalPack = this.props.decalPack;
		console.log(decalPack);
		const decals = this.props.renderDecals(decalPack);

		return (
			<div id="decals">
				{decals}
			</div>
		)
	}
}

class Decal extends React.Component {

}

export default App