import { Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme, useThemedStyles } from '../theme';
import { Theme } from '../theme/theme';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';

const splashIcon = require('../assets/icon-transparent.png');

type SplashScreenProps = {
  appName: string;
};

export function SplashScreen({ appName }: SplashScreenProps) {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = useThemedStyles(createStyles);

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.centerContent}>
        <Image source={splashIcon} style={styles.icon} resizeMode="contain" />
        <ThemedText variant="title" style={styles.appName}>
          {appName}
        </ThemedText>
      </ThemedView>

      <ThemedView
        style={[
          styles.footer,
          { paddingBottom: insets.bottom + theme.spacing.md },
        ]}
      >
        <ThemedText variant="caption" color="textMuted">
          Powered by{' '}
          <ThemedText color="primary" style={styles.brandText}>
            VIET
          </ThemedText>
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const createStyles = (theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: 'space-between' as const,
    alignItems: 'center' as const,
    paddingTop: theme.spacing.xl,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    gap: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
  },
  icon: {
    width: 140,
    height: 140,
  },
  appName: {
    textAlign: 'center' as const,
  },
  footer: {
    width: '100%' as const,
    alignItems: 'center' as const,
  },
  brandText: {
    fontSize: 11,
    lineHeight: 14,
    fontFamily: 'Courier',
    fontWeight: '700' as const,
  },
});
