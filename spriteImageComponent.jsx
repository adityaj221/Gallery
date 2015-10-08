var SpriteImageComponent = React.createClass({
	render: function(){
		return(
			<img className="main_image" alt="assets/screenshot.png" src={this.props.url}/>
		);
	}
});

