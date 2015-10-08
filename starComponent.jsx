var StarComponent = React.createClass({
	// Sets the initial state variables.
	getInitialState: function(){
		return{
			totalRating: 5,
		};
	},

	_getStars: function(){
		var rating = this.props.rating;
		var nonRating = this.state.totalRating - rating;
		var stars = [];
    var count = 0;

		while(rating--){
			stars.push(<RatingStarComponent key={count++}/>);
		}
		while(nonRating --){
			stars.push(<NonRatingStarComponent key={count++}/>);
		}

		return stars;
	},

	render: function(){
		return(
			<div className="stars">
				{this._getStars()}
			</div>
		);
	}
});