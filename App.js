import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity} from 'react-native';

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
        activeItem: 0
    }

    render(){
        return(
            <View style={{flex:1}}>
              <View style={{flex:0.7, backgroundColor:'#f0f0f0'}}>
                <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} onScroll={(event: Object) => this.setState({activeItem: Math.round((event.nativeEvent.contentOffset.x)/width)})}>
                    {this.state.slides.map((item, key) => (
                        <View key={key} style={styles.slideContainer}>
                            <Image source={this.state.slides[key].image} style={styles.images} resizeMode='cover'></Image>
                            <Text style={styles.text}>{this.state.slides[key].text}</Text>
                        </View>
                    ))}
                </ScrollView>                            
                <View style={styles.dotsContainer}>
                    { this.state.slides.map((item, key) => (
                        <Image key={key} style={styles.dots} source={this.state.activeItem == key ? require('./assets/circle-salmon.png') : require('./assets/circle-white.png')}></Image>
                    ))}                        
                </View>
              </View>
              <View style={{flex:0.3}}>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.text}>Continue</Text>
                </TouchableOpacity>
              </View>
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
        color:'#111',
        fontSize:22,
        fontWeight:'bold'
    },
    dotsContainer: {
        flexDirection:'row',
        justifyContent:'center',
        alignContent:'center',
        paddingBottom: 30
    },
    dots: {
        width:30,
        height:30,
        marginHorizontal:3
    },
    button: {
      width:'80%',
      marginHorizontal: '10%',
      marginTop: 30,
      paddingVertical: 15,
      backgroundColor: '#ababab',
      alignItems: 'center',
      borderRadius: 10
    }
})