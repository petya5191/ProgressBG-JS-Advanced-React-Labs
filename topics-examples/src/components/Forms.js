import React from 'react';
import './css/forms.css';

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSelectChange(event) {
        this.setState({'color': event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>User name: <input type="text"/></label>

                    <label>
                        Favorite color:
                        <select value={this.state.value} onChange={this.handleSelectChange}>
                            <option value="red">red</option>
                            <option value="green">green</option>
                            <option value="blue">blue</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                <div>
                    <h3>Submitted data:</h3>
                    {
                        Object.keys(this.state).map( e => <p>e: {this.state[e]}</p>)
                    }
                </div>
            </div>
            );
        }
    }

    export {Forms};