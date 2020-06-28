import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import { hashHistory } from 'react-router';
import { userLogin } from '../../../network/login/login'
import memoryUtils from '../../../utils/memoryUtils'
import localStorageUtil from '../../../utils/localStorageUtil'


class LoginForm extends Component {
    state = {
    }
    handleSubmit = e => {
        e.preventDefault();
        // 得到form对象中的值
        this.props.form.validateFields((err, values) => {
            if (!err) {
                var { username, password } = values
                userLogin({ username, password }).then((res) => {
                    // 这里可以对得到的值做验证
                    let user = memoryUtils.user
                    user = res.data
                    Object.assign(user, { username, password })
                    console.log(user);

                    localStorageUtil.saveUser(user)
                    console.log(localStorageUtil.getUser());

                    // 跳转
                    hashHistory.replace('/admin');
                    message.success('登录成功,你好' + username)
                })
            } else {
                console.log("检验失败");

            }
        });

    };

    myValidator = (rule, value, callback) => {
        if (!value) {
            callback("密码不能为空")
        } else if (value.length < 4) {
            callback("密码必须大于4位")
        } else {
            callback()
        }

    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form" >
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }, { min: 4, message: '至少大于四位' },
                        { max: 12, message: '最长不过12位' }, { pattern: "^[A-Za-z0-9-_]+$", message: '必须是英文数字和下划线' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="请输入用户名"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ max: 16, message: 'Please input your Password!' },
                        { validator: this.myValidator }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>

                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>
            </Form >

        )

    }
}

export default Form.create()(LoginForm);