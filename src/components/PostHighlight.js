import React from "react";
import renderHTML from 'react-render-html';
var showdown = require('showdown');

export default class PostHighlight extends React.Component {
    convertHtml(text) {
        var converter = new showdown.Converter();
        return converter.makeHtml(text);
    }
    mapFn(value, index) {
        var converter = new showdown.Converter();
        console.log(value);
        return <div id={"post"+index} key={index}>
            <h4>{value.title}</h4>
            <div>{renderHTML(converter.makeHtml(value.desc))}</div>
        </div>
    }
    render() {
        return (
            <div>
                {
                    this.props.data.map(this.mapFn)
                }

            </div>
        );

    }

}