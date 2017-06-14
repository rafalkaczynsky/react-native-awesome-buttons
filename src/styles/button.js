import {StyleSheet, Dimensions, Platform} from 'react-native'

import props from './props.json'

const colors = props.colors

export const  textTransform = s => s
export const styles = StyleSheet.create({

  text: {
    fontSize: 16,
    lineHeight: 22,
    color: colors.black,
    backgroundColor: colors.transparent
  },

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
})

export const defaults = StyleSheet.create({
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
})

 export const tab =  StyleSheet.create({
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
  })

  export const dialog = StyleSheet.create({
    containerStyle: {
      height: 50
    }
  })

  export const dialogDefault = StyleSheet.create({

    style: {
      backgroundColor: colors.pink,
    },

    containerStyle: {
      height: 50
    },

  })

  export const step = StyleSheet.create({

    style: {
      backgroundColor: colors.grey,
      borderStyle: 'solid',
      borderLeftWidth: StyleSheet.hairlineWidth,
      borderLeftColor: colors.white
    },

    activeStyle: {
      backgroundColor: colors.pink
    },

    containerStyle: {
      height: 50
    },

    textStyle: {
      fontSize: 13,
      color: colors.white
    }
  })

  export const rounded = StyleSheet.create({

    style: {
      borderRadius: 22,
      flex: 0
    },

    containerStyle: {
      height: 44
    }
  })

  export const roundedGrey = StyleSheet.create({

    style: {
      borderRadius: 22,
      backgroundColor: colors.grey,
      flex: 0
    },

    activeStyle: {
      backgroundColor: colors.pink
    },

    containerStyle: {
      height: 44
    }
  })

  export const croundedDefault = StyleSheet.create({

    style: {
      backgroundColor: colors.pink,
      borderRadius: 22,
      flex: 0
    },

    containerStyle: {
      height: 44
    }
  })

  export const roundedWhite = StyleSheet.create({

    style: {
      backgroundColor: colors.white,
      borderRadius: 22,
      flex: 0,
    },

    textStyle: {
      color: colors.black,
    },

    containerStyle: {
      height: 44,
    },
  })

  export const facebook = StyleSheet.create({

    style: {
      backgroundColor: colors.facebookBlue,
      borderRadius: 22,
      flex: 0
    },

    iconStyle: {
      marginRight: 10
    },

    containerStyle: {
      height: 44
    }
  })

  export const roundedBorder = StyleSheet.create({

    style: {
      backgroundColor: colors.transparent,
      borderRadius: 22
    },

    containerStyle: {
      height: 44
    },

    textStyle: {
      color: colors.black
    }
  })

  export const roundedWhiteBorder = StyleSheet.create({

    style: {
      backgroundColor: colors.transparent,
      borderRadius: 16,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: colors.white,
      paddingLeft: 12,
      paddingRight: 12,
      paddingTop: 6,
      paddingBottom: 6,
      flex: 0
    },

    iconStyle: {
      marginRight: 8
    },

    containerStyle: {
      height: null
    },

    textStyle: {
      fontSize: 12,
      color: colors.white
    }
  })

  export const title = StyleSheet.create({

    style: {
      alignSelf: 'flex-start',
      backgroundColor: colors.transparent,
      flex: 0,
      width: null,
      height: null,
      paddingTop: 14,
      paddingBottom: 10,
      paddingLeft: 5,
      paddingRight: 5
    }
  })

  export const check = StyleSheet.create({

    style: {
      backgroundColor: colors.white,
      flex: 0,
      width: null,
      height: null,
      alignSelf: 'stretch'
    },

    containerStyle: {
      height: 90,
      paddingLeft: 30,
      paddingRight: 30,
      alignItems: 'center',
      flexDirection: 'row',
      borderStyle: 'solid',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: colors.grey
    },

    textStyle: {
      color: colors.pink,
      fontSize: 18,
      fontWeight: '500',
      flex: 1
    },

    iconStyle: {
      width: 30,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      borderWidth: StyleSheet.hairlineWidth,
      backgroundColor: colors.transparent
    },

    checkedIconContainerStyle: {
      width: 30,
      height: 30,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: StyleSheet.hairlineWidth,
      overflow: 'hidden',
    },

    checkedIconStyle: {
      backgroundColor: colors.transparent,
    },
  })

  export const addActivity =  StyleSheet.create({

    style: {
      backgroundColor: colors.transparent,
      flex: 1,
      width: null,
      height: null,
      borderRadius: 0,
      alignSelf: 'center',
      marginTop: 15,
      marginBottom: 15,
      padding: 10,
    },

    containerStyle: {
      height: null,
      paddingLeft: 0,
      paddingRight: 0,
      alignItems: 'center',
      flexDirection: 'column-reverse',
      borderBottomWidth: null,
      borderBottomColor: colors.transparent,
    },

    textStyle: {
      color: '#bcc0c8',
      fontSize: 16,
      fontWeight: '400',
      flex: 1,
      letterSpacing: 0
    },

    iconStyle: {
      marginTop: 15,
      width: 32,
      height: 32,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 16,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#bcc0c8',
      backgroundColor: colors.white
    },

    textTransform: s => s
  })

  export const profileActivity = StyleSheet.create({

    style: {
      backgroundColor: colors.transparent,
      flex: 0,
      width: null,
      height: null,
      alignSelf: 'stretch',
      borderRadius: 5
    },

    containerStyle: {
      height: 32,
      paddingLeft: 0,
      paddingRight: 0,
      alignItems: 'center',
      flexDirection: 'row',
      borderBottomWidth: null,
      borderBottomColor: colors.transparent,
    },

    textStyle: {
      color: colors.black,
      fontSize: 16,
      fontWeight: '400',
      flex: 1
    },

    iconStyle: {
      width: 26,
      height: 26,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 13,
      borderBottomWidth: null,
      backgroundColor: colors.pink
    },

    checkedIconStyle: {
      backgroundColor: colors.pink
    },
  })

  export const wizardCheck = StyleSheet.create({

    style: {
      backgroundColor: colors.transparent,
      flex: 0,
      width: null,
      height: null,
      alignSelf: 'stretch'
    },

    containerStyle: {
      height: 65,
      paddingLeft: 20,
      paddingRight: 20,
      alignItems: 'center',
      flexDirection: 'row',
      borderStyle: 'solid',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: colors.black,
      borderBottomWidth: 0
    },

    textStyle: {
      color: colors.black,
      fontSize: 16,
      fontWeight: '400',
      flex: 1
    },

    iconStyle: {
      width: 30,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 15,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: colors.grey,
      backgroundColor: colors.transparent
    },

    checkedIconStyle: {
      backgroundColor: colors.pink,
      borderColor: colors.pink,
    },
  })

  export const checkDisclosure = StyleSheet.create({

    style: {
      backgroundColor: colors.white,
      borderRadius: 15,
      flex: 0,
      width: null,
      height: null,
      alignSelf: 'center',
      borderStyle: 'solid',
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: colors.grey,
      marginRight: 4,
      marginLeft: 4
    },

    containerStyle: {
      height: null,
      paddingLeft: 0,
      paddingRight: 0,
      alignItems: 'center',
      flexDirection: 'row'
    },

    iconStyle: {
      width: 30,
      height: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },

    activeStyle: {
      backgroundColor: colors.pink
    },
  })

  export const disclosure = StyleSheet.create({

    style: {
      flex: 0,
      backgroundColor: colors.transparent,
      width: 32,
      height: 32,
      borderRadius: 16,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    }
  })

  export const image = StyleSheet.create({

    style: {
      flex: 0,
      backgroundColor: colors.transparent,
      width: 60,
      height: 60,
      borderRadius: 30,
      alignItems: 'center',
      justifyContent: 'center',
    },

    activeStyle: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: colors.pink
    },
  })

  export const modeSwitch = StyleSheet.create({

    style: {
      borderRadius: 14,
      backgroundColor: colors.pink,
      alignItems: 'center',
      justifyContent: 'center',
      height: 24,
      width: Platform.OS === 'ios' ? 145 : 155,
      flex: 0,
      paddingBottom: Platform.OS === 'ios' ? 0 : 2,
      paddingTop:  Platform.OS === 'ios' ? 2 : 0,
    },

    textStyle: {
      letterSpacing: 0,
    }

  })

  export const headerAction = StyleSheet.create({

    style: {
      position: 'absolute',
      top: -14,
      right: 15.5,
      width: 28,
      height: 28,
      alignItems: 'center',
      justifyContent: 'center'
    },
  })

  export const headerActionCircle = StyleSheet.create({

    style: {
      position: 'absolute',
      top: -14,
      right: 15.5,
      width: 28,
      height: 28,
      borderRadius: 14,
      borderColor: colors.white,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
  })

  export const alert = StyleSheet.create({

    style: {
      backgroundColor: colors.transparent,
      borderStyle: 'solid',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: colors.grey,
      borderRightWidth: StyleSheet.hairlineWidth,
      borderRightColor: colors.grey,
      height: 45
    },

    textStyle: {
      fontSize: 13,
      fontWeight: 'bold',
      color: colors.black,
    }
  })

  export const alertDefault = StyleSheet.create({

    style: {
      backgroundColor: colors.transparent,
      borderStyle: 'solid',
      borderTopWidth: StyleSheet.hairlineWidth,
      borderTopColor: colors.grey,
      height: 45
    },

    textStyle: {
      fontSize: 13,
      fontWeight: 'bold',
      color: colors.pink,
    }
  })

  export const alertVertical = StyleSheet.create({

    style: {
      flex: 0,
      width: 270,
      backgroundColor: colors.transparent,
      borderStyle: 'solid',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: colors.grey,
      height: 55
    },

    textStyle: {
      fontSize: 13,
      fontWeight: 'bold',
      color: colors.black,
    }
  })

  export const alertVerticalDefault = StyleSheet.create({

    style: {
      width: 270,
      backgroundColor: colors.transparent,
      borderStyle: 'solid',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: colors.grey,
      height: 55,
      flex: 0,
    },

    textStyle: {
      fontSize: 13,
      fontWeight: 'bold',
      color: colors.pink,
    }
  })

  export const  alertVerticalGreen = StyleSheet.create({

    style: {
      width: 270,
      backgroundColor: colors.transparent,
      borderStyle: 'solid',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: colors.grey,
      height: 55,
      flex: 0,
    },

    textStyle: {
      fontSize: 13,
      fontWeight: 'bold',
      color: colors.green,
    }
  })

  export const dialogGreen = StyleSheet.create({

    style: {
      backgroundColor: colors.green,
      flex: 1,
      alignSelf: 'stretch'
    }
  })

  export const top = StyleSheet.create({

    style: {
      backgroundColor: colors.window,
      flex: 1,
      alignSelf: 'stretch',

      borderStyle: 'solid',
      borderBottomWidth: 4,
      borderBottomColor: colors.transparent,
      height: 50
    },

    activeStyle: {
      borderBottomColor: colors.pink
    },

    textStyle: {
      color: colors.black
    },

    activeTextStyle: {
      color: colors.pink
    }
  })

  export const profile = StyleSheet.create({

    style: {
      backgroundColor: colors.transparent,
      flex: 0,
      alignSelf: 'flex-end',

      borderStyle: 'solid',
      borderRadius: 15,
      borderWidth: 1,
      borderColor: colors.black,
      height: 30,
      paddingLeft: 10,
      paddingRight: 10,
      marginRight: 10
    },

    textStyle: {
      marginLeft: 5,
      color: colors.black,
      fontWeight: 'bold',
      letterSpacing: 1,
      fontSize: 11,
    }
  })

  export const profileDefault = StyleSheet.create({

    style: {
      backgroundColor: colors.pink,
      flex: 0,
      alignSelf: 'flex-end',

      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: colors.pink,
      borderRadius: 15,
      height: 30,
      paddingLeft: 10,
      paddingRight: 10,
      marginRight: 10
    },

    textStyle: {
      marginLeft: 5,
      color: colors.white,
      fontWeight: 'bold',
      letterSpacing: 1,
      fontSize: 11,
    }
  })

  export const listItem = StyleSheet.create({

    style: {
      backgroundColor: colors.transparent,
      flex: 0,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
      paddingBottom: 20,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      marginBottom: 0,
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',

      borderStyle: 'solid',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: colors.grey,
      borderRadius: 0,
      height: 50
    },

    textStyle: {
      color: colors.black,
      fontWeight: '400',
      letterSpacing: 0,
      fontSize: 16,
    },

    textTransform: s => s
  })

  export const preference = StyleSheet.create({

    style: {
      backgroundColor: colors.white,
      flex: 0,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
      paddingBottom: 20,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      marginBottom: 0,
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',

      borderStyle: 'solid',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: colors.black,
      borderRadius: 0,
      height: 60
    },

    containerStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',
    },

    iconStyle: {
      position: 'absolute',
      right: -12,
      top: -6,
      height: 24,
      width: 24,
      alignItems: 'center',
      justifyContent: 'center'
    },

    textStyle: {
      color: colors.black,
      fontWeight: 'bold',
      letterSpacing: 0,
      fontSize: 16,
      lineHeight: 16,
      flex: 1
    },

    textTransform: s => s
  })

  export const preferenceCheck = StyleSheet.create({

    style: {
      backgroundColor: colors.white,
      flex: 0,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
      paddingBottom: 20,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      marginBottom: 0,
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',

      borderStyle: 'solid',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: colors.black,
      borderRadius: 0,
      height: 60
    },

    containerStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',
    },

    iconStyle: {
      position: 'absolute',
      right: -6,
      top: -8,
      height: 30,
      width: 30,
      borderRadius: 15,
      borderStyle: 'solid',
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: colors.grey,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.white
    },

    activeIconStyle: {
      borderColor: colors.pink,
      backgroundColor: colors.pink
    },

    textStyle: {
      color: colors.black,
      fontWeight: 'bold',
      letterSpacing: 0,
      fontSize: 16,
      lineHeight: 16,
      flex: 1
    },

    textTransform: s => s
  })

  export const preferenceLink = StyleSheet.create({

    style: {
      backgroundColor: '#e5e9ea',
      flex: 0,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
      paddingBottom: 20,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      marginBottom: 0,
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',

      borderStyle: 'solid',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: colors.grey,
      borderRadius: 0,
      height: 60
    },


    containerStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',
    },

    iconStyle: {
      position: 'absolute',
      right: -12,
      top: -6,
      height: 24,
      width: 24,
      alignItems: 'center',
      justifyContent: 'center'
    },

    textStyle: {
      color: colors.black,
      fontWeight: 'bold',
      letterSpacing: 0,
      fontSize: 16,
      lineHeight: 16,
      flex: 1
    },

    textTransform: s => s
  })

  export const preferenceHighlightLink = StyleSheet.create({

    style: {
      backgroundColor: '#e5e9ea',
      flex: 0,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
      paddingBottom: 20,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      marginBottom: 0,
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',

      borderStyle: 'solid',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: colors.grey,
      borderRadius: 0,
      height: 60
    },


    containerStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row',
    },

    iconStyle: {
      position: 'absolute',
      right: -12,
      top: -6,
      height: 24,
      width: 24,
      alignItems: 'center',
      justifyContent: 'center'
    },


    textStyle: {
      color: colors.pink,
      fontWeight: 'bold',
      letterSpacing: 0,
      fontSize: 16,
      lineHeight: 16,
      flex: 1
    },


    textTransform: s => s
  })

