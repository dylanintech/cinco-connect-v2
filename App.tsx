
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import { useState, useEffect } from 'react'
import { Session } from '@supabase/supabase-js'
import { supabase } from './lib/supabase'
import Auth from './components/Auth'
import Account from './components/Account'
import { StatusBar } from "expo-status-bar";
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import About from './about';
import ClassInfo from './classinfo';
import Terms from './terms'
import Gallery from './gallery';
import Absences from './absences';
import Schedule from './schedule';
import { TouchableOpacity } from 'react-native'
import { AlignLeft } from '@tamagui/lucide-icons'
import { StackNavigationProp } from '@react-navigation/stack';
import { Text } from '@tamagui/core'
import { useColorScheme } from "react-native";
import { Paragraph, Spacer, TamaguiProvider, Theme, YStack, Heading, XStack, Button, ScrollView } from "tamagui";
import { useFonts } from "expo-font";
import config from "./tamagui.config";

const Stack = createNativeStackNavigator();

export default function App() {
  
  // const navigation = useNavigation();
  // const [session, setSession] = useState<Session | null>(null)
  
  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setSession(session)
  //   })

  //   supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session)
  //   })
  // }, [])

	// const colorScheme = useColorScheme();
	// const [loaded] = useFonts({

	// 	Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),

	// 	InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),

	// });
	// if (!loaded) {

	// 	return null;

	// }
	return (
    <TamaguiProvider config={config}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false}} />
        <Stack.Screen name="gallery" component={Gallery} options={{ headerShown: false}} />
        <Stack.Screen name="absences" component={Absences} options={{ headerShown: false}} />
        <Stack.Screen name="classInfo" component={ClassInfo} options={{ headerShown: false}} />
        <Stack.Screen name="about" component={About} options={{ headerShown: false}} />
        <Stack.Screen name="terms" component={Terms} options={{ headerShown: false}} />
        <Stack.Screen name="schedule" component={Schedule} options={{ headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    </TamaguiProvider>

		// <TamaguiProvider config={config}>

		// 	<Theme name={colorScheme === "dark" ? "dark" : "light"}>

		// 		<YStack
		// 			f={1}
		// 			jc='center'
		// 			ai="center"
		// 			backgroundColor={"black"}
		// 		>

					
    //       {!session && <Heading size={'$9'} color={'whitesmoke'} >Welcome to Cinco Connect 🏫</Heading> }
          
    //       // if session and session.user are true render a Button component with it's icon prop set to AlignLeft. Make sure this button is aligned to the topmost right of the screen
    //       {session && session.user && <Button icon={AlignLeft} />}

					
    //       {session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />}

        
		// 			<StatusBar style="auto" />

		// 		</YStack>

    //     {session && session.user &&
    //     <XStack>
    //       <TouchableOpacity onPress={() => navigation.navigate('about')}>
    //           <Text>about</Text>
    //       </TouchableOpacity>
    //     <TouchableOpacity onPress={() => navigation.navigate('gallery')}>
    //       <Text>gallery</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={() => navigation.navigate('absences')}>
    //       <Text>absences</Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity onPress={() => navigation.navigate('classinfo')}>
    //       <Text>class info</Text>
    //     </TouchableOpacity>
    //     </XStack>
    //     }    

		// 	</Theme>

		// </TamaguiProvider>

	);
}

