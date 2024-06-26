/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import { ThemeProvider } from '@shopify/restyle';
import theme ,{Text}from './src/utils/theme';
import { AppState, View } from 'react-native';
import Navigation from './src/navigation';
import WelcomeScreen from './src/screens/welcome-screen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useUserGlobalStore from './src/store/useUserGlobalStore';
import { useEffect } from 'react';
import { SWRConfig } from 'swr';



function App(): React.JSX.Element {
 

  return (
    <ThemeProvider theme={theme}>
  <SafeAreaProvider>
  <SWRConfig
 value={{
  provider: () => new Map(),
  isVisible: () => { return true },
  initFocus(callback) {
    let appState = AppState.currentState

    const onAppStateChange = (nextAppState:any) => {
      /* If it's resuming from background or inactive mode to active one */
      if (appState.match(/inactive|background/) && nextAppState === 'active') {
        callback()
      }
      appState = nextAppState
    }

    // Subscribe to the app state change events
    const subscription = AppState.addEventListener('change', onAppStateChange)

    return () => {
      subscription.remove()
    }
  }
}}
>
  <Navigation />
</SWRConfig>
  </SafeAreaProvider>
    </ThemeProvider>
  );
}


export default App;
