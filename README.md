# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Developer Notes.
This is my implimentation of the Lexicon Coding Challenge. The app - which is a component is divided into a components folder and a utils folder. The Utils folder contains all the functions and unit tests associated with the app utility functions - such as getting the data , formatting it, and storage/retrival from session storage. 

You can run the functions using npm test anywhere in the application. This
The API was not reliable so I decided to use a pure front end implimentation - one where its 
a. Dependant on the user to reload the website (an error message does show incase of failed response from the server)
b. If we do get data back, it is stored in session storage - this can be stored in local-storage as well. If this was a full-stack application which given the domain of the challenge, its not - we could have a BE that polls the API to get the data and store it elsewhere. Then perhaps do SSR (Serverside rendering) using something like NEXT JS. But given I assumed we have to deploy this component onto a client existing website and their API is already shoddy - we can use a pure FE implimentation.

There was no need to use REDUX for only one API call and such a flat react node structure. It uses oneclass component that passes down props to the search and list components and then to the item and image components. 

I added in Image lazy loading to allow images to gracefuly load via an npm package. I also added in bootstrap for some CSS flair. 

Given I was busy I only was able to give this 5-6 hours of time spread over 2 days ( Sunday and Monday ) I wasn't able to implement Unit tests for the FE components. Thats partly because Im using React 17+ and I wanted to use Enzyme - and was having some issues getting that working. Based on my search Enzyme doesnt work with React 17 yet and there is a work around - but I didnt implement that. I wanted enzyme because it's great for snapshot testing. I can implement that but I don't have time tomorrow so maybe next time. I also wanted to implement a loading SVG but wasn't able to find something suitable for the theme of this website. 

You can run the application using `npm start` and test it using `npm test` which cover both async and sync functions. You

The app is fully responsive. 

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# sw-stream-listing
# zehash-developer
