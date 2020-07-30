import React from 'react'

export default (props) => {

    return (
        <div className='search_component'>
            <div className='search_tip'>
                <h3>查询条件</h3>
            </div>
            <div className='search_div'>
                <div className='search_info'>
                    <div className='search_input'>
                        品牌名称：<input type='txet'></input>
                    </div>
                    <div className='search_select'>
                        状态：
                        <select>
                            <option value="">请选择</option>
                            <option value="">待确认</option>
                            <option value="">成功</option>
                            <option value="">失败</option>
                            <option value="">取消</option>
                        </select>
                    </div>
                </div>
                <div className='search_button'>
                    <button>查询</button>
                    <button>重置</button>
                </div>
            </div>
        </div>
    )
}