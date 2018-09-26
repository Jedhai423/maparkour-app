import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {Card} from "./components.js"




let picos = [{pic: "http://animais.culturamix.com/blog/wp-content/uploads/2009/08/Bicho-Pregui%C3%A7a-Sorrindo.jpg", nome: "Preguiça1", descricao: "Muito fofa essa lerdinha1"},{pic: "http://animais.culturamix.com/blog/wp-content/uploads/2009/08/Bicho-Pregui%C3%A7a-Sorrindo.jpg", nome: "Preguiça2", descricao: "Muito fofa essa lerdinha2"},{pic: "http://animais.culturamix.com/blog/wp-content/uploads/2009/08/Bicho-Pregui%C3%A7a-Sorrindo.jpg", nome: "Preguiça3", descricao: "Muito fofa essa lerdinha3"}]

export default class App extends React.Component {
  render() {
    return (

              <View style={{flex: 1, backgroundColor:"#e6e6e1"}}>
              <ScrollView>
              {picos.map((pico, key) => {
                       return (
                         <Card key={key} pic={pico.pic}  nome= {pico.nome} descricao={pico.descricao}/>

                       );
                    })}    
              </ScrollView>
              </View>

      
    );
  }
}





      
      
      
  /*    <Card pic= "http://animais.culturamix.com/blog/wp-content/uploads/2009/08/Bicho-Pregui%C3%A7a-Sorrindo.jpg" nome= "Preguiça" descricao= "Muito fofa essa lerdinha"/>,
      <Card pic= "http://animais.culturamix.com/blog/wp-content/uploads/2009/08/Bicho-Pregui%C3%A7a-Sorrindo.jpg" nome= "Preguiça" descricao= "Muito fofa essa lerdinha"/>,
      <Card pic= "http://animais.culturamix.com/blog/wp-content/uploads/2009/08/Bicho-Pregui%C3%A7a-Sorrindo.jpg" nome= "Preguiça" descricao= "Muito fofa essa lerdinha"/>
      */