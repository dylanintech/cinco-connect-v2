import AsyncStorage from '@react-native-async-storage/async-storage'
import 'react-native-url-polyfill/auto'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ktmgqhvolpskwpusskpe.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0bWdxaHZvbHBza3dwdXNza3BlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkzNTM0NzAsImV4cCI6MTk5NDkyOTQ3MH0.fA-jW8QuZ0sKcVdM3HLH3mZcJnIrO2Vys63uwsbUF6A'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})