import {Platform, Dimensions} from 'react-native'
import {colors} from '../resources'

export default StyleSheet => StyleSheet.extend({

  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  okPopup: {
    backgroundColor: colors.pink,
    color: colors.white,
  },

  separator: {
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'stretch',
    marginLeft: 35,
    marginRight: 35,
    borderStyle: 'solid',
    borderLeftWidth: 1,
    borderLeftColor: colors.grey
  },

  default: StyleSheet.extend({
    style: {
      flex: 1,
      backgroundColor: colors.black,
      alignItems: 'center',
      justifyContent: 'center'
    },

    containerStyle: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center'
    },

    iconStyle: {

    },

    textStyle: {
      letterSpacing: 1,
      fontWeight: 'bold',
      fontSize: 13,
      lineHeight: 13,
      color: colors.white,
      margin: 0,
      padding: 0
    },

    activeTextStyle: {

    },

    activeOpacity: 1.0,
    underlayColor: colors.highlightBlack,
    textTransform: s => s.toUpperCase()
  }),

  tab: StyleSheet.extend({
    activeOpacity: 1.0,
    underlayColor: colors.transparent,

    style: {
      flex: 1,
      backgroundColor: colors.transparent
    },

    containerStyle: {
      flexDirection: 'column',
    },

    iconStyle: {

    },

    textStyle: {
      letterSpacing: 0,
      fontSize: Dimensions.get('window').width > 350 ? 12 : 11,
      fontWeight: '400',
      lineHeight: 15,
      color: colors.grey
    },

    activeTextStyle: {
      color: colors.pink
    },

    textTransform: s => s
  }),
  dialog: StyleSheet.extend({
    containerStyle: {
      height: 50
    }
  }),

  dialogDefault: StyleSheet.extend({
    underlayColor: colors.highlightPink,

    style: {
      backgroundColor: colors.pink,
    },

    containerStyle: {
      height: 50
    },

  }),

})
