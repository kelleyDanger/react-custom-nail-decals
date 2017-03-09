import React from 'react';
import ReactDOM from 'react-dom'
import classNames from 'classnames';

import '../public/assets/css/custom.scss';

import HandImg from 'images/hand.png';
import DecalImgs from 'images/decals/decals.js'

import merge from 'lodash/merge';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			decalPack: 'Animals',
			fingernailDecals: {
				thumb: 'https://img.clipartfest.com/0d6a3240800caf71073288e1df38bf8a_cute-panda-png-c-cute-pnda-clipart-png_128-128.png',
				pointer: '',
				middle: "",
				ring: "",
				pinky: "",
			},
			currentFinger: 'thumb'
		};

		this.handleChange = this.handleChange.bind(this);
		this.setCurrentFinger = this.setCurrentFinger.bind(this);
		this.setCurrentFingernailDecal = this.setCurrentFingernailDecal.bind(this);

	}

	setCurrentFinger(finger) {
		this.setState({currentFinger: finger})
	}

	setCurrentFingernailDecal(decal) {
		this.setState({
		  fingernailDecals: merge({}, this.state.fingernailDecals, {
		  	[this.state.currentFinger]: decal
		  })
		})
	}

	handleChange(event) {
		const decalPack = event.target.value;
    this.setState({decalPack: decalPack});
  }

  render() {
    return (
     <div>
        <Introduction />
        <Hand setCurrentFinger={this.setCurrentFinger} fingernailDecals = {this.state.fingernailDecals}/>
        <DecalSelectList onChange={this.handleChange} />
        <DecalList setCurrentFingernailDecal={this.setCurrentFingernailDecal} decalPack={this.state.decalPack} />
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
		const fingernailDecals = this.props.fingernailDecals
		return (
			<div id="handWrapper">
				<Fingernail setCurrentFinger={this.props.setCurrentFinger} decal={fingernailDecals.thumb} finger="thumb" />
				<Fingernail setCurrentFinger={this.props.setCurrentFinger} decal={fingernailDecals.pointer} finger="pointer" />
				<Fingernail setCurrentFinger={this.props.setCurrentFinger} decal={fingernailDecals.middle} finger="middle" />
				<Fingernail setCurrentFinger={this.props.setCurrentFinger} decal={fingernailDecals.ring} finger="ring" />
				<Fingernail setCurrentFinger={this.props.setCurrentFinger} decal={fingernailDecals.pinky} finger="pinky" />
				<img id="handImg" src={HandImg} />
			</div>
		);
	}
}

class Fingernail extends React.Component {

	handleClick(e) {
		this.props.setCurrentFinger(this.props.finger);
	}

	render() {
		const finger = this.props.finger;
		const decal = this.props.decal;
		const img = <img data-finger={finger} src={decal} />
		//let img = null;
		//if (this.state.fingernailDecals[finger]) {
		//	img = <img data-finger={finger} src={decal} />
		//} else {
		//	img = '';
		//}
	
		let classes = classNames(
			'fingernail', finger
		);
		//console.log(this.state.currentFinger);
		return (
			<div onClick={this.handleClick.bind(this)} id={finger} className={classes}>
				{img}
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
			<Decal setCurrentFingernailDecal={this.props.setCurrentFingernailDecal} pack={decalPack} decal={decal} key={index} />
		);
		return (
			<div  id="decals">{decalList}</div>
		)
	}
}

class Decal extends React.Component {

	handleClick (e) {
		console.log(e.target);
		this.props.setCurrentFingernailDecal(e.target.src);
	}

	render() {
		const pack = this.props.pack,
					decal = this.props.decal;
		return (
			<img onClick={this.handleClick.bind(this)} src={`./client/public/assets/images/decals/${pack}/${decal}`} />
		)
	}
}
export default App