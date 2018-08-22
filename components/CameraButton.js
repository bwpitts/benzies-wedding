import React from "react";
import { TouchableOpacity, Platform } from "react-native";
import {ImagePicker, Icon, Permissions} from "expo";

class CameraButton extends React.Component {
    _pickImage = async () => {
        const { Permissions, Camera, CameraRoll } = Expo;

        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        if (status === 'granted'){
            let result = await ImagePicker.launchImageLibraryAsync({
                allowsEditing: true,
                aspect: [4,3]
            });
            if (!result.cancelled) {
                this.setState({image: result.uri})
            }
        } else {
            throw new Error("Location permission not granted")
        }


    };

    render() {
        return (
            <TouchableOpacity
                onPress={this._pickImage}>
                <Icon.Ionicons
                    name={Platform.OS === 'ios' ? `ios-camera` : 'md-camera'}
                    size={26}
                    style={{ marginBottom: -3, paddingRight: 10 }}
                />
            </TouchableOpacity>
        )
    }
}

export default CameraButton;