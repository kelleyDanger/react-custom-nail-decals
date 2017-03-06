import React from 'react';
import HandImg from '../public/assets/images/hand.png';

class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
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
			<img className="handImg" src={HandImg} />
		);
	}
}

class DecalList extends React.Component {

}

class Decal extends React.Component {
	
}

export default App