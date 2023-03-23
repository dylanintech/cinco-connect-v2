import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";

const Terms = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Terms of Service</Text>
            </View>
            <ScrollView>
                <Text style={styles.bodyText}>
                Introduction
Welcome to Cinco Connect (the "App"). The App is provided to you by [Your Company Name] (the "Company"). These Terms of Service (the "Terms") govern your use of the App. By using the App, you accept these Terms and any additional terms that may apply to certain features of the App. If you do not agree to these Terms, you may not use the App.

Eligibility
You must be at least [13] years old to use the App. If you are under the age of [13], you may not use the App. By using the App, you represent and warrant that you are at least [13] years old.

Use of the App
You may use the App solely for your personal, non-commercial use. You may not use the App for any other purpose. The App is protected by copyright, trademark, and other laws of the United States and other countries. The Company retains all rights in the App not granted to you under these Terms.

User Content
You may submit content to the App, such as messages, photos, and videos (collectively, "User Content"). You retain ownership of any copyright and other proprietary rights that you may hold in the User Content that you submit to the App. By submitting User Content, you grant the Company a worldwide, non-exclusive, royalty-free, sublicensable, and transferable license to use, reproduce, distribute, prepare derivative works of, display, and perform the User Content in connection with the App and the Company's business.

User Conduct
You agree to use the App only for lawful purposes. You may not use the App to:

Submit User Content that is defamatory, obscene, pornographic, or otherwise offensive or illegal
Harass, threaten, or otherwise abuse other users of the App
Submit User Content that infringes the copyright, trademark, or other proprietary rights of any person or entity
The Company may terminate your use of the App if you violate these Terms.

Disclaimer of Warranties
The App is provided "as is," and the Company makes no representations or warranties of any kind, express or implied, as to the operation of the App, the information, content, materials, or products included on the App. The Company does not warrant that the App will be available at all times or that the App will be free from errors.

Limitation of Liability
The Company shall not be liable for any damages of any kind arising from the use of the App, including but not limited to direct, indirect, incidental, punitive, and consequential damages.

Indemnification
You agree to indemnify, defend, and hold harmless the Company, its officers, directors, employees, agents, licensors, and suppliers from and against any claims, actions or demands, liabilities, and settlements including without limitation, reasonable legal and accounting fees, resulting from, or alleged to result from, your use of the App in violation of these Terms.
                </Text>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
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
        //   fontWeight: 'semi-bold',
          fontSize: 25,
          color: 'white' //new
      },
});

export default Terms;