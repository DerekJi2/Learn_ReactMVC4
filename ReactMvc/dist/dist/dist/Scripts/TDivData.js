var TDivData = React.createClass({
    getInitialState: function () {
        return {
            data: "",
            hiddenClass: (this.props.hidden == "true") ? "hidden" : ""
        };
    },
    componentDidMount: function () {
        $.get(this.props.source, function (response) {
            if (this.isMounted()) {
                this.setState({
                    data: response
                });
            }
        }.bind(this));
    },
    render: function () {
        if (this.props.isHtml == "true")
            return (<div id="dv-account-json" className={this.state.hiddenClass} dangerouslySetInnerHTML={{ __html: this.state.data }}></div>);
        else
            return (<div id="dv-account-json" className={this.state.hiddenClass}>{this.state.data}</div>);
    }
});
ReactDOM.render(<TDivData source="/Content/json/accountJSON.html" hidden="false"/>, document.getElementById('divdata1'));
ReactDOM.render(<TDivData source="/Home/Index" hidden="false" isHtml="true"/>, document.getElementById('divdata2'));
//# sourceMappingURL=TDivData.js.map 
//# sourceMappingURL=TDivData.js.map 
//# sourceMappingURL=TDivData.js.map