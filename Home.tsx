// @ts-nocheck
import { useState, useEffect } from 'react'
import { Session } from '@supabase/supabase-js'
import { supabase } from './lib/supabase'
import Auth from './components/Auth'
import Account from './components/Account'
import { StatusBar } from "expo-status-bar";
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native'
import { AlignLeft } from '@tamagui/lucide-icons'
import { StackNavigationProp } from '@react-navigation/stack';
import { View } from 'react-native';

import { Stack, Text } from '@tamagui/core';


import { useColorScheme } from "react-native";

import { Paragraph, Spacer, TamaguiProvider, Theme, YStack, Heading, XStack, Button, ScrollView, Popover, PopoverProps, Adapt, YGroup } from "tamagui";

import { useFonts } from "expo-font";

import config from "./tamagui.config";

export default function App() {
    
    const navigation = useNavigation();
    const [session, setSession] = useState<Session | null>(null)

    function Nav({
      Icon,
      Name,
      ...props
    }: PopoverProps & { Icon?: any; Name?: string }) {
      return (
        <Popover size="$5" {...props}>
          <Popover.Trigger asChild>
            <Button icon={Icon} />
          </Popover.Trigger>
    
          <Adapt when="sm" platform="web">
            <Popover.Sheet modal dismissOnSnapToBottom>
              <Popover.Sheet.Frame padding="$4">
                <Adapt.Contents />
              </Popover.Sheet.Frame>
              <Popover.Sheet.Overlay />
            </Popover.Sheet>
          </Adapt>
    
          <Popover.Content
            bw={1}
            boc="$borderColor"
            enterStyle={{ x: 0, y: -10, o: 0 }}
            exitStyle={{ x: 0, y: -10, o: 0 }}
            x={0}
            y={0}
            o={1}
            animation={[
              'quick',
              {
                opacity: {
                  overshootClamping: true,
                },
              },
            ]}
            elevate
          >
            <Popover.Arrow bw={1} boc="$borderColor" />
    
            <YGroup space="$3">
              <YGroup.Item>
                {/* <XStack space="$3">
                  <Label size="$3" htmlFor={Name}>
                    Name
                  </Label>
                  <Input size="$3" id={Name} />
                </XStack> */}
              </YGroup.Item>
              <YGroup.Item>
                <Popover.Close asChild>
                  <YStack>
                  <TouchableOpacity onPress={() => navigation.navigate('about')}>
                        <Text  color={'black'} fontWeight={'bold'}>about 🤔</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('gallery')}>
                      <Text  color={'black'} fontWeight={'bold'}>notes 📝</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('absences')}>
                      <Text  color={'black'} fontWeight={'bold'}>absences❗</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('classInfo')}>
                      <Text  color={'black'} fontWeight={'bold'} >class info 🍎</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('schedule')}>
                      <Text  color={'black'} fontWeight={'bold'} >calendar 📅</Text>
                    </TouchableOpacity>
                  </YStack>
                </Popover.Close>
              </YGroup.Item>
            </YGroup>
          </Popover.Content>
        </Popover>
      )
    }
  
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])


	const colorScheme = useColorScheme();
	const [loaded] = useFonts({

		Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),

		InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),

	});
	if (!loaded) {

		return null;

	}
	return (

		

			<Theme name={colorScheme === "dark" ? "dark" : "light"}>

				<YStack
					f={1}
					jc='center'
					ai="center"
					backgroundColor={"black"}
                    >
                    {/* {session && session.user && <Button icon={AlignLeft} />} */}
        {session && session.user && 
        <XStack jc='flex-end' ai='flex-start' height={120} width={330}>
            <Nav placement="left" Icon={AlignLeft} Name="left-popover" />
        </XStack>
        }            

        {/* {session && session.user &&
            <YStack gap={10}>
            <XStack gap={40}>
                <TouchableOpacity onPress={() => navigation.navigate('about')}>
                    <Heading textDecorationLine='underline' color={'white'} fontWeight={'bold'}>about 🤔</Heading>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('gallery')}>
                  <Heading textDecorationLine='underline' color={'white'} fontWeight={'bold'}>notes 📝</Heading>
                </TouchableOpacity>
            </XStack>
            <XStack>
                <TouchableOpacity onPress={() => navigation.navigate('absences')}>
                  <Heading textDecorationLine='underline' color={'white'} fontWeight={'bold'}>absences❗</Heading>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('classInfo')}>
                  <Heading textDecorationLine='underline' color={'white'} fontWeight={'bold'} >class info 🍎</Heading>
                </TouchableOpacity>
            </XStack>
            </YStack>
        }     */}
					
          {!session && <Heading size={'$9'} color={'whitesmoke'} >Welcome to Cinco Connect 🏫</Heading> }
          

          {session && session.user && <Heading color={'whitesmoke'}>home 🏠</Heading>}
          

					
          {session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />}

        
					<StatusBar style="auto" />

				</YStack>


			</Theme>

		

	);

}