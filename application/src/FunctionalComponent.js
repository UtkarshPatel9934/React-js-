// functional component
// NOTE: in the Functional COmponent there must be a return keyword included in it.

// if we dont want to use this we have to make import statement in the App.js file like this:
export function FunctionalComponent()
{
	return(

		// Note: inside the return statement all the Tag must be Wrapped in the single tag so that it will return as a whole, 
		// Otherwise it will throw an error of JSX
		// Error in the below code:
		// <h1>Functional Component</h1>
		// <h1>Functional Component</h1>

		<div>
			<h1>Functional Component</h1>
			<h1>Functional Component</h1>
		</div>
	)
}


// to use it in the App.js (Root Component) we must export it from here and import it in the App.js file.



// export default FunctionalComponent;