import React from 'react';

class DecalCanvas extends React.Component {
		constructor(props) {
			super(props);
			this.imagesSrcArray = Object.values(this.props.images);
		}

		renderCanvas() {
			if (!this.imagesSrcArray.every(x => x)) {
    		return false;
    	} else {
    		return true;
    	}
		}
		
    componentDidMount() {
      this.updateCanvas();
    }

    updateCanvas() {
    	const images = this.props.images;
    	var xPadding = 10;
    	var yPadding = 0;

    	const canvas = document.getElementById('decalCanvas');
      const context = canvas.getContext('2d');
      for (const finger in images) {
    		var imageObj = new Image(20,20);
    		imageObj.onload = function() {
    			context.drawImage(this, xPadding, yPadding, 30, 30);
    			xPadding += 40;
    		};
    		imageObj.src = images[finger];
    	}
    	console.log("Updating Canvas to : " + context);
    }

    render() {
  		//if (this.renderCanvas()) {
	     	return (
	     		<div>
	     			<hr />
	        	<canvas id="decalCanvas" ref="canvas" width={200} height={30} />  Save Me! Right-click, Save Image As, then Print!
	        	<hr />
	        </div>
	      );
	    //}
    }
}

export default DecalCanvas;