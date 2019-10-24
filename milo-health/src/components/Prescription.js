import React, { Component } from 'react';

class Prescription extends Component {

    constructor(props) {
        super(props);

        this.onChangeUserID = this.onChangeUserID.bind(this);
        this.onChangeDrug = this.onChangeDrug.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            presc_user: '',
            presc_drug: ''
        }
    }

    onChangeUserID(e) {
        this.setState({
            presc_user: e.target.value
        });
    }

    onChangeDrug(e) {
        this.setState({
            presc_drug: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`USER ID: ${this.presc_user}`);
        console.log(`DRUG: ${this.presc_drug}`);

        this.setState({
            presc_user: '',
            presc_drug: '',
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Enter Prescription</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>User ID: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.presc_user}
                                onChange={this.onChangeUserID}
                                />
                    </div>
                    <div className="form-group">
                        <label>Drug: </label>
                        <input
                                type="text"
                                className="form-control"
                                value={this.state.presc_drug}
                                onChange={this.onChangeDrug}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Enter prescription" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Prescription;
