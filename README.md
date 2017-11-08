# react-native-awesome-buttons
Button component  build with React-Native

![alt text](https://github.com/rafalkaczynsky/react-native-awesome-buttons/blob/master/screen-one.png)
![alt text](https://github.com/rafalkaczynsky/react-native-awesome-buttons/blob/master/screen-two.png)

(It's just an example what you can achieve with react-native)

This reusable react-native component could be used in any App with payment options.

How to run it locally from command line

- Clone this repo git clone https://github.com/rafalkaczynsky/react-native-awesome-buttons.git
- cd ReactNativeAwesomeButtons
- npm install
- react-native run-android / react-native run-ios


Use as follows:

                     <Button
                        type="dialogDefault"
                        text="dialog Default"
                        style={[StyleSheet.singleMargin, {backgroundColor: 'blue'}]}
                        onPress={()=>alert('Button Pressed')}
                      />
 
Examples of what you can pass into type prop:  {...}
 
        dialogDefault, tab, step, rounded, roundedGrey, roundedDefault, roundedWhite,
        roundedBorder, roundedWhiteBorder, image, modeSwitch, alertDefault, top, profile,
        profileDefault, preference, preferenceHighlightLink
    

