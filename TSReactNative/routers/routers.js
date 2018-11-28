import Mess from "../pages/Mess";  // 从HomeScreen页面导入HomeScreen组件，HomeScreen其实是表示HomeScreen.js。./表示当前页面，不可删除
import Dis from "../pages/Dis"; // 从NewsScreen页面导入NewsScreen组件
import Phone from "../pages/Phone"; // 从MyScreen页面导入MyScreen组件
import My from "../pages/My"; // 从MyScreen页面导入MyScreen组件
import {Image} from 'react-native'

export const routers = {  // 表示各个页面路由配置,让导航器知道需要导航的路由对应的页面
    Mess: {  // 路由名称
        screen: Mess,  // 对应的路由页面
        navigationOptions: {
            tabBarLabel: '微信',
        },
    },
    Phone: {
        screen: Phone,
        navigationOptions: {  // 指定路由页面的配置选项
            // tabBarLabel: '新闻',   // 表示tab的标题
            title: '通讯录',  // 可用作头部标题 headerTitle ，或者Tab标题 tabBarLabel
        },
    }
    ,
    Dis: {
        screen: Dis,
        navigationOptions: {
            // tabBarLabel: '我的',
            title: '发现',
        },
    },
    My: {
        screen: My,
        navigationOptions: {
            // tabBarLabel: '我的',
            title: '我的',
        },
    }
};
