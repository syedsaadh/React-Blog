import React, { Component } from 'react';
import {Form, FormGroup, ControlLabel, FormControl, HelpBlock, Col, Button} from "react-bootstrap";
import * as firebase from "firebase";

var config = {
	apiKey: "AIzaSyC5UvXqoM0ijZIG2BngCpAMFHlSu2SwitA",
	authDomain: "myblog-dbb10.firebaseapp.com",
	databaseURL: "https://myblog-dbb10.firebaseio.com",
	projectId: "myblog-dbb10",
	storageBucket: "myblog-dbb10.appspot.com",
	messagingSenderId: "636865537944"
};
firebase.initializeApp(config);

var database = firebase.database();
var postListRef = database.ref('/posts');
var newPostRef = postListRef.push();
var desc = `One of the things I love about working at Facebook is the emphasis we put on personal growth and the objectives people have for their careers. We believe a person shouldn’t have to be a manager in order to lead people at the company.Strong leadership from individual contributors (ICs) drives product development, and as a designer it’s the best way to develop in your career. In fact it’s the reason the IC and manager tracks are parallel, not sequential. Becoming a manager isn’t seen as a promotion, it just means you’re shifting your focus.
			I joined Facebook during the summer of 2014, as an IC in the London office. It was an exciting time to join, as product teams were being established in London for the first time. There was just a handful of product designers in the newly opened office, which sits in between Euston Station and Regents Park, over three glass-clad floors.`;

function writePostData(title, desc) {
  newPostRef.set({
    title: title,
    desc : desc
  });
}
export default class WritePost extends React.Component {
	constructor(){
		super();
		this.state = {
			title: '',
			desc: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	getInitialState() {
		return {
			title: '',
			desc: ''
		};
	}

	getValidationState() {
		const length = this.state.title.length;
		if (length > 10) return 'success';
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
		writePostData(this.state.title, this.state.desc);
		alert("Added Post");
	}

    render() {
      return (
      <div>
        <h1> Write Post </h1>
        <div className="col-md-6">
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
        	<FormControl type="text" placeholder="Enter text" name="desc" onChange={this.handleChange}/>
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
