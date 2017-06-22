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
		const _state = this.state;
		const _setState = this.setState;
		const database = firebase.database();
		const postListRef = database.ref('posts');
		postListRef.on('value', this.onDataChanged);
	}
	render() {
		return (
			<div>
				<h2>Blog</h2>
				<ul>{this.state.posts.map((value ,index) => 
						<li key={index}>
							<p>{value.title}</p>
							<p>{value.desc}</p>
						</li>
					)}
				</ul>
			</div>
		);
	}
}