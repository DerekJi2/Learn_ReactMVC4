var CommentList = React.createClass({
    render: function() {
        return (
          <div className="commentList">
            Hello, world! I am a CommentList.
          </div>
      );
    }
});

var CommentForm = React.createClass({
    render: function() {
        return (
          <div className="commentForm">
            Hello, world! I am a CommentForm.
          </div>
      );
    }
});

var CommentBox = React.createClass({
    render: function() {
        return (
          <div className="commentBox">
            <div contentEditable='true' dangerouslySetInnerHTML={{ __html: this.props.object }}></div>
            <h1>Comments</h1>
            <CommentList />
            <CommentForm />
          </div>
      );
    }
});

function TutorialRender(obj)
{
    ReactDOM.render(
      <CommentBox object={obj}/>,
      document.getElementById('content')
    );
}