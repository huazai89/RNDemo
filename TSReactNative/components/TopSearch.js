import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';

const {width, height} = Dimensions.get('window')

export default class TopSearch extends Component {
    render() {
        return (
            <View style={styles.search_main}>
                <View style={{width: width - 35, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: 20, flexShrink: 1}}>
                    <Image style={{width: 20, height: 20}} source={require('../images/search.png')}/>
                    <Text style={{color: '#666', marginLeft: 8, fontSize: 14}}>搜素</Text>
                </View>
                <Image style={{width: 25, height: 25,}} source={require('../images/volice.png')}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    search_main: {
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 35,
        width: width - 10,
        marginTop: 12,
        marginBottom: 10,
        borderRadius: 5,
        marginLeft: 5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    search_styles: {}
})

