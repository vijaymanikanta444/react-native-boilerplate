import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme, useThemedStyles } from '../theme/index';
import { Theme } from '../theme/theme';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

export function AppContent() {
  const { theme } = useTheme();
  const styles = useThemedStyles(createStyles);
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <ThemedView style={styles.container}>
      <ThemedView
        style={[
          styles.content,
          {
            paddingTop: safeAreaInsets.top + theme.spacing.lg,
            paddingBottom: safeAreaInsets.bottom + theme.spacing.lg,
          },
        ]}
      >
        <ThemedView style={styles.header}>
          <ThemedText variant="title">VIET Native App</ThemedText>
          <ThemedText variant="body" color="textMuted">
            Active theme: {theme.mode}
          </ThemedText>
        </ThemedView>

        <ThemedView backgroundColor="surface" style={styles.card}>
          <ThemedText variant="body">Background</ThemedText>
          <ThemedText variant="caption" color="textMuted">
            This layout uses shared tokens for spacing, borders, and text
            colors.
          </ThemedText>
        </ThemedView>

        <ThemedView backgroundColor="surfaceAlt" style={styles.card}>
          <ThemedText variant="body">Theme consistency</ThemedText>
          <ThemedText variant="caption" color="textMuted">
            Build all new screens with ThemedView, ThemedText, and useTheme.
          </ThemedText>
        </ThemedView>

        <ThemedView
          style={[
            styles.primaryChip,
            {
              backgroundColor: theme.colors.primary,
            },
          ]}
        >
          <ThemedText variant="body" color="primaryText">
            Primary color token
          </ThemedText>
        </ThemedView>
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
  header: {
    gap: theme.spacing.xs,
  },
  card: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    gap: theme.spacing.xs,
  },
  primaryChip: {
    alignSelf: 'flex-start' as const,
    borderRadius: theme.radius.sm,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },
});
