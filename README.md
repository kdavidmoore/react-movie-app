# React Movie App

A React-based movie app displays "Now Playing" movies from themoviedb.org API.
--------------------
[demo here](http://movies.kdavidmoore.com)

## Example
![screenshot](http://i65.tinypic.com/35d5e6t.gif)

## Features
* Displays poster images of "Now Playing" movies
* Posters can be clicked to open a modal showing more information on each movie
* Typeahead can be used to search for Now Playing movies
* When typeahead option is selected, only the poster for the selected movie is shown
* Reset button can be used to retrieve unfiltered list of Now Playing movies

## Third-party libraries
* [React](https://facebook.github.io/react/)
* [React-DOM](https://www.npmjs.com/package/react-dom)
* [react-typeahead](https://github.com/fmoo/react-typeahead)
* [React-Bootstrap](https://react-bootstrap.github.io/) (for the modals and grid system)
* [Skeleton](http://getskeleton.com/) (cut/pasted the form styling and button styling)
* jQuery (for the $.getJSON method)

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
