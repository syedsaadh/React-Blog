import React from "react";
import * as firebase from "firebase";
import { forEach } from "lodash";
import PostHighlight from '../components/PostHighlight';



export default class Blog extends React.Component {
	
	constructor() {
		super();
		this.state = {
			posts: []
		};
		this.onDataChanged = this.onDataChanged.bind(this);
	}
	onDataChanged(snapshot) {
		var obj = snapshot.val();
		var _posts = [];
		forEach(obj, function (value) {
			_posts.push(value);
		})
		this.setState({
			posts: _posts
		});
	}
	
	componentDidMount() {
		const database = firebase.database();
		const postListRef = database.ref('posts');
		postListRef.once('value', this.onDataChanged);
	}
	render() {
		console.log(this.props);
		return (
			<div className="container">
				<h2>Blog</h2>
				<PostHighlight data={this.state.posts}/>
			</div>
		);
	}
}