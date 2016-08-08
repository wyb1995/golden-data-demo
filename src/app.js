const App = React.createClass({
    render: function () {
        return <div>App</div>
    }
});

ReactDOM.render(
    <ReactRouter.Router>
        <ReactRouter.Route path="/" component={App}>
        </ReactRouter.Route>
    </ReactRouter.Router>
,document.getElementById('content'));
