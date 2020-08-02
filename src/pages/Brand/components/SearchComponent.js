import React from 'react';
import { Row, Col, Form, Select, Button } from 'antd';

export default props => {
  const { dispatch } = props;

  const [form] = Form.useForm();
  const formFinish = values => {
    console.log('Success:', values);
    dispatch({
      type: 'brand/getBrandInfoByInfo',
      payload: { submitInfo: values },
    });
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div>
      <Row className="search_tip">
        <Col>查询条件</Col>
      </Row>
      <Form form={form} onFinish={formFinish}>
        <Row>
          <Col span={6}>
            <Form.Item label="品牌名称" name="brandName">
              <input />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label="状态" name="status">
              <Select
                placeholder="请选择"
                // onChange={this.onGenderChange}
                allowClear
              >
                <Select.Option value="1">待确认</Select.Option>
                <Select.Option value="2">成功</Select.Option>
                <Select.Option value="3">失败</Select.Option>
                <Select.Option value="4">取消</Select.Option>
              </Select>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
              <Button htmlType="button" onClick={onReset}>
                重置
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
