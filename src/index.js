//impoer libraries
import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

//create component
class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     //this is the only time we do recat assingnment to this.state
    //     this.state = { lat: null, lag: null, errorMessage: '' };  //sate object
    //     //this.state = { lag: null };

    // }

    state = { lat: null, lag: null, errorMessage: '' }; //without constructor

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            latPostion => {
                //we called setState !!!
                this.setState({ lat: latPostion.coords.latitude });
                console.log(latPostion);
            },
            err => {
                this.setState({ errorMessage: err.message })
            },
        );
    }

    //react say we have to define render
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error : {this.state.errorMessage}</div>

        }

        if (this.state.lat && !this.state.errorMessage) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner />
    };
}



//display component
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
