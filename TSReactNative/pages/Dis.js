import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default class Dis extends Component {
    static navigationOptions = {
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../images/dised.png')}/>
                );
            }
            return (
                <Image style={styles.tabBarIcon} source={require('../images/dis.png')}/>
            );
        },
    };
    state = {
        data: {
            first: [{
                title: '朋友圈',
                img: require('../images/pyq.png')
            }],
            sec: [
                {
                    title: '扫一扫',
                    img: require('../images/sys.png')
                },
                {
                    title: '扫一扫',
                    img: require('../images/wxyyy.png')
                },
            ],
            third: [
                {
                    title: '看一看',
                    img: require('../images/ck.png')
                },
                {
                    title: '搜一搜',
                    img: require('../images/ss.png')
                },
            ],
            four: [
                {
                    title: '附近的人',
                    img: require('../images/fjdr.png')
                },
            ],
            five: [
                {
                    title: '购物',
                    img: require('../images/gw.png')
                },
                {
                    title: '游戏',
                    img: require('../images/yx.png')
                },
            ],
            six: [
                {
                    title: '小程序',
                    img: require('../images/xcl.png')
                },
            ]

        }
    }

    render() {
        return (<View>
            {this._itemList()}
        </View>)
    }

    _itemList() {
        let itemMap = [];
        Object.keys(this.state.data).forEach((index) => {
            itemMap.push(this.state.data[index])
        })
        return this._items(itemMap)
    }

    _items(item) {
        return item.map((value, index) => {
            return (<View
                key={index}
                style={{
                    backgroundColor: '#fff',
                    marginTop: index === 0 ? 10 : 20
                }}
            >
                {this._mapItem(value)}
            </View>)
        })
    }

    _mapItem(maps) {
        return maps.map((value, index) => {
            return (<View
                key={index}
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 10,
                    height: 45,
                    borderBottomWidth: index === maps.length - 1 ? 0 : 1,
                    borderBottomColor: '#ddd'
                }}
            >
                <Image
                    source={value.img}
                    style={{width: 30, height: 30}}
                />
                <Text numberOfLines={1} style={{fontSize: 16, marginLeft: 10}}>{value.title}</Text>
            </View>)
        })
    }
}

const styles = StyleSheet.create({
    tabBarIcon: {
        width: 22,
        height: 22,
        marginBottom: -10
    }
});
