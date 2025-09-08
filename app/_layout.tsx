import '@/global.css';
import { PortalHost } from '@rn-primitives/portal';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
export {
  ErrorBoundary,
} from 'expo-router';

export default function RootLayout() {
  return (
    <SafeAreaView className='w-screen h-screen'>
      <StatusBar />
      <Stack screenOptions={{ headerShown: false }} />
      <PortalHost />
    </SafeAreaView>
  );
}

