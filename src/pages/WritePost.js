import React, { Component } from 'react';
import {Form, FormGroup, ControlLabel, FormControl, HelpBlock, Col, Button} from "react-bootstrap";
import * as firebase from "firebase";



export default class WritePost extends React.Component {
	constructor(){
		super();
		this.state = {
			title: '',
			desc: '',
			valid: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {
		const database = firebase.database();
		const postListRef = database.ref('/posts');
		this.newPostRef = postListRef.push();
	}
	writePostData(title, desc) {
		this.newPostRef.set({
			title: title,
			desc : desc
		});
	}

	getValidationState() {
		const length = this.state.title.length;
		if (length > 10) {
			return 'success';
		}
		else if (length > 5) return 'warning';
		else if (length > 0) return 'error';
	}

	handleChange(e) {
		const target = e.target;
		const name = target.name;
		this.setState({ [name]: target.value });
	}
	
	handleSubmit(e) {
		e.preventDefault();
		if(this.getValidationState() != 'success') return alert("Incomplete Form");
		this.writePostData(this.state.title, this.state.desc);
		alert("Added Post");
		this.setState({
			title: '',
			desc: ''
		});
	}

    render() {
      return (
      <div>
        <div className="col-md-6">
        <h1> Write Post </h1>
        <Form onSubmit={this.handleSubmit}>
        <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
        	<ControlLabel>Title</ControlLabel>
        	<FormControl type="text" value={this.state.title} placeholder="Enter text"
        		onChange={this.handleChange} name="title"/>
        	<FormControl.Feedback />
        	<HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
        <FormGroup controlId="formBasicText2">
        	<ControlLabel>Description</ControlLabel>
        	<FormControl type="text" value={this.state.desc} placeholder="Enter text" name="desc" onChange={this.handleChange}/>
        	<FormControl.Feedback />
        </FormGroup>
        <FormGroup>
        	<Col smOffset={2} sm={10}>
        		<Button type="submit">
        		Publish
        		</Button>
        	</Col>
        </FormGroup>
        </Form>	
        </div>
        
      </div>
    );
  }
}
