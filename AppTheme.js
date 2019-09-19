import { colors } from 'react-native-elements';
import { Platform } from 'react-native';

const Theme = {
  ActivityIndicator: {
    color: '#00FF00'
  },
  colors: {
    ...Platform.select({
      default: colors.platform.android,
      ios: colors.platform.ios,
    }),
  },
};

export default Theme;