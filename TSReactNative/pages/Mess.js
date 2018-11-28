import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, FlatList, Dimensions} from 'react-native';
import TopSearch from '../components/TopSearch';
const {width, height} = Dimensions.get('window')

export default class Mess extends Component {
    static navigationOptions = {
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../images/messed.png')}/>
                );
            }
            return (
                <Image style={styles.tabBarIcon} source={require('../images/mess.png')}/>
            );
        },
    };

    render() {
        return (
            <View>
                {this._messList()}
            </View>
        )
    }

    _messList() {
        let lists = [
            {
                title: 'search',
                flag: 1
            },
            {
                title: 'JAVA支持自定义行间分隔线支持自定义行间分隔线支持自定义行间分隔线支持自定义行间分隔线',
                dec: 'java learn...支持自定义行间分隔线支持自定义行间分隔线支持自定义行间分隔线支持自定义行间分隔线',
                mess: 2,
                time: '20:48'
            },
            {
                title: '完全跨平台',
                dec: '支持自定义行间分隔线',
                mess: 0,
                time: '21:48'
            }, {
                title: '简单的例子',
                dec: 'java 简单的例子 learn...',
                mess: 8,
                time: '20:49'
            }, {
                title: '其中演示了如何利用',
                dec: 'java 其中演示了如何利用 learn...',
                mess: 22,
                time: '10:48'
            }, {
                title: 'JAVA',
                dec: 'java learn...',
                mess: 0,
                time: '20:48'
            }, {
                title: 'JAVA',
                dec: 'java learn...',
                mess: 0,
                time: '20:48'
            }, {
                title: 'JAVA',
                dec: 'java learn...',
                mess: 10,
                time: '20:48'
            }, {
                title: 'JAVA',
                dec: 'java learn...',
                mess: 2,
                time: '20:48'
            }, {
                title: 'JAVA',
                dec: 'java learn...',
                mess: 2,
                time: '20:48'
            }, {
                title: 'JAVA',
                dec: 'java learn...',
                mess: 2,
                time: '20:48'
            }, {
                title: 'JAVA',
                dec: 'java learn...',
                mess: 2,
                time: '20:48'
            }, {
                title: 'JAVA',
                dec: 'java learn...',
                mess: 2,
                time: '20:48'
            }, {
                title: 'JAVA',
                dec: 'java learn...',
                mess: 2,
                time: '20:48'
            }, {
                title: 'JAVA',
                dec: 'java learn...',
                mess: 2,
                time: '20:48'
            }, {
                title: 'JAVA',
                dec: 'java learn...',
                mess: 2,
                time: '20:48'
            },
        ]
        return <FlatList
            data={lists}
            renderItem={({item, index}) => { return this._itemInfo(item, index) }}
            ItemSeparatorComponent={this._separator}/>
    }

    _separator = () => {
        return <View style={{height:1}}/>;
    }


    _itemInfo(item, index) {
        if (item.flag === 1) {
            return <TopSearch/>
        } else {
            return (<View
                style={{height: 70, width: width, backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center'}}>
                <View style={{marginLeft: 10}}>
                    <Image style={{width: 40, height: 40}} source={require('../images/people-img.png')}/>
                </View>

                <View style={{marginLeft: 10, width: width - 110}}>
                    <Text numberOfLines={1} style={{fontSize: 16}}>{item.title}</Text>
                    <Text numberOfLines={1} style={{fontSize: 14, color: '#8a8a8a', marginTop: 6}}>{item.dec}</Text>
                </View>
                <View style={{width: 40,}}>
                    <Text style={{fontSize: 14, color: '#8a8a8a', marginTop: -22}}>{item.time}</Text>
                </View>
            </View>)
        }
    }
}

const styles = StyleSheet.create({
    tabBarIcon: {
        width: 20,
        height: 20,
        marginBottom: -10
    }
});
