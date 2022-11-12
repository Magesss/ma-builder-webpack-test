'use strict';

// import React from 'react'
// import ReactDom from 'react-dom'
// import './index.less'
// import logo from './images/logo.png'
// import { a } from './tree-shaking'
// import largeNumber from 'magesss-bignumber-test-webpack'
const React = require('react')
const largeNumber = require('magesss-bignumber-test-webpack')
const { a } = require('./tree-shaking')
const logo = require('./images/logo.png')
require('./index.less')

class Search extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
            Text: null
        }
    }
    render() {
        const funcA = a();
        const { Text } = this.state
        const addResult = largeNumber('999999', '1')
        return <div className="search-text">
            {
                Text ? <Text /> : null
            }
            {
                addResult
            }
            { funcA }search page -- react -- dom
            <img onClick={ this.loadComponents.bind(this) } src={ logo } alt=""/>
        </div>
    }
    loadComponents() {
        import('./text.js').then((Text) => {
            this.setState({
                Text: Text.default
            })
        });
    }
}

module.exports = <Search />