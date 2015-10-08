var VerticalSpanComponent = React.createClass({
  	_calculateDuration: function(){
	  	var length = this.props.item.length;
	  	var minutes = length / 60;
	  	var hours = parseInt(minutes / 60);
	  	var minutes = parseInt(minutes % 60); 
		
		return (hours + "h " + minutes + "m");
  	},

  	render: function(){
    	var item = this.props.item;
		return(
			<div className="verticalSpan">
				<span className="year">{item.production_year}</span>
				<StarComponent rating={item.rating}/>
				<IconComponent item={item} />
				<span className="duration"> {this._calculateDuration()} </span>	
			</div>
		);
	}
});

