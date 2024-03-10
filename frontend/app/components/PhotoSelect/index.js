import * as ImagePicker from "expo-image-picker"
import { View, Pressable, Text, Image } from "react-native"
import EntypoIcon from "react-native-vector-icons/Entypo"
import FAIcon from "react-native-vector-icons/FontAwesome6"

import styles from "./styles"

const PhotoSelect = ({image, setImage, onSelect}) => {

    const uploadPhoto = async () => {
        ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All
        }).then(res => !res.canceled && setImage(res.assets[0].uri))
        .catch(e => console.log(e))
    }

    const takePhoto = async () => {
        ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All
        }).then(res => !res.canceled && setImage(res.assets[0].uri))
        .catch(e => console.log(e))
    }

    return (
        <View>
            <Pressable onPress={takePhoto}>
                <View style={styles.photoButton}>
                    <EntypoIcon style={styles.photoButtonIcon} name="camera" size={40} color="#004d80"/>
                    <Text style={styles.photoButtonText}>Take A New Photo</Text>
                </View>
            </Pressable>
            <Pressable onPress={uploadPhoto}>
                <View style={styles.photoButton}>
                    <FAIcon style={styles.photoButtonIcon} name="image" size={40} color="#004d80"/>
                    <Text style={styles.photoButtonText}>Upload A Photo</Text>
                </View>            
            </Pressable>
            {
                image &&
                <View> 
                    <View style={styles.imageContainer}>
                        <Image source={{ uri: image }} style={{width: 350, height: 350, objectFit: "contain"}}/>
                    </View>
                    <Pressable onPress={onSelect}>
                        <View style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>Begin Analyzing Photo</Text>
                            <FAIcon style={styles.submitButtonIcon} name="arrow-right" size={40} color="#004d80"/>
                        </View>
                    </Pressable>
                </View>
            }
        </View>
    )
}

export default PhotoSelect