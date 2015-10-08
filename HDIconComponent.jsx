var HDIconComponent = React.createClass({
	render: function(){
		if(this.props.hd){
			return(
				<img src="assets/icon_hd.png" />
			);
		}
		return(<EmptySpan />);
	}
});

