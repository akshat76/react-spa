import React from 'react';
import '../index.css';
import { Form, Icon, Input, Button, Card } from 'antd';

const FormItem = Form.Item;

const LoginComponent = ({ username, password }) => (
    <Card>
        <Icon type="user" style={{ color: '#2196F3', fontSize: 140 }} />
        <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" size="large" />
            </FormItem>
            <FormItem>
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Password" size="large" />
            </FormItem>
            <FormItem>
                <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                >
                    Log in
                        </Button>
            </FormItem>
        </Form>
    </Card>
);

export default LoginComponent;