import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Article, Anchor } from "tamagui";
// import { A } from '@expo/html-elements';

const ClassInfo = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Class Info</Text>
            </View>
            <ScrollView>
                <View style={styles.contentContainer}>
                    <View style={styles.divContainer}>
                        <View style={styles.div}>
                            <Text style={styles.divHeader}>Class of 2023</Text>
                            <Text>Seniors</Text>
                            <Text >People To Know</Text>
                            <Text style={styles.listText}><Anchor style={styles.linkText} href='https://www.katyisd.org/Page/7938?ename=TammyLLaurence&dname=Tammy%20Laurence'>Tammy Laurence</Anchor> -- 12th Grade Assistant Principal</Text>
                            <Text style={styles.listText}><Anchor style={styles.linkText} href='https://www.katyisd.org/Page/7938?ename=ShannonEchavarry&dname=Shannon%20Echavarry'>Shannon Echavarry</Anchor> -- 12th Grade Secretary</Text>
                            <Text style={styles.sectionHeader}>Upcoming Activities</Text>
                            <Text style={styles.listText}>Sadie Hawkins Dance -- Cinco is bringing back the Sadie Hawkins Dance.  Save the date - 01/27/23  6:00-9:00 pm in the Gym.  The theme will be Dance thru the Decades.  Tickets will go on sale Monday, January 23rd at 7:00 am thru Pay N Go. The link to purchase will be posted soon!</Text>
                            <Text style={styles.listText}>Student Career Fair -- Katy ISD Career & Technical Education Department Presents a career fair on January 25th from 5pm -8pm @ Merrell Center. Click <Anchor style={styles.linkText} href='https://www.canva.com/design/DAFWpTTD4Os/IaJ-ca0ZrUgDt0sysEyeHA/view'>here</Anchor> for more details!</Text>
                            <Text style={styles.sectionHeader}>Helpful Links</Text>
                            <Anchor style={styles.linkText} href='https://studentaid.gov/h/apply-for-aid/fafsa'>FAFSA</Anchor>
                            <Anchor style={styles.linkText} href='https://loudermilkpanoramics.photoreflect.com/store/Photos.aspx?e=11209651'>Order Senior Photos</Anchor>
                        </View>
                        <View style={styles.div}>
                            <Text style={styles.divHeader}>Class of 2024</Text>
                            <Text>Juniors</Text>
                            <Text style={styles.sectionHeader}>People To Know</Text>
                            
                            <Text style={styles.listText}><Anchor style={styles.linkText} href='https://tx50010808.schoolwires.net/Page/7938?ename=JeremyWStahl&dname=Jeremy%20Stahl'>Jeremy Stahl</Anchor> -- 11th Grade Assistant Principal</Text>
                            <Text style={styles.listText}><Anchor style={styles.linkText} href='https://tx50010808.schoolwires.net/Page/7938?ename=KellyAMoore&dname=Kelly%20Moore'>Kelly Moore</Anchor> -- 11th Grade Secretary</Text>
                            <Text style={styles.sectionHeader}>Upcoming Activities</Text>
                            <Text style={styles.listText}>Junior Class Shirt Sale -- We have our Class of 2024 Junior shirts for sale in room 2228.  They are $10 (cash or check payable to CRHS).  We have all sizes but limited numbers.</Text>
                            <Text style={styles.listText}>SATs and ACTs -- The next SAT date is March 11th, 2023, and the next ACT date is February 11th, 2023!</Text>
                            <Text style={styles.sectionHeader}>Helpful Links</Text>
                            <Anchor style={styles.linkText} href='https://satsuite.collegeboard.org/sat'>Register for the SAT</Anchor>
                            <Anchor style={styles.linkText} href='https://www.act.org/content/act/en/register-for-the-act.html?cid=affiliate%3Aother%3Api09-pi10-btsm-2022-23-pre-event-k12-b2c%3Adc_1720-internal-organic-052622-mr023740-btsm-mailer'>Register for the ACT</Anchor>
                        </View>
                        <View style={styles.div}>
                            <Text style={styles.divHeader}>Class of 2025</Text>
                            <Text>Sophomores</Text>
                            <Text style={styles.sectionHeader}>People To Know</Text>
                            <Text style={styles.listText}><Anchor style={styles.linkText} href='https://tx50010808.schoolwires.net/Page/7938?ename=SamuelAAdedipe&dname=Sam%20Adedipe'>Sam Adedipe</Anchor> -- 10th Grade Assistant Principal</Text>
                            <Text style={styles.listText}><Anchor style={styles.linkText} href='https://www.katyisd.org/Page/7938?ename=LaurieJMcEntee&dname=Laurie%20McEntee'>Laurie McEntee</Anchor> -- 10th Grade Secretary</Text>
                            <Text style={styles.sectionHeader}>Upcoming Activities</Text>
                            <Text style={styles.listText}>Nothing Right Now!</Text>
                            <Text style={styles.sectionHeader}>Helpful Links</Text>
                            <Anchor style={styles.linkText} href='https://www.katyisd.org/domain/4197'>More info</Anchor>
                        </View>
                        <View style={styles.div}>
                            <Text style={styles.divHeader}>Class of 2026</Text>
                            <Text>Freshmen</Text>
                            <Text style={styles.sectionHeader}>People To Know</Text>
                            <Text style={styles.listText}><Anchor style={styles.linkText} href='https://www.katyisd.org/Page/7938?ename=DouglasSDudash&dname=Doug%20Dudash'>Doug Dudash</Anchor> -- 9th Grade Assistant Principal</Text>
                            <Text style={styles.listText}><Anchor style={styles.linkText} href='https://www.katyisd.org/Page/7938?ename=LaurelHBoatman&dname=Laurel%20Boatman'>Laurel Boatman</Anchor> -- 9th Grade Secretary</Text>
                            <Text style={styles.sectionHeader}>Upcoming Activities</Text>
                            <Text style={styles.listText}>Nothing Right Now!</Text>
                            <Text style={styles.sectionHeader}>Helpful Links</Text>
                            <Anchor style={styles.linkText} href='https://www.katyisd.org/domain/4198'>More info</Anchor>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
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
      contentContainer: {
        flex: 1,
        width: '100%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },
      divContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
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
      divHeader: {
        textShadowRadius: 1,
        textShadowColor: 'black',
        fontSize: 20,
        color: 'white',
      },
      sectionHeader: {
        fontSize: 15,
        fontStyle: 'italic',
        // fontWeight: 'semi-bold',
        // paddingBottom: 7,
        // paddingTop: 7,
      },
      listText: {
          padding: 5,
          color: 'white' //new
      },
      linkText: {
        textDecorationLine: 'underline',
      },
});

export default ClassInfo;