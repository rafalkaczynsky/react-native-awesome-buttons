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
                        style={[StyleSheet.singleMargin]}
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
                </ScrollView>
            </View>
    )}
}  