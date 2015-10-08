var BoxComponent = React.createClass({
  getInitialState: function() {
    return {
      limit: 30,
      itemsList: {},
      items: {},
    };
  },

  _handleResize: function(e) {
    this._imageSize();
  },

  _handleScroll: function(e) {
    this._loadMore();
  },

  _renderReact: function(data, limit){
    var limit = limit;
    var imageData = data.slice(0, limit);
    this.setState({items: imageData, limit: limit});
    this._imageSize();
  }, 

  _loadMore: function(){
    var windowScrollTop = window.scrollY;
    var loaderPositionTop = document.getElementById("load-more").offsetTop;
    var windowHeight = window.innerHeight;

    if((windowScrollTop + windowHeight) >= (loaderPositionTop - 30)){
      limit = this.state.limit + 30;
      if(limit <= this.state.itemsList.length){
        var data = this.state.itemsList;
        this._renderReact(data, limit);
      }
    }   
  },

  _imageSize: function(){
    var maxWidth = 320;
    var WinWidth = document.getElementsByTagName("body")[0].clientWidth || window.innerWidth;
    var numOfItems = WinWidth/(maxWidth + 32);

    numOfItems = parseInt(numOfItems) + 1;
    var ItemWidth = (WinWidth/numOfItems) - 32;
    var total = ((ItemWidth + 32) * numOfItems);
    $(".imageComponent").width(ItemWidth);
  },

  _handleSuccess: function(data){
    this._renderReact(data, this.state.limit);
    this.setState({itemsList: data});
  },

  _getDataFromServer: function(){
    $.ajax({
      url: "https://api.myjson.com/bins/4bxk6 ",
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        this._handleSuccess(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }.bind(this)
    });
  },

  componentDidMount: function() {
    this._getDataFromServer();
    window.addEventListener('resize', this._handleResize);
    window.addEventListener('scroll', this._handleScroll);
  },

  componentWillUnmount: function() {
    window.removeEventListener('resize', this._handleResize);
    window.removeEventListener('scroll', this._handleScroll);
  },

  render: function() {
    return (
      <ListComponent imageSize={this._imageSize()} items={this.state.items} />
    );
  }
});