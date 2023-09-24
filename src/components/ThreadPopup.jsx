import React from 'react'
import { Modal, Button, Input, Upload, } from 'antd';
import { UploadOutlined, ArrowRightOutlined } from '@ant-design/icons'
const ThreadPopup = ({ open, onCancel, value, onChange }) => {
    const { TextArea } = Input;
    return (
        <Modal open={open} closable={false} onCancel={onCancel} footer={null} width={800} >
            <div style={{ width: "100%", border: "1px solid gray", padding: 10, borderRadius: 10, }}>
                <TextArea placeholder="Ask anything..." autoSize style={{ border: "0", boxShadow: "none", fontSize: 17 }} onChange={onChange} value={value} />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <Upload>
                        <Button icon={<UploadOutlined />}>File</Button>
                    </Upload>
                    {value == "" ? null : (<Button type="primary" shape="circle" icon={<ArrowRightOutlined />} />)}
                </div>
            </div>
        </Modal >
    )
}

export default ThreadPopup