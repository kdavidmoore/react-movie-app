const Button = ReactBootstrap.Button;
const Modal = ReactBootstrap.Modal;
const Typeahead = ReactTypeahead.Typeahead;

var Poster = React.createClass({
	getInitialState: function() {
		return {
			showModal: false,
			hover: false
		};
	},
	close: function() {
		this.setState({ showModal: false });
	},
	open: function() {
		this.setState({ showModal: true });
	},
	mouseOver: function() {
		this.setState({ hover: true });
	},
	mouseLeave: function() {
		this.setState({ hover: false });
	},
	render: function() {
		let hoverStyle;
		if (this.state.hover) {
			hoverStyle = { cursor: 'pointer' };
		} else {
			hoverStyle = { cursor: 'default' };
		}
		return (
			<div className="add-margin col-xs-12 col-sm-6 col-md-4 col-lg-3">
				<a
					style={hoverStyle}
					onClick={this.open}
					onMouseEnter={this.mouseOver}
					onMouseLeave={this.mouseLeave}>
					<img src={this.props.data.posterPath} alt={this.props.data.movieTitle} />
				</a>

				<Modal show={this.state.showModal} onHide={this.close}>
					<Modal.Body>
						<h4>{this.props.data.movieTitle}</h4>
						<p>{this.props.data.movieDescription}</p>
						<p>
							<b>Genres:</b> {this.props.data.genres}
							<br />
							<b>Score:</b> {this.props.data.movieScore}/10
						</p>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={this.close}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
});

var Gallery = React.createClass({
	getInitialState: function() {
		return {
			movieOptions: [],
			postersToShow: []
		};
	},
	componentDidMount: function() {
		this.serverRequest = $.get(NOW_PLAYING_URL + API_KEY, function(data) {
			let movieOptions = [];
			let postersToShow = [];
			for (let i=0; i<data.results.length; i++) {
				movieOptions.push(data.results[i].title);
				// generate strings containing genre names for each movie
				let genreNames = "";
				let genreIds = data.results[i].genre_ids;
				for (let j=0; j<genreIds.length; j++) {
					if (genreIds.indexOf(genres[j].id) > -1) {
						genreNames += genres[j].name;
						genreNames += ", ";
					}
				}
				genreNames = genreNames.slice(0, -2);

				postersToShow.push({
					id: i,
					posterPath: imgBaseUrl + 'w300' + data.results[i].poster_path,
					movieTitle: data.results[i].title,
					movieDescription: data.results[i].overview,
					movieScore: data.results[i].vote_average,
					genres: genreNames
				});
			}
			this.setState({
				movieOptions: movieOptions,
				postersToShow: postersToShow
			});
		}.bind(this));
	},
	componentWillUnmount: function() {
		this.serverRequest.abort();
	},
	filterMovies: function(option) {
		let selectedMovie = [];
		this.serverRequest = $.get(SEARCH_URL + API_KEY + "&query=" + encodeURI(option) + "&page=1", function(data) {
			let genreNames = "";
			let genreIds = data.results[0].genre_ids;
			for (let j=0; j<genreIds.length; j++) {
				if (genreIds.indexOf(genres[j].id) > -1) {
					genreNames += genres[j].name;
					genreNames += ", ";
				}
			}
			genreNames = genreNames.slice(0, -2);

			selectedMovie.push({
				id: 0,
				posterPath: imgBaseUrl + 'w300' + data.results[0].poster_path,
				movieTitle: data.results[0].title,
				movieDescription: data.results[0].overview,
				movieScore: data.results[0].vote_average,
				genres: genreNames
			});
			this.setState({ postersToShow: selectedMovie });
		}.bind(this));
	},
	resetFilter: function() {
		// copied and pasted from the componentDidMount function -- don't try this at home
		this.serverRequest = $.get(NOW_PLAYING_URL + API_KEY, function(data) {
			let movieOptions = [];
			let postersToShow = [];
			for (let i=0; i<data.results.length; i++) {
				movieOptions.push(data.results[i].title);
				// generate strings containing genre names for each movie
				let genreNames = "";
				let genreIds = data.results[i].genre_ids;
				for (let j=0; j<genreIds.length; j++) {
					if (genreIds.indexOf(genres[j].id) > -1) {
						genreNames += genres[j].name;
						genreNames += ", ";
					}
				}
				genreNames = genreNames.slice(0, -2);

				postersToShow.push({
					id: i,
					posterPath: imgBaseUrl + 'w300' + data.results[i].poster_path,
					movieTitle: data.results[i].title,
					movieDescription: data.results[i].overview,
					movieScore: data.results[i].vote_average,
					genres: genreNames
				});
			}
			this.setState({
				movieOptions: movieOptions,
				postersToShow: postersToShow
			});
		}.bind(this));
	},
	render: function() {
		return (
			<div>
				<div className="container">
					<div className="row typeahead">
						<div className="col-sm-12 text-center">
							<div className="th-wrapper">
								<button className="button" onClick={this.resetFilter}>Reset</button>
								<Typeahead
									options={this.state.movieOptions}
									maxVisible={3}
									onOptionSelected={this.filterMovies}
								/>
							</div>
						</div>
					</div>
					<div className="my-row">
						{this.state.postersToShow.map(function(result) {
							return <Poster key={result.id} data={result} />;
						})}
					</div>
				</div>
			</div>
		);
	}
});

ReactDOM.render(
	<Gallery />,
	document.getElementById('gallery')
);
