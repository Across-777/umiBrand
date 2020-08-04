import React, { useState } from 'react';
import { connect } from 'dva';
import BreadContent from '../../components/BreadContent';
import {
  Row, Col, Form, Select, Button, Table, Pagination,
  Modal, Popconfirm, Space, Input, DatePicker
} from 'antd';

// 提交信息结构
const submitInfo = {
  brandName: undefined,
  status: undefined,
  page: 1,
  size: 10,
};
// madal 样式
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const Brand = props => {
  const { data, dispatch } = props;
  // console.log('index props',props);
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
      render: (text, record) => [

        <Space >
          <a
            onClick={() => {
              editHandler(record);
            }}
          >
            编辑
        </a>
          <Popconfirm title="Sure to delete?" onConfirm={() => deleteHandler(record.id)}>
            <a>删除</a>
          </Popconfirm>
        </Space>
      ],
    },
  ];

  // 表格修改数据事件
  const editHandler = (record) => {
    setModalVisible(true);
    setRecord(record);
  };

  const addHandler = () => {
    setModalVisible(true);
  };
  // 表格删除数据事件
  const deleteHandler = (id) => {
    // console.log('key', id);
    dispatch({ type: 'brand/deleteBrand', payload: { id, } });
    dispatch({ type: 'brand/getBrandInfo', payload: { submitInfo: submitInfo } })
  };


  const [form] = Form.useForm();
  // 表单提交事件
  const formFinish = values => {
    submitInfo.page = 1;
    submitInfo.size = 10;
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
  const pageChangeHandle = (page, pageSize) => {
    submitInfo.page = page;
    submitInfo.size = pageSize;
    console.log('page onchange');
    dispatch({ type: 'brand/getBrandInfo', payload: { submitInfo: submitInfo } })
  };
  // 使用hook 
  const [modalVisible, setModalVisible] = useState(false);
  const [record, setRecord] = useState(undefined);

  useEffect(() => {
    if (record === undefined) {
      form.resetFields();
    } else {
      form.setFieldsValue({
        ...record,
        create_time: moment(record.create_time),
        status: Boolean(record.status),
      });
    }
  }, [visible]);

  //modal 确认事件
  const handleOk = () => {
    setModalVisible(false);
    console.log('handleOk');
  };
  // modal 取消事件
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setModalVisible(false);
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
              <Form.Item label="品牌名称" name="brandName" >
                <Input style={{ width: '80%' }} />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item label="状态" name="status">
                <Select placeholder="请选择" allowClear style={{ width: '80%' }}>
                  <Select.Option value="1">待确认</Select.Option>
                  <Select.Option value="2">成功</Select.Option>
                  <Select.Option value="3">失败</Select.Option>
                  <Select.Option value="4">取消</Select.Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  查询
                </Button>
                <Button htmlType="button" onClick={onReset}>
                  重置
                </Button>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Button htmlType="button" onClick={addHandler}>
                新增
                </Button>
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
              total: `${data.data.total}`,
              pageSize: `${data.data.size}`,
              current: `${data.data.page}`,
              onChange: pageChangeHandle,
            }}
          />
        </div>
        <Modal
          title="信息"
          visible={modalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>{JSON.stringify(record)}</p>
          <Form 
            {...layout}
          >
            <Form.Item label='品牌名称' name='name'>
              <Input style={{ width: '80%' }} />
            </Form.Item>
            <Form.Item label='状态' name='status'>
              <Select placeholder="请选择" allowClear style={{ width: '80%' }}>
                <Select.Option value="1">待确认</Select.Option>
                <Select.Option value="2">成功</Select.Option>
                <Select.Option value="3">失败</Select.Option>
                <Select.Option value="4">取消</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label='操作者' name='operator_name'>
              <Input style={{ width: '80%' }} />
            </Form.Item>
            <Form.Item label='操作时间' name='operate_time'>
              <DatePicker style={{ width: '80%' }} />
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </BreadContent>
  );
};

export default connect(({ brand }) => brand)(Brand);
