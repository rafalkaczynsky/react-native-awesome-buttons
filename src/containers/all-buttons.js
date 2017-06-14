import React from 'react'
import {View} from 'react-native'

import AllButtons from '../windows/all-buttons'

export default class Wallet extends React.Component {
  
    render(){
        return(
            <View style={{flex: 1}}>
                <AllButtons />
            </View>
        )
    }
}  