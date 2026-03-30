/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppContent, SplashScreen } from './src/components/index';
import { ThemeProvider, useTheme } from './src/theme/index';

const appConfig = require('./app.json') as {
  name?: string;
  displayName?: string;
};

const APP_NAME = appConfig.displayName ?? appConfig.name ?? 'Application';
const SPLASH_DURATION_MS = 2200;

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSplash(false);
    }, SPLASH_DURATION_MS);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <ThemedStatusBar />
        {showSplash ? <SplashScreen appName={APP_NAME} /> : <AppContent />}
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

function ThemedStatusBar() {
  const { theme } = useTheme();

  return (
    <StatusBar
      barStyle={theme.mode === 'dark' ? 'light-content' : 'dark-content'}
      backgroundColor={theme.colors.background}
    />
  );
}

export default App;
