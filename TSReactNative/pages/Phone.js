import React,{Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import TopSearch from '../components/TopSearch';
import FriendSecTitle from '../components/FriendSecTitle';

export default class Phone extends Component {
    static navigationOptions = {
        tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image style={styles.tabBarIcon} source={require('../images/phoned.png')}/>
                );
            }
            return (
                <Image style={styles.tabBarIcon} source={require('../images/phone.png')}/>
            );
        },
    };
    render() {
        return (
            <View>
                <TopSearch/>
                <FriendSecTitle/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabBarIcon: {
        width: 22,
        height: 22,
        marginBottom: -10
    }
});
