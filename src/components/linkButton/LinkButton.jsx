import React, { Component } from 'react';
import './linkButton.less'

class LinkButton extends Component {
    state = {}
    render() {

        return (
            <button {...this.props} className="linkButton"></button>
        );
    }
}

export default LinkButton;