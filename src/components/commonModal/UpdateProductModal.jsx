import React, { Component } from 'react';
import { Modal, Button } from 'antd';

class UpdateProductModal extends Component {
    state = {}
    render() {
        const { visible, loading, onOk, onCancel } = this.props
        console.log(onOk);

        return (
            <Modal
                visible={visible}
                title="Title"
                onOk={onOk}
                onCancel={onCancel}
                footer={[
                    <Button key="back" onClick={onCancel}>
                        Return
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={onOk}>
                        Submit
                    </Button>,
                ]}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        );
    }
}

export default UpdateProductModal;