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
            <View style={{flex: 1, padding: 20,}}>
                <ScrollView>
                    <Button
                        type="roundedDefault"
                        text="rounded Default"
                        style={[StyleSheet.singleMargin]}
                        onPress={()=>alert('Button Pressed')}
                    />
                </ScrollView>
            </View>
    )}
}  