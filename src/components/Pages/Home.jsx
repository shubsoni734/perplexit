import React, { useContext, useState } from 'react'
import Layout from '../Layouts/Layout'
import { MyContext } from '../../context/userContext'
import { Input, Button, message, Upload, Tag } from 'antd';
import { UploadOutlined, ArrowRightOutlined } from '@ant-design/icons';
import Column from 'antd/es/table/Column';
import { FaLeaf } from 'react-icons/fa';
const { TextArea } = Input;
function Home() {
    const { user, setUser } = useContext(MyContext);
    const [SearchValue, setSearchValue] = useState("")
    return (
        <Layout>
            <div style={{ height: "98vh", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ fontSize: '40px', color: '#133438', marginBottom: '30px' }}>Where knowledge begins</h1>
                <div style={{ width: '65%', border: "1px solid gray", padding: 10, borderRadius: 10, marginBottom: '30px' }}>
                    <TextArea placeholder="Ask anything..." autoSize style={{ border: "0", boxShadow: 'none', fontSize: 17 }} onChange={(e) => setSearchValue(e.target.value)} value={SearchValue} />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Upload>
                            <Button icon={<UploadOutlined />}>File</Button>
                        </Upload>
                        {SearchValue == '' ? null :
                            <Button type="primary" shape="circle" icon={<ArrowRightOutlined />} />}
                    </div>
                </div>
                <div style={{ width: '40%', textAlign: 'center', marginTop: 20 }}>
                    <Tag bordered={false} color="processing"> history of Argentina </Tag>
                    <Tag bordered={false} color="success"> unique colorado flowers </Tag>
                    <Tag bordered={false} color="error"> checkout time w hotel cdmx </Tag>
                    <Tag bordered={false} color="warning"> how to center a div </Tag>
                    <Tag bordered={false} color="magenta"> brown dog name ideas </Tag>
                    <Tag bordered={false} color="red"> healthy restaurants in sf </Tag>
                    <Tag bordered={false} color="volcano"> d/dx x^2 y^4, d/dy x^2 y^4 </Tag>
                    <Tag bordered={false} color="orange"> orange </Tag>
                    <Tag bordered={false} color="geekblue"> geekblue </Tag>
                    <Tag bordered={false} color="purple"> purple </Tag>
                </div>
            </div>
        </Layout >
    )
}

export default Home