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
		var hoverStyle;
		if (this.state.hover) {
			hoverStyle = { cursor: 'pointer' };
		} else {
			hoverStyle = { cursor: 'default' };
		}
		return (
			<div className="three columns">
				<a
					style={hoverStyle}
					onClick={this.open}
					onMouseEnter={this.mouseOver}
					onMouseLeave={this.mouseLeave}>
					<img src={this.props.posterPath} alt={this.props.movieTitle} />
				</a>

				<Modal show={this.state.showModal} onHide={this.close}>
					<Modal.Body>
						<h4>{this.props.movieTitle}</h4>
						<p>{this.props.movieDescription}</p>
						<p>
							<b>Genres:</b> {this.props.genres}
							<br />
							<b>Score:</b> {this.props.movieScore}/10
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
			posterPaths: [],
			movieTitles: [],
			movieDescriptions: [],
			genres: [],
			movieScores: []
		};
	},
	componentDidMount: function() {
		this.serverRequest = $.get(NOW_PLAYING_URL + API_KEY, function(data) {
			var movieOptions = [];
			var genreData = [];
			var posterPaths = [];
			var movieTitles = [];
			var movieDescriptions = [];
			var movieScores = [];

			for (var i=0; i<data.results.length; i++) {
				movieOptions.push(data.results[i].title);
				posterPaths.push(imgBaseUrl + 'w300' + data.results[i].poster_path);
				movieTitles.push(data.results[i].title);
				movieDescriptions.push(data.results[i].overview);
				movieScores.push(data.results[i].vote_average);
				// generate strings containing genre names for each movie
				var genreNames = "";
				var genreIds = data.results[i].genre_ids;
				for (var j=0; j<genreIds.length; j++) {
					if (genreIds.indexOf(genres[j].id) > -1) {
						genreNames += genres[j].name;
						genreNames += ", ";
					}
				}
				genreNames = genreNames.slice(0, -2);
				genreData.push(genreNames);
			}

			this.setState({
				movieOptions: movieOptions,
				posterPaths: posterPaths,
				movieTitles: movieTitles,
				movieDescriptions: movieDescriptions,
				movieScores: movieScores,
				genres: genreData
			});
		}.bind(this));
	},
	componentWillUnmount: function() {
		this.serverRequest.abort();
	},
	render: function() {
		return (
			<div>
				<div className="container">
					<div className="row zero">
						<div className="twelve columns centered">
							<Typeahead
								options={this.state.movieOptions}
								maxVisible={3}
							/>
						</div>
					</div>
					<div className="row one">
						<Poster
							posterPath={this.state.posterPaths[0]}
							movieTitle={this.state.movieTitles[0]}
							movieDescription={this.state.movieDescriptions[0]}
							genres={this.state.genres[0]}
							movieScore={this.state.movieScores[0]}
						/>
						<Poster
							posterPath={this.state.posterPaths[1]}
							movieTitle={this.state.movieTitles[1]}
							movieDescription={this.state.movieDescriptions[1]}
							genres={this.state.genres[1]}
							movieScore={this.state.movieScores[1]}
						/>
						<Poster
							posterPath={this.state.posterPaths[2]}
							movieTitle={this.state.movieTitles[2]}
							movieDescription={this.state.movieDescriptions[2]}
							genres={this.state.genres[2]}
							movieScore={this.state.movieScores[2]}
						/>
						<Poster
							posterPath={this.state.posterPaths[3]}
							movieTitle={this.state.movieTitles[3]}
							movieDescription={this.state.movieDescriptions[3]}
							genres={this.state.genres[3]}
							movieScore={this.state.movieScores[3]}
						/>
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