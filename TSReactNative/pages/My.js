import React,{Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
export default class My extends Component {
    static navigationOptions = {
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../images/meed.png')}/>
                );
            }
            return (
                <Image style={styles.tabBarIcon} source={require('../images/me.png')}/>
            );
        },
    };
    state = {
        data: {
            first: [{
                title: '这是一个长名字',
                img: require('../images/foto.png')
            }],
            sec: [
                {
                    title: '钱包',
                    img: require('../images/sys.png')
                }
            ],
            third: [
                {
                    title: '收藏',
                    img: require('../images/sc.png')
                },
                {
                    title: '相册',
                    img: require('../images/xc.png')
                },
                {
                    title: '卡包',
                    img: require('../images/kb.png')
                },
                {
                    title: '表情',
                    img: require('../images/bq.png')
                }
            ],
            four: [
                {
                    title: '设置',
                    img: require('../images/sz.png')
                },
            ],

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
                {this._mapItem(value, index)}
            </View>)
        })
    }

    _mapItem(maps, flag) {
        return maps.map((value, index) => {
            return (<View
                key={index}
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 10,
                    height: flag === 0 ? 80 : 45,
                    borderBottomWidth: index === maps.length - 1 ? 0 : 1,
                    borderBottomColor: '#ddd'
                }}
            >
                <Image
                    source={value.img}
                    style={{width: flag === 0 ? 60 : 30, height: flag === 0 ? 60 : 30}}
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