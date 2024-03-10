import React from 'react';
import { Text, SafeAreaView, View,} from 'react-native';
import { useState } from "react"

import DisplayButtons from '../../components/DisplayButtons';
import { styles } from './styles';
import PhotoSelect from '../../components/PhotoSelect';
function Scanner() {
    
    const [image, setImage] = useState(null)

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.titleStyle}>
                Make Camera Work Good
            </Text>

            <PhotoSelect image={image} setImage={setImage} onSelect={() => {}}/>
            
            <DisplayButtons currentPath='Scanner' />

        </SafeAreaView>
    )

}
export default Scanner;
