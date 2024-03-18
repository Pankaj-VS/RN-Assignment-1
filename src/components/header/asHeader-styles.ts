import { ImageStyle, StatusBar, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { Spacing } from '../../theme/spacing'
import { Typography } from '../../theme/typography'

interface IStyles {
  container: ViewStyle
  imageContainer: ImageStyle
  title: TextStyle
}

export const styles = StyleSheet.create<IStyles>({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: Spacing.space_16,
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.space_24,
    paddingVertical: Spacing.space_16,
    paddingTop: StatusBar.currentHeight,
  },
  imageContainer: {
    height: Spacing.space_24,
    width: Spacing.space_24,
  },
  title: {
    fontFamily: Typography.secondary.bold,
    fontSize: Spacing.space_18,
  },
})
