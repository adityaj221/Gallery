var SubtitleIconComponent = React.createClass({
	render: function(){
		if(this.props.subtitles !== undefined){
			return(
				<img src="assets/icon_subtitle.png" />
			);
		}
		return(<EmptySpan />);
	}
});

