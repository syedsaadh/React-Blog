import React from "react";
import * as firebase from "firebase";
import { forEach, head } from "lodash";
import renderHTML from 'react-render-html';
var md = require('markdown-it')({
    html: true,
  linkify: true,
  typographer: true
});


export default class Article extends React.Component {
    constructor() {
        super();
        this.state = {
            article :{
                desc:""
            }
        }
        this.onArticleFetched = this.onArticleFetched.bind(this);
    }

    onArticleFetched(snapshot) {
        var obj = snapshot.val();
        if (obj) {
            //console.log(obj[Object.keys(obj)[0]]);
            this.setState({
                article:obj[Object.keys(obj)[0]]
            });
        } else {
            this.props.history.push('/blog');
        }

    }

    componentDidMount() {
        let _props = this.props;
        this.slug = this.props.match.params.id;
        const database = firebase.database();
        const articleRef = database.ref('posts').orderByChild('slug').equalTo(this.slug);
        articleRef.once('value', this.onArticleFetched);
    }

    render() {
        return (
            <div className="col-md-8 col-md-offset-2">
                <div className="article-section">
                    <h3 style={{textAlign: "center"}}>{this.state.article.title}</h3>
                    <div className="content"> 
                        {renderHTML(md.render(this.state.article.desc))}
                    </div>
                </div>
            </div>
        )
    }
}