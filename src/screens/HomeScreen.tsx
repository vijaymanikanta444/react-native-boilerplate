import { ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme, useThemedStyles } from '../theme';
import { Theme } from '../theme/theme';
import { ThemedCard, ThemedText, ThemedView } from '../components';

export function HomeScreen() {
  const { theme } = useTheme();
  const styles = useThemedStyles(createStyles);
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={styles.container}
      contentInsetAdjustmentBehavior="never"
      automaticallyAdjustContentInsets={false}
      contentContainerStyle={[
        styles.content,
        { paddingBottom: insets.bottom + theme.spacing.lg },
      ]}
    >
      <ThemedView style={styles.header}>
        <ThemedText variant="title">Project Home</ThemedText>
        <ThemedText variant="body" color="textMuted">
          Keep this screen as your in-app quick guide.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.sectionList}>
        <ThemedCard variant="outlined">
          <ThemedText variant="body" style={styles.sectionTitle}>
            What Is Included
          </ThemedText>
          <ThemedText variant="body">
            - Theming system (light and dark)
          </ThemedText>
          <ThemedText variant="body">- Reusable UI components</ThemedText>
          <ThemedText variant="body">
            - Navigation setup (stack routing)
          </ThemedText>
          <ThemedText variant="body">
            - Axios setup with interceptors
          </ThemedText>
          <ThemedText variant="body">
            - Example screens and typed routes
          </ThemedText>
        </ThemedCard>

        <ThemedCard variant="default">
          <ThemedText variant="body" style={styles.sectionTitle}>
            Where To Change And See Reflection
          </ThemedText>
          <ThemedText variant="body">
            - src/screens/HomeScreen.tsx (this page)
          </ThemedText>
          <ThemedText variant="body">
            - src/navigation/AppRouter.tsx (routes and headers)
          </ThemedText>
          <ThemedText variant="body">
            - src/theme/theme.ts (colors, spacing, typography)
          </ThemedText>
          <ThemedText variant="body">
            - src/components/ (reusable UI components)
          </ThemedText>
          <ThemedText variant="body">
            - src/api/axiosInstance.ts (base URL, headers, interceptors)
          </ThemedText>
        </ThemedCard>

        <ThemedCard variant="default">
          <ThemedText variant="body" style={styles.sectionTitle}>
            Components Already Built
          </ThemedText>
          <ThemedText variant="body">- ThemedButton</ThemedText>
          <ThemedText variant="body">- ThemedInput</ThemedText>
          <ThemedText variant="body">- ThemedCard</ThemedText>
          <ThemedText variant="body">- ThemedLoader</ThemedText>
          <ThemedText variant="body">- ThemedText</ThemedText>
          <ThemedText variant="body">- ThemedView</ThemedText>
        </ThemedCard>

        <ThemedCard variant="default">
          <ThemedText variant="body" style={styles.sectionTitle}>
            Icon Generation (Android and iOS)
          </ThemedText>
          <ThemedText variant="body">
            1. Put source icon at src/assets/icon.png
          </ThemedText>
          <ThemedText variant="body">
            2. Run: npx rn-app-icons src/assets/icon.png
          </ThemedText>
          <ThemedText variant="body">
            3. Rebuild app: npm run android / npm run ios
          </ThemedText>
        </ThemedCard>

        <ThemedCard variant="elevated">
          <ThemedText variant="body" style={styles.sectionTitle}>
            Notes
          </ThemedText>
          <ThemedText variant="body">
            Navigation setup is ready using React Navigation native stack.
          </ThemedText>
          <ThemedText variant="body">
            Axios setup is ready with centralized request and response
            interceptors.
          </ThemedText>
        </ThemedCard>
      </ThemedView>
    </ScrollView>
  );
}

const createStyles = (theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.md,
  },
  header: {
    marginBottom: theme.spacing.lg,
    gap: theme.spacing.xs,
  },
  sectionList: {
    gap: theme.spacing.md,
  },
  sectionTitle: {
    fontWeight: '700' as const,
    marginBottom: theme.spacing.sm,
  },
});
