import React from 'react'
import {View, ScrollView} from 'react-native'

import {Button} from '../components'

export default class DisplayButtons extends React.Component {
    render(){
        return(
            <View>
                <ScrollView>
                <Button type="default" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="tab" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="rounded" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="dialog:" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type=" dialogDefault" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />

                <Button type="step" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="rounded" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="roundedGrey:" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="roundedDefault" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="roundedWhite" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="roundedBorder" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="roundedWhiteBorder" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="check" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="addActivity" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="profileActivity" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="wizardCheck" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="checkDisclosure" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="disclosure" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="image" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="modeSwitch" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />

                <Button type="headerAction" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="headerActionCircle" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="alert" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="alertDefault" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="alertVertical" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="alertVerticalDefault" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="alertVerticalGreen" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="dialogGreen" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="profile" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="profileDefault" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="listItem" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="preference" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="preferenceCheck" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="preferenceLink" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
                <Button type="preferenceHighlightLink" text={"dialog"} onPress={()=> alert('Button Dialog Clicked')} />
            </ScrollView>
         </View>                                                                      
        )
    }
}