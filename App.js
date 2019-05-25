import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

export default class Carousel extends Component{
    state = {
        slides: [
            {
                text: 'This is text #1',
                image: require('pathToImage1')
            },
            {
                text: 'This is text #1',
                image: require('pathToImage1')
            },
            {
                text: 'This is text #1',
                image: require('pathToImage1')
            }
        ],
        itemActive: 0
    }

    render(){
        return(
            <View style={{flex:1}}>
                <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>                    
                    {this.state.slides.map((item, key) => (
                        <View>
                            <Text>{item}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>
        )
    }

}