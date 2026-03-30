import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from '../theme';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailsScreen, RootStackParamList } from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppRouter() {
  const { theme } = useTheme();
  const baseTheme =
    theme.mode === 'dark' ? NavigationDarkTheme : NavigationDefaultTheme;

  return (
    <NavigationContainer
      theme={{
        ...baseTheme,
        dark: theme.mode === 'dark',
        colors: {
          ...baseTheme.colors,
          primary: theme.colors.primary,
          background: theme.colors.background,
          card: theme.colors.surface,
          text: theme.colors.textPrimary,
          border: theme.colors.border,
          notification: theme.colors.danger,
        },
      }}
    >
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.surface,
          },
          headerTintColor: theme.colors.textPrimary,
          headerTitleStyle: {
            fontWeight: '600',
            fontSize: 18,
          },
          headerShadowVisible: false,
          contentStyle: {
            backgroundColor: theme.colors.background,
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({ route }) => ({
            title: route.params.title,
            headerShown: true,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
