const App = React.createClass({
    render: function () {
        return <div>
            {this.props.children}
        </div>
    }
});

const Editor = React.createClass({
    render: function () {
        return <div>
            <ReactRouter.Link to="/previewer">previewer</ReactRouter.Link>
            Editor
        </div>
    }
});

const previewer = React.createClass({
    render: function () {
        return <div>
            <ReactRouter.Link to="/">Editor</ReactRouter.Link>
            previewer
        </div>
    }
})

ReactDOM.render(
    <ReactRouter.Router>
        <ReactRouter.Route path="/" component={App}>
            <ReactRouter.IndexRoute component={Editor} />
            <ReactRouter.Route path="previewer" component={previewer} />
        </ReactRouter.Route>
    </ReactRouter.Router>
,document.getElementById('content'));
