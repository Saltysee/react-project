import React, { Component } from 'react';

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = { currentDateTime: null, loading: true };
    }

    componentDidMount() {
        this.getTime();
    }

    static renderDateTime(currentDateTime) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr><th>Date Time</th></tr>
                </thead>
                <tbody>
                        <tr>{currentDateTime.date}</tr>
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
            : App.renderDateTime(this.state.currentDateTime);

        return (
            <div>
                <h1 id="tabelLabel" >This is the current time</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    async getTime() {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        this.setState({ currentDateTime: data, loading: false });
    }

}
