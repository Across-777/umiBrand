import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link } from 'umi';

export default (props) => {
    const { SubMenu } = Menu;
    const { Sider } = Layout;
    const menu = [{
        code: "1",
        name: '京东商品管理',
        children: [{
            code: "1.1",
            name: '品牌确认',
            href: '/option',
        },
        {
            code: "1.2",
            name: '京东商品池查询',
            href: '/option2',
        }]
    },
    {
        code: "2",
        name: '商品管理',
        children: [{
            code: "2.1",
            name: '商品维护',
            href: '/option3',
        },
        {
            code: "2.2",
            name: '商品属性管理',
            href: '/option4',
        }]
    }]

    // 处理children数据 返回 Menu.Item
    function deepchild(children) {
        return children.map(item => {
            return (
                <Menu.Item key={item.code}>
                    <Link to={item.href}>{item.name}</Link>
                </Menu.Item>
            )
        })
    }
    const menuTip = function deep(menu) {
        if (menu && menu.length > 0) {
            return menu.map(item => {
                if (item.children && item.children.length > 0) {
                    return (
                        <SubMenu key={item.code} title={item.name}>
                            {deepchild(item.children)}
                        </SubMenu>
                    )
                }
            })
        }
    }
    return (

        <Sider width={200} className="site-layout-background">
            <Menu
                // defaultSelectedKeys={['1.1']}
                // defaultOpenKeys={["1"]}
                mode="inline"
                style={{ height: '100%', borderRight: 0 }}
            >
                {menuTip(menu)}
                {/* <SubMenu key="sub1" title="京东商品管理">
                    <Menu.Item key="1"><Link to="/option">品牌确认</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="./option2">option2</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="/option3">option3</Link></Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                </SubMenu> */}
            </Menu>
        </Sider>
    )
}