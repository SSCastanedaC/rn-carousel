import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View, Dimensions} from 'react-native';

var {height, width} = Dimensions.get('window');

export default class Carousel extends Component{
    state = {
        slides: [
            {
                text: 'LinkedIn',
                image: require('./assets/linkedin.png')
            },
            {
                text: 'Facebook',
                image: require('./assets/facebook.png')
            },
            {
                text: 'Spotify',
                image: require('./assets/spotify.png')
            },
            {
                text: 'Twitter',
                image: require('./assets/twitter.png')
            },
            {
                text: 'Youtube',
                image: require('./assets/youtube.png')
            }
        ],
        itemActive: 0
    }

    render(){
        return(
            <View style={{flex:1}}>
                <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>                    
                    {this.state.slides.map((item, key) => (
                        <View key={key} style={styles.slideContainer}>
                            <Image source={this.state.slides[key][0]} style={styles.images} resizeMode='cover'></Image>
                            <Text style={styles.text}>{this.state.slides[key][1]}</Text>
                        </View>
                    ))}
                    <View style={styles.dotsContainer}>
                        { this.state.slides.map((item, key) => (
                            <Image key={key} style={styles.dots} source={this.state.activeItem == key ? require('./assets/circle-salmon.png') : require('./assets/circle-white.png')}></Image>
                        ))}                        
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    slideContainer: {
        width:width,
        paddingHorizontal:0.1*width,
        alignItems:'center',
        justifyContent:'center'
    },
    images: {
        width:200,
        height:200,
        marginBottom: 50
    },
    text: {
        color:'#fff',
        fontSize:22,
        fontWeight:'bold'
    },
    dotsContainer: {
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center'
    },
    dots: {
        width:30,
        height:30,
        marginHorizontal:3
    }
})