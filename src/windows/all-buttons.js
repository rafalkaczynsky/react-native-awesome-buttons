import React from 'react'
import {View, Text, ScrollView} from 'react-native'

import StyleSheet from '../styles'
import {calculateDisplayData} from '../utils'
import {Button} from '../components'

export default class AllButtons extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const users = this.props.users // to be replaced

        return(
            <View style={{flex: 1, padding: 20, backgroundColor: '#e1e9f7'}}>
                <ScrollView>
                    <Button
                        type="dialogDefault"
                        text="dialog Default"
                        style={[StyleSheet.singleMargin, {backgroundColor: 'blue'}]}
                        onPress={()=>alert('Button Pressed')}
                    />
                    <Button
                        type="tab"
                        text="tab"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />
                    <Button
                        type="step"
                        text="step"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />

                    <Button
                        type="rounded"
                        text="rounded"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />

                    <Button
                        type="roundedGrey"
                        text="roundedGrey"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />

                    <Button
                        type="roundedDefault"
                        text="roundedDefault"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />
                    <Button
                        type="roundedWhite"
                        text="roundedWhite"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />

                    <Button
                        type="roundedBorder"
                        text="roundedBorder"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />

                    <Button
                        type="roundedWhiteBorder"
                        text="roundedWhiteBorder"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />

                    <Button
                        type="facebook"
                        text="facebook"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />
                    <Button
                        type="title"
                        text="title"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />

                    <Button
                        type="check"
                        text="check"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />

                    <Button
                        type="add"
                        text="add"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />

                    <Button
                        type="profileActivity"
                        text="profileActivity"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />

                    <Button
                        type="wizardCheck"
                        text="wizardCheck"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />
                    <Button
                        type="checkDisclosure"
                        text="checkDisclosure"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />

                    <Button
                        type="disclosure"
                        text="disclosure"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />

                    <Button
                        type="image"
                        text="image"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />

                    <Button
                        type="modeSwitch"
                        text="modeSwitch"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />
                    <Button
                        type="headerAction"
                        text="headerAction"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />

                    <Button
                        type="headerActionCircle"
                        text="headerActionCircle"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />

                    <Button
                        type="alert"
                        text="alert"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />

                    <Button
                        type="alertDefault"
                        text="alertDefault"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />
                    <Button
                        type=" alertVertical"
                        text=" alertVertical"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />

                    <Button
                        type="alertVerticalDefault"
                        text="alertVerticalDefault"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />

                    <Button
                        type="alertVerticalGreen"
                        text="alertVerticalGreen"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />                  

                    <Button
                        type="dialogGreen"
                        text="dialogGreen"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />

                    <Button
                        type="top"
                        text="top"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />
                    <Button
                        type="profile"
                        text="profile"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />

                    <Button
                        type="profileDefault"
                        text="profileDefault"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />

                    <Button
                        type="listItem"
                        text="listItem"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />

                    <Button
                        type="preference"
                        text="preference"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />
                    <Button
                        type="preferenceCheck"
                        text="preferenceCheck"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />

                    <Button
                        type="preferenceLink"
                        text="preferenceLink"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />

                    <Button
                        type="preferenceHighlightLink"
                        text="preferenceHighlightLink"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />
                </ScrollView>
            </View>
    )}
}  