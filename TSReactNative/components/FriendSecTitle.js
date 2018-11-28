import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions
} from 'react-native'

const width = Dimensions.get('window').width;

export default class FriendSecTitle extends Component {
    state = {
        data: [
            {
                title: '新的朋友',
                img: require('../images/friends-add.png'),
                color: '#FF8800'
            },
            {
                title: '群聊',
                img: require('../images/qunliao.png'),
                color: '#228B22'
            },
            {
                title: '标签',
                img: require('../images/label.png'),
                color: '#009FCC'
            },
            {
                title: '公众号',
                img: require('../images/gzh.png'),
                color: '#009FCC'
            }
        ]
    }

    render() {
        return (<View>
            {this._itemList()}
        </View>)
    }

    _itemList() {
        return this.state.data.map((item, index) => {
            return <TouchableOpacity
                style={{
                    width: width,
                    height: 60,
                    backgroundColor: '#fff',
                }}
                onPress={() => {
                    alert(item.title)
                }}
            >
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 10,
                    height: 60,
                    borderBottomWidth: 1,
                    borderBottomColor: '#ddd'
                }}>
                    <View style={{
                        width: 40,
                        height: 40,
                        backgroundColor: item.color,
                        borderRadius: 5,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Image
                            style={{width: 30, height: 30}}
                            source={item.img}
                        />
                    </View>
                    <Text numberOfLines={1} style={{fontSize: 16, marginLeft: 10}}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        })
    }
}