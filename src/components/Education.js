import React, {Component} from "react";
import './Education.css';

class Education extends Component {

    constructor(props) {
        super(props);

        this.state = {
            educations: [],
            education: {},
            school: '',
            start: '',
            end: '',
            study: '',
            edit: true,
        }
    }

    handleChange = (e) => {
        const {name , value} = e.target;
        this.setState({
                [name]: value,
        })
    }

    onSumbit = (e) => {
        e.preventDefault();
        this.setState({
            edit: false
        })
    }

    onEdit = (e) => {
        e.preventDefault();
        this.setState({
            edit: true
        })
    }

    render() {
        const { school, start, end, study, edit } = this.state;
        if(!edit){
            return(
            <div>
                <h3>{school}</h3>
                <h3>Study: {study}</h3>
                <h4>start {start}</h4>
                <h4>end: {end}</h4>
                <button onClick={this.onEdit}>Edit</button>
            </div>
            )
        }
        return (
            <div key={this.props.id}>
                <form onSubmit={this.onSumbit}>
                    <label>school</label>
                    <input required type='text' name='school' onChange={this.handleChange} value={school}></input>

                    <label>Start Date</label>
                    <input required  type='date' name='start' onChange={this.handleChange} value={start}></input>

                    <label>End Date</label>
                    <input required type='date' name='end' onChange={this.handleChange} value={end}></input>

                    <label>Degree</label>
                    <input required type='text' name='study' onChange={this.handleChange} value={study}></input>

                    <button onClick={this.props.handleDelete} id={this.props.id} name="delEdu">Delete</button>
                    <button>Save</button>
                </form>
            </div>
        )
    }

}

export default Education;