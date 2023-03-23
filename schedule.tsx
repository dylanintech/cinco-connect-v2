import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import { Heading, XStack } from "tamagui";

const Schedule = () => {
    return (
        <ScrollView style={styles.scrollContainer}>
        <View style={styles.contentContainer}>
          <XStack width={330} jc={'flex-start'} ai={'flex-start'}>
              <Heading color={'white'} marginBottom={4}>calendar 📅</Heading>  
          </XStack>
          <View style={styles.divContainer}>
            <View style={styles.div}>
              <Text style={styles.divHeader}>Upcoming Events</Text>
              <View>
                <Text style={styles.listText}>No upcoming events</Text>
              </View>
            </View>
            <View style={styles.divSecond}>
              <Text style={styles.divHeader}>Calendar</Text>
              <View>
                <Text style={styles.monthHeader}>March</Text>
                <Text style={styles.listText}>No Remaining Events!</Text>
                <Text style={styles.monthHeader}>April</Text>
                <Text style={styles.listText}>April 6-10 -- Family Weekend (No Homework)</Text>
                <Text style={styles.listText}>April 12 -- Junior Parent Night</Text>
                <Text style={styles.listText}>April 18 -- English I STAAR test</Text>
                <Text style={styles.listText}>April 20 -- English II STAAR test</Text>
                <Text style={styles.listText}>April 22 -- Prom</Text>
                <Text style={styles.listText}>April 25 -- US History STAAR test</Text>
                <Text style={styles.listText}>April 26 -- PTSA Incoming 8th Grade Coffee</Text>
                <Text style={styles.listText}>April 27 -- Biology STAAR test</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: 'black',
    },
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
    },
    headerContainer: {
      width: '100%',
      padding: 20,
      backgroundColor: 'black',
      alignItems: 'flex-start',
      justifyContent: 'center',
      // borderBottomWidth: 1,
      // borderBottomColor: 'gray',
      marginTop: 40,
    },
    headerText: {
      fontSize: 25,
      color: 'white',
    },
    contentContainer: {
      flex: 1,
      width: '100%',
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
      color: 'white',
      marginTop: 50,
    },
    divContainer: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
    },
    div: {
      width: '100%',
      padding: 20,
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginBottom: 10,
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 10,
    },
    divSecond: {
      width: '100%',
      padding: 20,
      alignItems: 'flex-start',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 10,
    },
    divHeader: {
      fontSize: 20,
      color: 'white',
    },
    listText: {
      color:'white',
      paddingBottom: 5,
      paddingTop: 5,
    },
    monthHeader: {
      fontSize: 15,
      paddingBottom: 7,
      paddingTop: 7,
      color: 'white',
    },
    footerContainer: {
      flex: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 40,
    },
    footerText: {
      padding: 10,
    }
});

export default Schedule;