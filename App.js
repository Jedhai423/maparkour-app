import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import {Card} from "./components.js";
import * as firebase from "firebase";
const config = {
    apiKey: "AIzaSyAwD2LHuKtSKT1SxYb7-C2md_m66AwtcPU",
    authDomain: "project-pkspots.firebaseapp.com",
    databaseURL: "https://project-pkspots.firebaseio.com",
    projectId: "project-pkspots",
    storageBucket: "project-pkspots.appspot.com",
    messagingSenderId: "1011034164399"
    };
  firebase.initializeApp(config);







var loca = [];
  var query = firebase.database().ref("locs/DF/brasilia").orderByKey();

  




export default class App extends Component {

  

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      locations: []
    }
  }

  componentDidMount() {
    query.once('value').then(snapshot => {
      snapshot.forEach(childSnapshot => {
        console.log(childSnapshot.val());
        loca.push(childSnapshot.val());
        this.setState({
          loading: false,
          locations: loca
        });
      });
      console.log(this.state.locations);
        
      }).catch((error) => {
        console.log(error);
      })
  }
    

    render() {

      const { locations, loading } = this.state;
      if (loading) {
        return (
          <View style={{flex: 1, justifyContent: 'space-between', justifyContent: 'center'}}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )
      }
      return (
        <View style={{flex: 1, backgroundColor:"#e6e6e1"}}>
        <ScrollView>
          {this.state.locations.map((pico, key) => 
            <Card key={key} pic={pico.img[0]}  nome= {pico.nome_do_pico} descricao={pico.how}/>
          )}    
        </ScrollView>
        </View>
      );
      
          
    
    }

}
