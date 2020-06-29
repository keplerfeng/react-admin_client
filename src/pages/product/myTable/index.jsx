import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';
import { reqProducts } from '../../../network/product/product'
import LinkButton from '../../../components/linkButton/LinkButton'
import { hashHistory } from 'react-router'

class MyTable extends Component {
    state = {
        data: []
    }

    getDetail = () => {
        hashHistory.push('/products/detail')
    }

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
                    <LinkButton>修 改{record.name}</LinkButton>
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
        const { data } = this.state
        console.log(data);
        return (
            <Table columns={this.columns} dataSource={data} />
        );
    }
}

export default MyTable;