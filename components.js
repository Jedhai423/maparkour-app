import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableHighlight } from 'react-native';



export class Card extends Component {
  render() {
    return (
      <View style={{height: 700}}> /* Define a altura máxima do Card */
          <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={{flex: 0.03}}/> /* "margem" esquerda do Card */
              <View style={{flex: 1}}>
                  <View style={{flex: 0.4}}/> /* "margem" superior do Card */
                  <Image source={{uri: this.props.pic}} style={{flex: 5}}/> /* foto do pico */
                  <View style={{flex: 2, backgroundColor: 'white'}} > /* espaco pro nome e descrição */
                      <Text style={{flex: 1, fontWeight: 'bold',fontSize: 30,}}> {this.props.nome}</Text> /* nome do pico */
                      <Text style={{flex: 1, fontSize: 20}}> {this.props.descricao}</Text> /* descrição do pico */
                      <TouchableHighlight style={{flex: 1}} onPress={() => {Alert.alert('You tapped the button!'); }} underlayColor="white">
                          <View style={styles.button}>
                            <Text style={styles.buttonText}>Mais informações</Text>
                          </View>
                      </TouchableHighlight> /* termina o botao */
                  </View>
                  <View style={{flex: 0.2}}/>/* "margem" inferior do Card */
              </View>
              <View style={{flex: 0.03}}/>/* "margem" direita do Card */
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 0,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontSize: 25
  }
});


        <Button style={{flex: 1}} onPress={() => {Alert.alert('You tapped the button!'); }}  title="Press Me"/>
