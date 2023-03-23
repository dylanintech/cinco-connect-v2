import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { supabase } from '../lib/supabase'
// import { Button, Input } from 'react-native-elements'
import { Input, Button } from 'tamagui'
import { LogIn, PlusSquare } from '@tamagui/lucide-icons'


export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  async function signUpWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  return (
    <View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          
          // leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email"
          autoCapitalize={'none'}
          size={'$4'}
          borderWidth={1}
          borderColor={'white'}
          backgroundColor={'grey'}
          width={250}
          cursorColor={'white'}
          color={'white'}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          // leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="super strong password"
          autoCapitalize={'none'}
          size={'$4'}
          borderWidth={1}
          borderColor={'white'}
          backgroundColor={'grey'}
          cursorColor={'white'}
          color={'white'}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button icon={<LogIn size="$2" />} disabled={loading} onPress={() => signInWithEmail()} >Sign in</Button>
      </View>
      <View style={styles.verticallySpaced}>
        <Button icon={<PlusSquare size="$2" />} disabled={loading} onPress={() => signUpWithEmail()} >Sign up</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
})