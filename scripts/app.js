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

var postersToShow = [];
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
				
				postersToShow.push({
					id: i,
					posterPath: imgBaseUrl + 'w300' + data.results[i].poster_path,
					movieTitle: data.results[i].title,
					movieDescription: data.results[i].overview,
					movieScore: data.results[i].vote_average,
					genres: genreNames
				});
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
					<div className="row zero">
						<div className="twelve columns centered">
							<Typeahead
								options={this.state.movieOptions}
								maxVisible={3}
							/>
						</div>
					</div>
					<div className="row one">
						{this.props.results.map(function(result) {
							return <Poster key={result.id} data={result} />;
						})}
					</div>
				</div>
			</div>
		);
	}
});

ReactDOM.render(
	<Gallery results={postersToShow} />,
	document.getElementById('gallery')
);
