import React, {Component} from 'react';
import { Form, Input, Button, Select } from 'antd';
import { browserHistory  } from 'react-router';
import { msgToast } from '@/Utils';
import './index.less';
import img from '@/img/logo.png';
import userPic from '@/img/user.png';
import pwdPic from '@/img/pwd.png';

class Index extends Component {

    onFinish= (value) => {
        if(value.name==='chenghao'&&value.pwd==='123456') {
            localStorage.setItem('token', new Date())
            browserHistory .push('/')
        }else {
            msgToast('用户名或密码错误')
        }
    }
    render() {
        return (
            <div className='background'>
                <div className='background-logo'>
                    <img src={ img } className='img'/>
                </div>
                <div className='login'>
                    <div className='name'>
                        <span className='name-span'>IT运维管理系统</span>
                    </div>
                    <div className='form'>
                        <Form
                            layout='vertical'
                            onFinish={this.onFinish}
                        >
                            <Form.Item
                                name="name"
                                label="用户名"
                                colon={false}
                            >
                                <Input
                                    className='input'
                                    suffix={<img className='suffixIcon' src={userPic}/>}
                                />
                            </Form.Item>
                            <Form.Item
                                name="pwd"
                                label="密码"
                                colon={false}
                            >
                                <Input.Password
                                    className='input'
                                    suffix={<img className='suffixIcon' src={pwdPic}/>}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className='submit-button'
                                >
                                    立即登录
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;