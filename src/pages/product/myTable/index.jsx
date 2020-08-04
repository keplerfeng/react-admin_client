import React, { Component } from 'react';
import { Table, Divider, Tag, Card } from 'antd';
import { reqProducts } from '../../../network/product/product'
import LinkButton from '../../../components/linkButton/LinkButton'
import { hashHistory } from 'react-router'
import UpdateProductModal from '../../../components/commonModal/UpdateProductModal'

class MyTable extends Component {
    state = {
        data: [],
        loading: false,
        visible: false,
    }

    getDetail = () => {
        hashHistory.push('/products/detail')
    }


    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false, visible: false });
        }, 0);
    };

    handleCancel = () => {
        this.setState({ visible: false });
        console.log(1111);

    };


    columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: t => <LinkButton onClick={this.getDetail}>{t}</LinkButton>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Describe',
            dataIndex: 'describe',
            key: 'describe',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <span>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </span>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <span>
                    <LinkButton onClick={this.showModal}>修 改{record.name}</LinkButton>
                    <Divider type="vertical" />
                    <LinkButton>删除</LinkButton>
                </span>
            ),
        },
    ];

    getProducts = async () => {
        const results = await reqProducts()
        results.data.forEach((val) => {
            val.key = val.id
        })
        this.setState({
            data: results.data
        })
    }

    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        this.getProducts()
    }


    render() {
        const { data, visible } = this.state
        console.log(data);
        return (
            <div>
                <Card title="商品管理" extra={<LinkButton style={{ backgroundColor: 'greenyellow' }}>添加</LinkButton>}>
                    <Table columns={this.columns} dataSource={data} />
                </Card>
                <UpdateProductModal
                    visible={visible}
                    title="Title"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                />
            </div>
        );
    }
}

export default MyTable;