var ListComponent = React.createClass({
	_getItems: function(){
		var items = [];
		for(var itemCount in this.props.items){
			items.push(<ImageComponent item={this.props.items[itemCount]} key={itemCount}/>);
		}
		return items;
	},

  componentDidMount: function(){
    this.props.imageSize;
  },

  componentDidUpdate: function(){
    this.props.imageSize;
  },

	render: function(){
		return(
			<div className="listComponent">
				{this._getItems()}
			</div>
		);
	}
});

