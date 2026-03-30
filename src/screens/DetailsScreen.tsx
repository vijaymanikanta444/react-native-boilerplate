import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme, useThemedStyles } from '../theme';
import { Theme } from '../theme/theme';
import {
  ThemedView,
  ThemedText,
  ThemedButton,
  ThemedCard,
} from '../components';

export type RootStackParamList = {
  Home: undefined;
  Details: { title: string; description: string };
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Home'
>;

type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Details'
>;

interface DetailScreenProps {
  navigation: DetailsScreenNavigationProp;
  route: {
    params: { title: string; description: string };
  };
}

export function DetailsScreen({ navigation, route }: DetailScreenProps) {
  const { theme } = useTheme();
  const styles = useThemedStyles(createStyles);
  const insets = useSafeAreaInsets();

  return (
    <ThemedView
      style={[
        styles.container,
        {
          paddingTop: 0,
          paddingBottom: insets.bottom + theme.spacing.lg,
        },
      ]}
    >
      <ThemedView style={styles.content}>
        <ThemedText variant="title">{route.params.title}</ThemedText>

        <ThemedCard>
          <ThemedText variant="body" style={styles.cardTitle}>
            Dummy Page
          </ThemedText>
          <ThemedText variant="body" color="textMuted">
            {route.params.description}
          </ThemedText>
        </ThemedCard>

        <ThemedButton
          label="Go Back"
          onPress={() => navigation.goBack()}
          variant="primary"
        />
      </ThemedView>
    </ThemedView>
  );
}

const createStyles = (theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
    gap: theme.spacing.md,
  },
  cardTitle: {
    fontWeight: '700' as const,
    marginBottom: theme.spacing.sm,
  },
});
