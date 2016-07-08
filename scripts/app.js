const Button = ReactBootstrap.Button;
const Modal = ReactBootstrap.Modal;
const Typeahead = ReactTypeahead.Typeahead;

var Poster = React.createClass({
	getInitialState: function() {
		return {
			posterPath: '',
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
	componentDidMount: function() {
		this.serverRequest = $.get(NOW_PLAYING_URL + API_KEY, function(data) {
			var genreNames = "";
			var genreIds = data.results[this.props.posterItem].genre_ids;
			for (var i=0; i<genreIds.length; i++) {
				if (genreIds.indexOf(genres[i].id) > -1) {
					genreNames += genres[i].name;
					genreNames += ", ";
				}
			}
			genreNames = genreNames.slice(0, -2);
			this.setState({
				posterPath: imgBaseUrl + 'w300' + data.results[this.props.posterItem].poster_path,
				movieTitle: data.results[this.props.posterItem].title,
				movieDescription: data.results[this.props.posterItem].overview,
				movieScore: data.results[this.props.posterItem].vote_average,
				genres: genreNames
			});
		}.bind(this));
	},
	componentWillUnmount: function() {
		this.serverRequest.abort();
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
					<img src={this.state.posterPath} alt={this.state.movieTitle} />
				</a>

				<Modal show={this.state.showModal} onHide={this.close}>
					<Modal.Body>
						<h4>{this.state.movieTitle}</h4>
						<p>{this.state.movieDescription}</p>
						<p>
							<b>Genres:</b> {this.state.genres}
							<br />
							<b>Score:</b> {this.state.movieScore}/10
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
			movieOptions: []
		};
	},
	componentDidMount: function() {
		this.serverRequest = $.get(NOW_PLAYING_URL + API_KEY, function(data) {
			var movieOptions = [];
			for (var i=0; i<data.results.length; i++) {
				movieOptions.push(data.results[i].title);
			}
			this.setState({ movieOptions: movieOptions });
		}.bind(this));
	},
	componentWillUnmount: function() {
		this.serverRequest.abort();
	},
	render: function() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<div className="twelve columns centered">
							<Typeahead
								options={this.state.movieOptions}
								maxVisible={3}
							/>
						</div>
					</div>
					<div className="row">
						<Poster posterItem="0" />
						<Poster posterItem="1" />
						<Poster posterItem="2" />
						<Poster posterItem="3" />
					</div>
					<div className="row">
						<Poster posterItem="4" />
						<Poster posterItem="5" />
						<Poster posterItem="6" />
						<Poster posterItem="7" />
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