import React from "react";
import renderHTML from 'react-render-html';
import { truncate,lowerCase } from "lodash";
import * as removeMd from "remove-markdown";
var md = require('markdown-it')({
    html: true,
  linkify: true,
  typographer: true
});

//<div>{renderHTML(converter.makeHtml(value.desc))}</div>
export default class PostHighlight extends React.Component {
    mapFn(value, index) {
        return <a id={"post" + index} key={index} href={"article/" + value.slug}>
            <h4>{value.title}</h4>
            <p>{truncate(removeMd(value.desc), {'length':220})}</p>          
        </a>
    }
    render() {
        return (
            <div className="single-article-list">
                {
                    this.props.data.map(this.mapFn)
                }

            </div>
        );

    }

}