# React Movie App

A React-based movie app that uses themoviedb.org API to search and display movies.
--------------------
[demo here](http://movies.kdavidmoore.com)

## Example
![screenshot](http://i66.tinypic.com/2vtnl9l.png)

## Features
* Displays poster images of "Now Playing" movies
* Posters can be clicked to open a modal showing more information on each movie
* Typeahead can be used to search for Now Playing movies
* When typeahead option is selected, only the poster for the selected movie is shown
* Reset button can be used to retrieve unfiltered list of Now Playing movies

## Third-party libraries
* jQuery
* [React](https://facebook.github.io/react/)
* [React-DOM](https://www.npmjs.com/package/react-dom)
* [React-Bootstrap](https://react-bootstrap.github.io/)
* [react-typeahead](https://github.com/fmoo/react-typeahead)
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
