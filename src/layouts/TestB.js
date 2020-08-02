import React from 'react';
import { connect } from 'dva';
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
const TestB = props => {
  const { data } = props;
  console.log('index props', props);
  console.log('index data', data);
  console.log('index data.data.info', data.data.info);

  return (
    <div>
      <h1>123456</h1>
      <Table columns={columns} dataSource={data.data.info} />
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
