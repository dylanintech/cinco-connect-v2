import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import { A } from '@expo/html-elements';
import { Article, Anchor } from "tamagui";

const Absences = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Report Absences</Text>
            </View>
            <ScrollView>
              <Text style={styles.bodyText}>You can report absences <Anchor style={styles.linkText}href='https://tx50010808.schoolwires.net/domain/5809'>here</Anchor></Text>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black', //new color
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerContainer: {
        width: '100%',
        padding: 20,
        backgroundColor: 'black',
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: 40,
      },
      headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white' //new
      },
      bodyText: {
        color: 'white',
      },
      linkText: {
        textDecorationLine: 'underline',
    },
});

export default Absences;