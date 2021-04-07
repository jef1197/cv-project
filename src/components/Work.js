import React, {Component} from "react";

class Work extends Component {

    constructor(props) {
        super(props);

        this.state = {
            experiances: [],
            experiance: {},
            title: '',
            start: '',
            end: '',
            desc: '',
            company: '',
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

    onClick = (e) => {
        e.preventDefault();
        
        this.setState({
            edit: true
        })
    }

    render() {
        const { title, start, end, desc, company, edit } = this.state;
        if(!edit){
            return(
            <div>
                <h3>{title}</h3>
                <h3>{company}</h3>
                <h3>start: {start}</h3>
                <h4>end {end}</h4>
                <h4>desc: {desc}</h4>
                <button onClick={this.onClick}>Edit</button>
            </div>
            )
        }
        return (
            <div key={this.props.id}>
                <form onSubmit={this.onSumbit}>
                    <label>Job Title</label>
                    <input  required type='text' name='title' onChange={this.handleChange} value={title}></input>

                    <label>Company</label>
                    <input  required type='text' name='company' onChange={this.handleChange} value={company}></input>

                    <label>Start Date</label>
                    <input required type='date' name='start' onChange={this.handleChange} value={start}></input>

                    <label>End Date</label>
                    <input  required type='date' name='end' onChange={this.handleChange} value={end}></input>

                    <label>Description</label>
                    <input  required type='textarea' name='desc' onChange={this.handleChange} value={desc}></input>

                    <button onClick={this.props.handleDelete} id={this.props.id} name="delExp">Delete</button>
                    <button>Save</button>

                </form>
            </div>
        )
    }

}

export default Work;