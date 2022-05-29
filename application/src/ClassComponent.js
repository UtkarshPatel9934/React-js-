// we must use this import keyword for the Class Based Component
import React, { Component } from 'react'

class ClassComponent extends Component
{

	// NOTE: in the Class Component there must be a RENDER as well as RETURN keyword included in it.
	render() // this is the render function which includes the return statement.
	{
		return(
			<h2>Class Based Component</h2>
		)
	}
}


// to use it in the App.js (Root Component) we must export it from here and import it in the App.js file.

export default ClassComponent;