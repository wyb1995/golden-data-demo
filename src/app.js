const App = React.createClass({
    getInitialState: function () {
        return {
            elements: ['date']
        }
    },
    removeElement: function (index) {
        const elements = this.state.elements;
        elements.splice(index,1);
        this.setState({elements});
    },
    render: function () {
        return <div>
            {this.props.children && React.cloneElement(this.props.children, {
                elements: this.state.elements,
                onRemove: this.removeElement
            })}
        </div>
    }
});

const Editor = React.createClass({
    render: function () {
        return <div>
            <ReactRouter.Link to="/previewer">previewer</ReactRouter.Link>
            <LeftPanel elements={this.props.elements} onRemove={this.props.onRemove}/>
            <RightPanel />
        </div>
    }
});

const LeftPanel = React.createClass({
    remove: function (index) {
        this.props.onRemove(index);
    },
    render: function () {
        const elements = this.props.elements.map((ele, index) => {
            return <div key={index}>
                <input type={ele}/>
                <button onClick={this.remove.bind(this, index)}>X</button>
            </div>
        });
        return <div>{elements}</div>
    }
});

const RightPanel = React.createClass({
    render: function () {
        return <div>rightPanel</div>
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
            <ReactRouter.IndexRoute component={Editor}/>
            <ReactRouter.Route path="previewer" component={previewer}/>
        </ReactRouter.Route>
    </ReactRouter.Router>
    , document.getElementById('content'));
