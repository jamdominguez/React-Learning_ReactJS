
# Introduction
It is the same application that Search Movies but implemented with hooks, Redux for management and Material UI for styles.

To work with React hooks it is necessary the React version 16.8 or upper.

# Create Project
```console
npx create-react-app search-movies-hooks
```

# Dependencies
### PropTypes
Library for PropTypes.
```console
npm install --save prop-types
```
### Redux
Library for Redux
```console
npm install --save react-redux
```
### Material-ui
Library for styles
```console
npm install --save @material-ui/core
```
### Npm-Check-Updates
Libray to check the dependnecies version, check it, install and update commandas.
```console
npm install -g npm-check-updates
ncu -u
npm install
npm update
```
___
For icons have two options, one is create your own library, anohter one is use a library create from material-ui

#### -  Built your icons's library.
1. Create a folder called "icon" o like you want
2. Into the folder, create one file called index.js, this file provides all icons component into the folder
3. Into the folder, create all icons needed like components using SvgIcon component from material-ui/core.
4. Import you library in the component where you want use the personal icon.
```js
// MovieIcon.js - customized icon
import React from 'react'
import { SvgIcon } from '@material-ui/core'

export default props => {
    <SvgIcon {...props}>
        //your icon <path> for you customized movie icon
    </SvgIcon>
}
```
```js
// index.js - icons library provider
import MovieIcon from './MovieIcon'

export {
    MovieIcon
};
```
```js
// yourcomponent.js
import { MovieIcon } from '../icons'// icon folder, and use it
```


#### - Install material-ui/icons
Library to add Material-ui icons, add the icons like components (my option)
```console
npm install --save @material-ui/icons
```

___

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
