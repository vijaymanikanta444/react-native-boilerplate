import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppRouter } from './src/navigation';
import { ThemeProvider } from './src/theme/index';

function App() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <AppRouter />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
