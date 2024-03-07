import Back from "@/components/back";
import { ConfigProvider, FloatButton } from "antd";
import {PlusOutlined} from '@ant-design/icons'

export default function SiteManagement(){
    return(
        <>
        <div className="page">
            <Back/>
        </div>
        <ConfigProvider theme={{token:{colorPrimary:"blue"}}}>
        <FloatButton className="float" icon={<PlusOutlined/>} shape="square" type="primary" style={{}}/>
      </ConfigProvider>
        </>
    )
}