import React from 'react';
import { StyleSheet, Text, View, TextInput, ActivityIndicator, Image,ImageBackground, TouchableHighlight } from 'react-native';
import Header from './comp/header';
import Footer from './comp/footer';

export default class WeatherAsycn126 extends React.Component {
    static navigationOptions = {
        header: null
      };
    constructor(props) {
      super(props);
        this.state = {
          city: '',
          forecast: {
            main: '-',
            description: '-',
            temp: '-',
            sunrise: '-',
            sunset: '-',
            pressure: '-',
            humidity: '-',
            sea_level: '-',
            grnd_level:'-',
            speed: '-',
            loading:false,
          }
        };
    }
    async getWeather() {
        const URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.state.city +
          '&appid=7eb1aac6e0369afa3bafdd9dfba45366&units=metric';
        try {
          this.setState({loading:true});
          const response = await fetch(URL);
          const responseJson = await response.json();
          return this.setState({
            loading:false,
            forecast: {
              main: responseJson.weather[0].main,
              description: responseJson.weather[0].description,
              temp: responseJson.main.temp,
              sunrise: responseJson.sys.sunrise,
              sunset: responseJson.sys.sunset,
              pressure: responseJson.main.pressure,
              humidity: responseJson.main.humidity,
              sea_level: responseJson.main.sea_level,
              grnd_level: responseJson.main.grnd_level,
              speed: responseJson.wind.speed
            }
          });
        } catch (error) {
          //console.error(error);
          this.setState({loading:true});
          }
    }
    

    render() {
        return (

            <View style={styles.containerMain}>
                <Header judul="Weather Forecast" />
                <View style={styles.sider}>
                <ImageBackground source={require('./img/background.jpg')} style={{width:'100%', height:'100%'}}>
                <View style={styles.inputan}></View>
                <View style={styles.up}>
                <Image source={require('./img/logo.png')} style={styles.logo}/>
                <TextInput
                    style={styles.isian}
                    placeholder="Enter City Name"
                    underlineColorAndroid="transparent"
                    onChangeText={(city) => this.setState({ city })}/>
                    <TouchableHighlight style={styles.buttom}
                    onPress={() => this.getWeather()}>
                    { this.state.loading ?
                    <ActivityIndicator color="blue" size="small" animating />
                          : <Text style={{fontSize: 14, color: '#fff'}}>Check</Text>
                    }
                    
                    </TouchableHighlight>
                </View>

                <View style={styles.hasil}>
                  <View style={styles.status}>
                    <View style={styles.kondisi}>
                      <View style={styles.icon}>
                        <Image source={require('./img/temp.png')} style={styles.image} />
                      </View>
                      <View style={styles.cek}>
                        <Text style={styles.txtCek}>
                          Temp : {'\n'}
                          { this.state.forecast.temp}
                        </Text>
                      </View>
                    </View>
                    <View style={styles.kondisi}>
                      <View style={styles.icon}>
                      <Image source={require('./img/wind.png')} style={styles.image} />
                      </View>
                      <View style={styles.cek}>
                      <Text style={styles.txtCek}>
                        Wind Speed : {'\n'}
                        { this.state.forecast.speed}
                      </Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.status}>
                    <View style={styles.kondisi}>
                      <View style={styles.icon}>
                      <Image source={require('./img/main.png')} style={styles.image} />
                      </View>
                      <View style={styles.cek}>
                      <Text style={styles.txtCek}>
                        Main : {'\n'}
                        { this.state.forecast.main}
                      </Text>
                      </View>
                    </View>
                    <View style={styles.kondisi}>
                      <View style={styles.icon}>
                      <Image source={require('./img/main.png')} style={styles.image} />
                      </View>
                      <View style={styles.cek}>
                      <Text style={styles.txtCek}>
                        Mian Desc : {'\n'}
                        { this.state.forecast.description}
                      </Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.status}>
                    <View style={styles.kondisi}>
                      <View style={styles.icon}>
                      <Image source={require('./img/sunrise.png')} style={styles.image} />
                      </View>
                      <View style={styles.cek}>
                      <Text style={styles.txtCek}>
                        Sunrise : {'\n'}
                        { this.state.forecast.sunrise}
                      </Text>
                      </View>
                    </View>
                    <View style={styles.kondisi}>
                      <View style={styles.icon}>
                      <Image source={require('./img/sunset.png')} style={styles.image} />
                      </View>
                      <View style={styles.cek}>
                      <Text style={styles.txtCek}>
                        Sunset : {'\n'}
                        { this.state.forecast.sunset}
                      </Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.status}>
                    <View style={styles.kondisi}>
                      <View style={styles.icon}>
                      <Image source={require('./img/preasure.png')} style={styles.image} />
                      </View>
                      <View style={styles.cek}>
                      <Text style={styles.txtCek}>
                        Presure : {'\n'}
                        { this.state.forecast.pressure}
                      </Text>
                      </View>
                    </View>
                    <View style={styles.kondisi}>
                      <View style={styles.icon}>
                      <Image source={require('./img/humidity.png')} style={styles.image2} />
                      </View>
                      <View style={styles.cek}>
                      <Text style={styles.txtCek}>
                        Humadity : {'\n'}
                        { this.state.forecast.humidity}
                      </Text>
                      </View>
                    </View>
                  </View>

                  <View style={styles.status}>
                    <View style={styles.kondisi}>
                      <View style={styles.icon}>
                      <Image source={require('./img/sea.png')} style={styles.image2} />
                      </View>
                      <View style={styles.cek}>
                      <Text style={styles.txtCek}>
                        Sea Level : {'\n'}
                        { this.state.forecast.sea_level}
                      </Text>
                      </View>
                    </View>
                    <View style={styles.kondisi}>
                      <View style={styles.icon}>
                      <Image source={require('./img/ground.png')} style={styles.image2} />
                      </View>
                      <View style={styles.cek}>
                      <Text style={styles.txtCek}>
                        Ground Level : {'\n'}
                        { this.state.forecast.grnd_level}
                      </Text>
                      </View>
                    </View>
                  </View>

                </View>

                </ImageBackground>
                </View>
                <Footer></Footer>
            </View>

        );
    }
}

const styles = StyleSheet.create({
containerMain: {
    backgroundColor: '#2979FF',
    flex: 1,
    flexDirection: 'column'
},
sider: {
    backgroundColor: 'green',
    flex: 5,
},
inputan: {
    backgroundColor: 'white',
    flex: 3,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    opacity:0.5,
    borderRadius:20
},
isian: {
    borderColor:'blue',
    borderWidth:1,
    width: "150%",
    padding: 10,
    margin: 15,
    backgroundColor:'white'
},
up:{
    position:'absolute',
    marginLeft:80,
    marginTop:-20,
    padding:40,
    alignItems:'center',
    flex:4,
},
logo:{
    width:"50%",
    height:"50%",
},
hasil:{
    //backgroundColor:'white',
    //opacity:0.5,
    flex:6,
    margin:10,
    
},
status:{
  flex:1,
  marginLeft:4,
  marginRight:4,
  flexDirection:'row',
},
kondisi:{
  flexDirection:'row',
  flex:1,
  margin:5,
  
},
icon:{
  marginRight:2,
  flex:1.5,
  flexDirection:'column',
  borderColor:'blue',
  borderWidth:0.5,
  borderTopLeftRadius:10,
  justifyContent:'space-between',
  alignItems:'center'
},
cek:{
  flexDirection:'column',
  flex:4,
  borderColor:'blue',
  borderWidth:0.5,
  justifyContent:'space-between',
  alignItems:'center',
  borderBottomRightRadius:10,
},

buttom:{
    width: 90,
    height: 25,
    backgroundColor: '#2979FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:-5
},

image:{
  width:50,
  height:50,
  tintColor:'white'
},
image2:{
  width:35,
  height:35,
  tintColor:'white',
  marginLeft:5,
  marginTop:7
},
txtCek:{
  fontWeight:'bold',
  fontSize:15,
  marginTop:8
},

});
