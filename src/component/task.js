import React,{useState} from "react";
import "antd/dist/antd.css";
import { Row, Col, Divider, Layout } from "antd";
const style = { background: "#FFA500", padding: "8px 0",height:'150px',borderRadius:'5px',marginBottom:'2%' };
const {Content} = Layout;

const Task=()=>{
    return(
        <>
        <Layout>
          <Content style={{ margin: "24px 16px 0" }}>
              <Divider orientation="center">Task-1</Divider>
              <Row gutter={24}>
                <Col className="" xs={12} md={12} lg={8} sm={24}>
                  <div style={style}></div>
                </Col>
                <Col className="" xs={12} md={12} lg={8} sm={24}>
                  <div style={style}></div>
                </Col>
                <Col className="" xs={12} md={12} lg={8} sm={24}>
                  <div style={style}></div>
                </Col>
                <Col className="" xs={12} md={12} lg={8} sm={24}>
                  <div style={style}></div>
                </Col>
                <Col className="" xs={12} md={12} lg={8} sm={24}>
                  <div style={style}></div>
                </Col>
                <Col className="" xs={12} md={12} lg={8} sm={24}>
                  <div style={style}></div>
                </Col>
                <Col className="" span={12} offset={6}>
                  <div style={style}></div>
                </Col>
              </Row>
          </Content>
        </Layout>
      </>
    )
}

export default Task;