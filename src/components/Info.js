import React, {Component} from "react";
import uniqid from "uniqid";

class Info extends Component {
    constructor() {
        super();

        this.state = {
            fName: "",
            lName: "",
            phone: "",
            email: "",
            edit: true
        }
    }

    handleChange = (e) => {
        const {name , value} = e.target;
        this.setState({
                [name]: value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({
            edit: false
        });
    }

    onEdit = (e) => {
        e.preventDefault();
        this.setState({
            edit: true
        })
    }

    render() {
        const {fName, lName ,phone, email, edit} = this.state
        if(!edit){
            return(
            <div className="saveInfo">
                <h3>{fName} {lName}</h3>
                <h4>Tel: {phone}</h4>
                <h4>Email: {email}</h4>
                <button onClick={this.onEdit}>Edit</button>
            </div>
            )
        }
            return (
                <section key={uniqid()} className="editInfo">
                    <form onSubmit={this.onSubmit}>
                    <label>First Name</label>
                    <input required type='text' name='fName' onChange={this.handleChange} value={fName}></input>

                    <label>Last Name</label>
                    <input required type='text' name='lName' onChange={this.handleChange} value={lName}></input>

                    <label>Phone</label>
                    <input required type='tel' name='phone' onChange={this.handleChange} value={phone}></input>

                    <label>Email</label>
                    <input required type='email' name='email' onChange={this.handleChange} value={email}></input>

                    <button>Save</button>
                    </form>

                </section>
                
        )
    };
}

export default Info;