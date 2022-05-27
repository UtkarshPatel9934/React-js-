---------------------------------------------------------------------------------------------------------------
What is React?
- React is JavaScript Library
- The main focus is building UI as fast as possible.
- So this is Used to Single Page Application.
- Means Complete website is Single Page Web Application.

Why React is Fast
- React Use Virtual DOM

- Mobile App Development with React-Native


History & Version
- Maintained by Facebook
- First Release 29 May 2013
- The Current Version is 17.0.0
- Apps with React :
1. NetFlix
2. Whatsapp Web
3. Instagram
4. Airbnb Inc
5. Myntra



React Prerequisites
- Html, Css, JavaScript
- ES6 understanding will make you comfortable with Reactjs


- React is Generally used with NPM
- We can also use it with CDN - Content Delivery Network

---------------------------------------------------------------------------------------------------------------


Environment Setup 
- npm - v 
To check the Version for NPM
- node - v 
To check the Version for NODE


---------------------------------------------------------------------------------------------------------------


To create React Appp
- npm create-react-app <AppName>



to Run the App 
- npm start


What is NPM 
- node package manager
- manages all the packages for the node
- manages it in the Node modules folder


- To install new package
we use a cmd : npm install <package-name></package-name>


---------------------------------------------------------------------------------------------------------------

App.js - is all the site content goes here!
index.js - is the file that runs


- Creating new file User.js in the src folder
- We also have to refenrence it in the index.js file to get access of this file.
- including the Tag for Users in it.



Interview Question?
- What is the Alternative for the NPM
Ans: Yarn Package Manager
- is Owned by facebook


---------------------------------------------------------------------------------------------------------------

Package.json file
- it contains file name, Version, all the commands for running Script in Terminal, and details for all the included packages installed in it.
- To check the React Version - it is in the Package.json -  "react": "^18.1.0",

Package-lock.json
- handles the details for the Package.json file.


InterView Question
What is the Differnce between them?
- Package-lock.json maintains the History for all the instaled Packages and it's Version Control
- it also maintains the all dependencis for particular the packages.
- node module tree structure for all the packages.

- while the Package.json will handles the appliation details.


.gitignore
- is a Github File that ignores some file which didn't require to be commited.
- for eg: node_modules folder in the application.



src folder
- where we work with all the react code.

	App.css
	- styling the structure - Style file.

	App.js
	- is where we start writing the code.

	App-test.js
	- where we write all the test logic to test the app.
	- Unit Test Cases.

	index.css
	- styling the structure - Style file.


	index.js
	- it is the Entry Point of the React Application.

	reportWebVitals.js
	- it shows th perforamce of the Application
	- included in the index.js file at the end.
	- reportWebVitals();
	- it is not requied.


	setupTests.js
	- setup the test Cases for the UnitTest Cases.


public folder
- html kind of details which are not related to the React.js
- it is where we dump all the code of React in the div tag -  <div id="root"></div>
- the react code is came from the index.js under the Src to index.html file under the Public folder


	manifest.json
	- maintains the details for the icon
	- and colours for theme
	- is used to build Prograssive Web App

	robots.txt
	- for Google Search Engine
	- SEO
