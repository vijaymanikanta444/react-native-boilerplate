import { useState } from 'react';
import { ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme, useThemedStyles } from '../theme/index';
import { Theme } from '../theme/theme';
import {
  ThemedText,
  ThemedView,
  ThemedButton,
  ThemedInput,
  ThemedCard,
  ThemedLoader,
} from './index';

export function ComponentShowcase() {
  const { theme } = useTheme();
  const styles = useThemedStyles(createStyles);
  const insets = useSafeAreaInsets();
  const [inputValue, setInputValue] = useState('');
  const [showLoader, setShowLoader] = useState(false);

  return (
    <ScrollView
      style={styles.container}
      contentInsetAdjustmentBehavior="never"
      automaticallyAdjustContentInsets={false}
      contentContainerStyle={[
        styles.content,
        {
          paddingTop: 0,
          paddingBottom: insets.bottom + theme.spacing.lg,
        },
      ]}
    >
      {/* Header */}
      <ThemedView style={styles.header}>
        <ThemedText variant="title">Component Library</ThemedText>
        <ThemedText variant="body" color="textMuted">
          VIET Native App • Theme: {theme.mode}
        </ThemedText>
      </ThemedView>

      {/* Text Variants */}
      <Section title="Text Variants">
        <ThemedText variant="title">Title Text</ThemedText>
        <ThemedText variant="body">Body Text</ThemedText>
        <ThemedText variant="caption">Caption Text</ThemedText>
        <ThemedText variant="body" color="textMuted">
          Muted Text Color
        </ThemedText>
        <ThemedText variant="body" color="primary">
          Primary Color Text
        </ThemedText>
      </Section>

      {/* Button Variants */}
      <Section title="Button Variants">
        <ThemedButton
          label="Primary Button"
          onPress={() => console.log('Primary pressed')}
          variant="primary"
          size="md"
        />
        <ThemedButton
          label="Secondary Button"
          onPress={() => console.log('Secondary pressed')}
          variant="secondary"
          size="md"
        />
        <ThemedButton
          label="Danger Button"
          onPress={() => console.log('Danger pressed')}
          variant="danger"
          size="md"
        />
        <ThemedButton
          label="Ghost Button"
          onPress={() => console.log('Ghost pressed')}
          variant="ghost"
          size="md"
        />
      </Section>

      {/* Button Sizes */}
      <Section title="Button Sizes">
        <ThemedButton
          label="Small"
          onPress={() => console.log('Small')}
          variant="primary"
          size="sm"
        />
        <ThemedButton
          label="Medium"
          onPress={() => console.log('Medium')}
          variant="primary"
          size="md"
        />
        <ThemedButton
          label="Large"
          onPress={() => console.log('Large')}
          variant="primary"
          size="lg"
        />
      </Section>

      {/* Button with Loading */}
      <Section title="Button States">
        <ThemedButton
          label="Load Data"
          onPress={() => setShowLoader(!showLoader)}
          variant="primary"
          loading={showLoader}
        />
        <ThemedButton
          label="Disabled Button"
          onPress={() => {}}
          variant="primary"
          disabled={true}
        />
      </Section>

      {/* Input Variants */}
      <Section title="Input Fields">
        <ThemedInput
          placeholder="Enter text here..."
          value={inputValue}
          onChangeText={setInputValue}
        />
        <ThemedInput placeholder="Email input" keyboardType="email-address" />
        <ThemedInput placeholder="Password input" secureTextEntry={true} />
        <ThemedInput
          placeholder="Error input"
          error={true}
          errorMessage="This field is required"
        />
      </Section>

      {/* Card Variants */}
      <Section title="Card Variants">
        <ThemedCard variant="default">
          <ThemedText variant="body" style={{ fontWeight: '600' }}>
            Default Card
          </ThemedText>
          <ThemedText variant="caption" color="textMuted">
            This is a default card with border
          </ThemedText>
        </ThemedCard>

        <ThemedCard variant="outlined">
          <ThemedText variant="body" style={{ fontWeight: '600' }}>
            Outlined Card
          </ThemedText>
          <ThemedText variant="caption" color="textMuted">
            This card has a primary colored border
          </ThemedText>
        </ThemedCard>

        <ThemedCard variant="elevated">
          <ThemedText variant="body" style={{ fontWeight: '600' }}>
            Elevated Card
          </ThemedText>
          <ThemedText variant="caption" color="textMuted">
            This card has a shadow effect
          </ThemedText>
        </ThemedCard>
      </Section>

      {/* Loader States */}
      <Section title="Loader">
        <ThemedView style={styles.loaderContainer}>
          {showLoader && (
            <ThemedLoader
              visible={showLoader}
              size="large"
              message="Loading data..."
            />
          )}
          {!showLoader && (
            <ThemedCard>
              <ThemedText variant="body" style={styles.centerText}>
                Click "Load Data" button above to show loader
              </ThemedText>
            </ThemedCard>
          )}
        </ThemedView>
      </Section>

      {/* Color Palette */}
      <Section title="Color Palette">
        <ThemedView style={styles.colorGrid}>
          <ColorBox name="Primary" color={theme.colors.primary} />
          <ColorBox
            name="Background"
            color={theme.colors.background}
            textColor={theme.colors.textPrimary}
          />
          <ColorBox
            name="Surface"
            color={theme.colors.surface}
            textColor={theme.colors.textPrimary}
          />
          <ColorBox name="Success" color={theme.colors.success} />
          <ColorBox name="Danger" color={theme.colors.danger} />
        </ThemedView>
      </Section>

      {/* Spacing Reference */}
      <Section title="Spacing Reference">
        <ThemedText variant="caption" color="textMuted">
          xs: {theme.spacing.xs}px | sm: {theme.spacing.sm}px | md:{' '}
          {theme.spacing.md}px | lg: {theme.spacing.lg}px | xl:{' '}
          {theme.spacing.xl}px
        </ThemedText>
      </Section>

      {/* Border Radius Reference */}
      <Section title="Border Radius Reference">
        <ThemedText variant="caption" color="textMuted">
          sm: {theme.radius.sm}px | md: {theme.radius.md}px | lg:{' '}
          {theme.radius.lg}px
        </ThemedText>
      </Section>
    </ScrollView>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  const styles = useThemedStyles(createStyles);

  return (
    <ThemedView style={styles.section}>
      <ThemedText variant="body" style={{ fontWeight: '600' }}>
        {title}
      </ThemedText>
      <ThemedView style={[styles.sectionContent, { gap: theme.spacing.md }]}>
        {children}
      </ThemedView>
    </ThemedView>
  );
}

function ColorBox({
  name,
  color,
  textColor = '#FFFFFF',
}: {
  name: string;
  color: string;
  textColor?: string;
}) {
  const styles = useThemedStyles(createStyles);

  return (
    <ThemedView
      style={[
        styles.colorBox,
        {
          backgroundColor: color,
        },
      ]}
    >
      <ThemedText
        variant="caption"
        style={{ color: textColor, fontWeight: '600' }}
      >
        {name}
      </ThemedText>
      <ThemedText variant="caption" style={{ color: textColor }}>
        {color}
      </ThemedText>
    </ThemedView>
  );
}

const createStyles = (theme: Theme) => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    paddingHorizontal: theme.spacing.lg,
    gap: theme.spacing.lg,
  },
  header: {
    gap: theme.spacing.xs,
    marginBottom: theme.spacing.md,
  },
  section: {
    gap: theme.spacing.md,
  },
  sectionContent: {
    gap: theme.spacing.md,
  },
  loaderContainer: {
    height: 200,
    justifyContent: 'center' as const,
    alignItems: 'center' as const,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  centerText: {
    textAlign: 'center' as const,
  },
  colorGrid: {
    flexDirection: 'row' as const,
    flexWrap: 'wrap' as const,
    gap: theme.spacing.md,
  },
  colorBox: {
    flex: 1,
    minWidth: 120,
    padding: theme.spacing.md,
    borderRadius: theme.radius.md,
    alignItems: 'center' as const,
    gap: theme.spacing.xs,
  },
});
