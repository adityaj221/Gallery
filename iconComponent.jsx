var IconComponent = React.createClass({
  	render: function(){
    var item = this.props.item;
		return(
			<div className="icons">
				<HDIconComponent hd={item.hd} />
        		<SubtitleIconComponent subtitles={item.subtitles} />    
			</div>
		);
	}
});

