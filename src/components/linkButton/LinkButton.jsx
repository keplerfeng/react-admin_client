import React, { Component } from 'react';
import './linkButton.less'

import { Button } from 'antd';

class LinkButton extends Component {
    state = {}


    render() {
        return (
            <Button {...this.props} className="linkButton"></Button>
        );
    }
}

export default LinkButton;