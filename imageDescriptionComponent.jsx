var ImageDescriptionComponent = React.createClass({
	render: function(){
		var item = this.props.item;
		return(
			<div className="imageDescription"> 
				<span> {item.title} </span>
				<VerticalSpanComponent item={item} />
			</div>
		);
	}
});
