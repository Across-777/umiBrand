import React from 'react';
import { Table, Pagination } from 'antd';
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

export default props => {
  const { tableDate } = props;
  // console.log(tableDate);
  const onChange = () => {
    console.log('onchange');
  };
  return (
    <div>
      <div className="table_txt">品牌确认</div>
      <div>
        <Table
          columns={columns}
          dataSource={tableDate}
          rowKey="id"
          pagination={{
            defaultCurrent: 1,
            total: 100,
            onChange: onChange,
          }}
        />
      </div>
    </div>
  );
};
