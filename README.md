# React Movie App

A React-based movie app that uses themoviedb.org API to search and display movies.
--------------------
[demo here](https://kdavidmoore.com:8080)

## Example
![screenshot](http://i63.tinypic.com/25pr9zs.png)

## Third-party libraries
* jQuery
* [React](https://facebook.github.io/react/)
* [React-DOM](https://www.npmjs.com/package/react-dom)
* [React-Bootstrap](https://react-bootstrap.github.io/)
* [Skeleton](http://getskeleton.com/)

## Installation
Register with [themoviedb.org](https://www.themoviedb.org/account/signup) to get an API key and store the key in `scripts/api_key.js`:
```javascript
const API_KEY = "my_api_key";
```
Open a terminal window and install the Node dependencies:
```shell
cd my_project_directory && npm install
```
Then start the Node server using nodemon:
```shell
nodemon
```
Finally, the app should render when you open a browser window pointing to `http://localhost:8080`