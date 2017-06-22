import React from "react";
import * as firebase from "firebase";
import { forEach } from "lodash";

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
		postListRef.on('value', this.onDataChanged);
	}
	render() {
		return (
			<div className="container">
				<h2>Blog</h2>
				<div>{this.state.posts.map((value ,index) => 
						<div key={index}>
							<h4>{value.title}</h4>
							<p>{value.desc}</p>
						</div>
					)}
				</div>
			</div>
		);
	}
}