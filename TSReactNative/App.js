import React, {Component} from "react";
// StackNavigator用于实现各个页面间的跳转。TabNavigator切换组件，实现同一页面上不同界面的切换。
import {StackNavigator, TabBarTop, TabNavigator, createStackNavigator} from "react-navigation";
import {Text, Button, Image, TouchableOpacity} from 'react-native'
// router
import {routers} from './routers/routers';
import {routerConfig} from './routers/routerConfig';

export default class App extends Component {
    render() {
        return (
            <Navigator/>
        );
    }
}

const Tab = TabNavigator(routers, routerConfig);
const StackRouteConfigs = {
    Tab: {
        screen: Tab,
    }
};

const StackNavigatorConfigs = {  // 表示导航器的配置，包括导航器的初始页面、各个页面之间导航的动画、页面的配置选项等等
    initialRouteName: 'Tab',
    navigationOptions: ({navigation}) => {
        let title = ['微信', '通讯录', '发现', '我'];
        return {
            title: title[navigation.state.index],
            headerStyle: {backgroundColor: '#444'},  // 设置导航头部样式
            headerTitleStyle: {color: '#fff'},  // 设置导航头部标题样式
            headerTintColor: '#fff',
            activeTintColor: '#4BC1D2',
            //当前未选中的tab bar的文本颜色和图标颜色
            inactiveTintColor: '#000',
            headerRight: headRightIcon(navigation.state.index)
        }
    }
};
const headRightIcon = function (index) {
    if (index === 0) {
        return (<Button
            title="+"
            color={'#fff'}
            style={{fontSize: 32}}
            onPress={() => navigation.navigate('My')}
        />)
    } else if (index === 1) {
        return (<TouchableOpacity
            onPress={() => {
                alert(22)
            }}>
            <Image
                style={{width: 20, height: 20, marginRight: 10}}
                source={require('./images/add-friends1.png')}
            />
        </TouchableOpacity>);
    }
}
// StackNavigator 导航组件，用来实现各个界面跳转
const Navigator = StackNavigator(StackRouteConfigs, StackNavigatorConfigs);