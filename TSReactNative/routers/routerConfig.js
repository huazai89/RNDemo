import {TabBarTop} from "react-navigation";

export const routerConfig = {
    initialRouteName: 'Mess',  // 初始显示的Tab对应的页面路由名称
    tabBarComponent: TabBarTop, // Tab选项卡组件，有 TabBarBottom 和 TabBarTop 两个值，在iOS中默认为 TabBarBottom ，在Android中默认为 TabBarTop 。
    tabBarOptions: {
        activeTintColor: '#1afa29',
        inactiveTintColor: '#8a8a8a',
        showIcon: true,
        showLabel: true,
        //是否将文本转换为大小，默认是true
        upperCaseLabel: false,
        //material design中的波纹颜色(仅支持Android >= 5.0)
        pressColor: '#788493',
        //按下tab bar时的不透明度(仅支持iOS和Android < 5.0).
        pressOpacity: 0.8,

        style: {
            backgroundColor: '#fff',
            paddingBottom: 1,
            borderTopWidth: 0.2,
            paddingTop:1,
            // borderTopColor: '#ccc',
            // color: '#8a8a8a'
        },
        labelStyle: {
            fontSize: 13,
            marginBottom: 5
        },
        indicatorStyle: {height: 0},
    },
    //tab bar的位置, 可选值： 'top' or 'bottom'
    tabBarPosition: 'bottom',
    //是否允许滑动切换tab页
    swipeEnabled: true,
    //是否在切换tab页时使用动画
    animationEnabled: false,
    //是否懒加载
    lazy: true,
    //返回按钮是否会导致tab切换到初始tab页？ 如果是，则设置为initialRoute，否则为none。 缺省为initialRoute。
    backBehavior: 'none',
};