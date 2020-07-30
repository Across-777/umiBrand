import React from 'react';
import BrandContextComponent from './components/BrandContextComponent';
import BreadContent from '../../components/BreadContent';

export default (props) => {
  console.log('BrandRecognition', props.location);

  return (
    <BreadContent>
      <BrandContextComponent />
    </BreadContent>
  );
};



























// import React from 'react'
// import { Table} from 'antd';
// import BreadContent from '@/components/BreadContent'

// const columns = [
//     {
//         title: '品牌名称',
//         dataIndex: 'name',
//         key: 'name',
//     },
//     {
//         title: '状态',
//         dataIndex: 'age',
//         key: 'age',
//     },
//     {
//         title: '操作',
//         dataIndex: 'address',
//         key: 'address',
//     },
//     {
//         title: '操作人',
//         dataIndex: 'address',
//         key: 'address',
//     },
//     {
//         title: '操作时间',
//         dataIndex: 'address',
//         key: 'address',
//     },


// ];

// const data = [
//     {
//         key: '1',
//         name: 'John Brown',
//         age: 32,
//         address: 'New York No. 1 Lake Park',
//         tags: ['nice', 'developer'],
//     },
//     {
//         key: '2',
//         name: 'Jim Green',
//         age: 42,
//         address: 'London No. 1 Lake Park',
//         tags: ['loser'],
//     },
//     {
//         key: '3',
//         name: 'Joe Black',
//         age: 32,
//         address: 'Sidney No. 1 Lake Park',
//         tags: ['cool', 'teacher'],
//     },
// ];

// export default (props) => {
//     return (
//         <BreadContent>
//             <div className='search_component'>
//                 <div className='search_tip'>
//                     <h3>查询条件</h3>
//                 </div>
//                 <div className='search_div'>
//                     <div className='search_info'>
//                         <div className='search_input'>
//                             品牌名称：<input type='txet'></input>
//                         </div>
//                         <div className='search_select'>
//                             状态：
//                         <select>
//                                 <option value="">请选择</option>
//                                 <option value="">待确认</option>
//                                 <option value="">成功</option>
//                                 <option value="">失败</option>
//                                 <option value="">取消</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div className='search_button'>
//                         <button>查询</button>
//                         <button>重置</button>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <div className='table_txt'>
//                     品牌确认
//                 </div>
//                 <div>
//                     <Table columns={columns} dataSource={data} />
//                 </div>
//             </div>
//         </BreadContent>

//     )
// }