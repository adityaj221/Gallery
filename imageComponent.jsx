var ImageComponent = React.createClass({
	render: function(){
		var item = this.props.item;
		return(
			<div className="imageComponent">
				<SpriteImageComponent url={item.sprite_url} />
				<ImageDescriptionComponent item={item} />
			</div>
		);
	}
});

