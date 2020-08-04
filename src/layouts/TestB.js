import React from 'react';
import { connect } from 'dva';
import { Row, Col, Form, Select, Button, Table, Pagination ,Popconfirm } from 'antd';
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
    title: '操作人',
    dataIndex: 'operator_name',
    key: 'operator_name',
  },
  {
    title: '操作时间',
    dataIndex: 'operate_time',
    key: 'operate_time',
  },
  {
    title: '操作',
    dataIndex: 'operator',
    key: 'operator',
    // render: () => [
    //   <a
    //     onClick={() => {
    //       editHandler(record);
    //     }}
    //   >
    //     Edit
    //   </a>  ,
    //   <Popconfirm
    //     title="Are you sure delete this user?"
    //     onConfirm={() => {
    //       deleteHandler(record.id);
    //     }}
    //     okText="Yes"
    //     cancelText="No"
    //   >
    //     <a>Delete</a>
    //   </Popconfirm>,
    // ],
  },
];

const submitInfo = {
  brandName: undefined,
  status: undefined,
  page:1,
  size:10,
};
const TestB = props => {
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

        {/* <Button type="primary" onClick={this.showModal}>
          Open Modal with async logic
        </Button>
        <Modal
          title="Title"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{ModalText}</p>
        </Modal> */}
      </div>
  );
};

export default connect(({ brand }) => brand)(TestB);

// const brand = {
//     "info": [{
//         "id": 1554,
//         "name": "LGD最牛逼",
//         "operator": "123123",
//         "operator_name": "五月",
//         "operate_time": "2020-07-29T04:38:19Z",
//         "status": 1
//     }, {
//         "id": 1547,
//         "name": "iioodd",
//         "operator": "",
//         "operator_name": "六元",
//         "operate_time": "2020-07-29T02:57:19Z",
//         "status": 2
//     }, {
//         "id": 1546,
//         "name": "pornhub",
//         "operator": "",
//         "operator_name": "七贤",
//         "operate_time": "2020-07-29T06:06:07Z",
//         "status": 3
//     }, {
//         "id": 1533,
//         "name": "ROG",
//         "operator": "gui",
//         "operator_name": "八霸",
//         "operate_time": "2020-07-28T09:39:01Z",
//         "status": 4
//     }, {
//         "id": 1532,
//         "name": "rng",
//         "operator": "13",
//         "operator_name": "九胜",
//         "operate_time": "2020-07-28T09:38:09Z",
//         "status": 1
//     }, {
//         "id": 1520,
//         "name": "IG",
//         "operator": "",
//         "operator_name": "十美",
//         "operate_time": "2020-07-28T09:34:47Z",
//         "status": 2
//     }, {
//         "id": 1518,
//         "name": "eee",
//         "operator": "",
//         "operator_name": "一位",
//         "operate_time": "2020-07-28T08:04:06Z",
//         "status": 2
//     }, {
//         "id": 1517,
//         "name": "www",
//         "operator": "",
//         "operator_name": "二货",
//         "operate_time": "2020-07-28T08:04:03Z",
//         "status": 3
//     }, {
//         "id": 1497,
//         "name": "李四",
//         "operator": "8844188@qq.com",
//         "operator_name": "三亚",
//         "operate_time": "2020-07-28T08:03:39Z",
//         "status": 1
//     }, {
//         "id": 1496,
//         "name": "张三",
//         "operator": "8844188@qq.com",
//         "operator_name": "四国",
//         "operate_time": "2020-07-27T01:54:39Z",
//         "status": 1
//     }],
//     "meta": {
//         "total": 12,
//         "per_page": 10,
//         "page": 1
//     }
// }
