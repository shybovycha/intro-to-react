var TweetBox = React.createClass({
  render: function() {
    return (
      <div className="well clearfix">
        <textarea className="form-control" onChange={this.handleChange}></textarea>
        <br/>
        <button className="btn btn-primary pull-right">Tweet</button>
      </div>
    );
  },
  handleChange: function(evt) {
    console.log(evt.target.value);
  }
});

React.render(
  <TweetBox />,
  document.body
);
