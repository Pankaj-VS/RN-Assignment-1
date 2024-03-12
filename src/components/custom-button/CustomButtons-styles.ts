import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {SPACING} from '../../theme/spacing';
import {COLORS} from '../../theme/colors';
import {FONT_FAMILY} from '../../theme/typography';

interface Styles {
  container: ViewStyle;
  button: TextStyle;
  text: TextStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    gap: SPACING.space_12,
    marginTop: SPACING.space_86,
    paddingHorizontal: SPACING.space_16,
    paddingVertical: SPACING.space_12,
  },
  button: {
    alignItems: 'center',
    backgroundColor: COLORS.neutralWhite,
    borderRadius: SPACING.space_8,
    color: COLORS.Tundora,
    elevation: SPACING.space_8,
    justifyContent: 'center',
    paddingHorizontal: SPACING.space_32,
    paddingVertical: SPACING.space_11,
  },
  text: {
    color: COLORS.neutral700,
    fontFamily: FONT_FAMILY.quickSandMedium,
    fontSize: SPACING.space_12,
  },
});