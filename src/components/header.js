import React from 'react';
import { Icon, Layout } from 'antd';
import 'antd/dist/antd.css';

const { Header } = Layout;

class NavBar extends React.Component{

    render(){
        return (
            <Layout>
                <Header className="header">
                <div className="logo" >
                    <Icon type="solution" />
                </div>
                </Header>
            </Layout>
        );
    }
}

export default NavBar;