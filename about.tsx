import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Article, Anchor } from "tamagui";
import { useNavigation } from '@react-navigation/native';

const About = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>What is Cinco Connect?!</Text>
            </View>
            <ScrollView>
                <Text style={styles.bodyText}>We know how hard it can be to find relevant info on school websites, so we made Cinco Connect (CC). CC is a minimalist, elegant app that's meant to allow you to stay up-to-date with everything Cinco with ease. We want you to be connected emotionally as well, which is what inspired the gallery! Crafted with love by <Anchor style={styles.linkText} href='https://twitter.com/dxlantxch'>Dylan</Anchor>.</Text>
                {/* <TouchableOpacity onPress={() => navigation.navigate("terms")}>
                  <Text style={styles.termText} >See our terms of use here.</Text>
                </TouchableOpacity> */}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black', //new
    },
    headerContainer: {
      width: '100%',
      padding: 20,
      // backgroundColor: 'white',
      alignItems: 'flex-start',
      justifyContent: 'center',
      // borderBottomWidth: 1,
      // borderBottomColor: 'gray',
      marginTop: 40,
    },
    headerText: {
      fontSize: 25,
      fontWeight: 'bold',
      color: 'white' //new
    },
    bodyText: {
        padding: 10,
        fontSize: 25,
        color: 'white' //new
    },
    linkText: {
        textDecorationLine: 'underline',
        color: 'white',
        fontSize: 25,
    },
    termText: {
        padding: 10,
        textDecorationLine: 'underline',
    },
});

export default About;