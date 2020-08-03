import React from 'react';
import { connect } from 'dva';
import BreadContent from '../../components/BreadContent';
import { Row, Col, Form, Select, Button, Table, Pagination } from 'antd';
const columns = [
  {
    title: '品牌名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '操作',
    dataIndex: 'operator',
    key: 'operator',
  },
  {
    title: '操作人',
    dataIndex: 'operator_name',
    key: 'operator_name',
  },
  {
    title: '操作时间',
    dataIndex: 'operate_time',
    key: 'operate_time',
  },
];

const submitInfo = {
  brandName: undefined,
  status: undefined,
  page:1,
  size:10,
};
const Brand = props => {
  const { data, dispatch } = props;
  // console.log('index props',props);

  const [form] = Form.useForm();
  // 表单提交事件
  const formFinish = values => {
    // console.log('Success:', values);
    // submitInfo.page=1;
    submitInfo.page=1;
    submitInfo.size=10;
    submitInfo.brandName = values.brandName;
    submitInfo.status = values.status;
    dispatch({
      type: 'brand/getBrandInfo',
      payload: { submitInfo: submitInfo },
    });
  };
  // 重置form 输入框方法
  const onReset = () => {
    form.resetFields();
  };

  // 切换页码事件
  const onChange = (page, pageSize) => {
    submitInfo.page=page;
    submitInfo.size=pageSize;
    console.log('page onchange');
    dispatch({ type: 'brand/getBrandInfo', payload: { submitInfo: submitInfo } })
  };
  return (
    <BreadContent>
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
                <Select placeholder="请选择" allowClear>
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
        <div className="table_txt">品牌确认</div>
        <div>
          <Table
            columns={columns}
            dataSource={data.data.content}
            rowKey="id"
            pagination={{
              defaultCurrent: 1,
              // pageSizeOptions:[10, 20, 50, 100],
              total: `${data.data.total}`,
              pageSize:`${data.data.size}`,
              current:`${data.data.page}`,
              onChange: onChange,
            }}
          />
        </div>
      </div>
    </BreadContent>
  );
};

export default connect(({ brand }) => brand)(Brand);
