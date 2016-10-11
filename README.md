# React-Redux Movie App

A movie app, built using React and Redux, that displays "Now Playing" movies from themoviedb.org API.

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

## Built with
* react
* redux
* react-redux
* babel
* webpack
* babel-preset-react
* babel-preset-es2015
* babel-plugin-transform-object-rest-spread
* [react-typeahead](https://github.com/fmoo/react-typeahead)
* [react-bootstrap](https://react-bootstrap.github.io/) (for the modals and grid system)
* Bootstrap
* [Skeleton](http://getskeleton.com/) (cut/pasted the form styling and button styling)
* jQuery (for the $.getJSON method)

## Installation
Register with [themoviedb.org](https://www.themoviedb.org/account/signup) to get an API key. Place the API key in `scripts/API_KEY.js`.

```shell
npm install
webpack
```
Then open `index.html` in a browser.
