/** 
 *  WebGL experiment based on :
 *  @see http://www.rozengain.com/blog/2010/02/22/beginning-webgl-step-by-step-tutorial/
 *  @see https://developer.mozilla.org/en-US/docs/Web/WebGL
 */


var gl;

function onLoaded(){
	var canvas = document.getElementById("canvas");
	
	gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

	if (!gl){
		alert("You can't run this WebGL experiment in your browser.");
		return;
	}

	gl.clearColor(0.0, 0.0, 0.0, 1.0);                      
    gl.enable(gl.DEPTH_TEST);                               
    gl.depthFunc(gl.LEQUAL);
    gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT); 
}

window.onload = onLoaded;