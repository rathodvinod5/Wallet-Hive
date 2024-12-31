import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'textSM' 
    | 'textSMSemibold' | 'textMD' | 'textMDSemibold' | 'textLG' | 'textLGSemibold' 
    | 'textEL' | 'textELSemibold';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'textSM' ? styles.textSM : undefined,
        type === 'textSMSemibold' ? styles.textSMSemibold : undefined,
        type === 'textMD' ? styles.textMD : undefined,
        type === 'textMDSemibold' ? styles.textMDSemibold : undefined,
        type === 'textLG' ? styles.textLG : undefined,
        type === 'textLGSemibold' ? styles.textLGSemibold : undefined,
        type === 'textEL' ? styles.textEL : undefined,
        type === 'textELSemibold' ? styles.textELSemibold : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  textSM: {
    fontSize: 18,
    lineHeight: 24,
  },
  textSMSemibold: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '600',
  },
  textMD: {
    fontSize: 20,
    lineHeight: 24,
  },
  textMDSemibold: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '600',
  },
  textLG: {
    fontSize: 22,
    lineHeight: 26,
  },
  textLGSemibold: {
    fontSize: 22,
    lineHeight: 26,
    fontWeight: '600',
  },
  textEL: {
    fontSize: 24,
    lineHeight: 28,
  },
  textELSemibold: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
