import React from "react"
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    FlatList,
    Modal,
    TextInput,
    AsyncStorage,
    PermissionsAndroid
} from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from "react-native-vector-icons/Feather"
import * as ImagePicker from 'react-native-image-picker';;
import { StylesAccount } from "./styles";
import { COLOR, FONTS, ICONS, images } from "../../constants";
import { RFValue } from "react-native-responsive-fontsize";
import { BackArrowHeader } from "../../components";
import { StylesForgetPass } from "../forgetPass";
export default class EditPage extends React.Component {

    constructor() {
        super()
        this.state = {
            photo_uri: "https://i.pinimg.com/236x/7e/69/bc/7e69bc0d7eae631323b38dd5d5e5c0fd.jpg",
            icon_dark: false,
            dark_mode: false,
           name: "Ayman Gaballah",
            inpu_name: "",
            Visable_modal1: false,
            Visable_modal2: false,

        }
    }

    set_name() {
        let user_name = this.state.inpu_name
        this.setState({
            inpu_name: user_name,
           
        })
        this.setChangeName(user_name)
    }

    requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: "Cool Photo App Camera Permission",
                    message: "Cool Photo App needs access to your camera " + "so you can take awesome pictures.",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                });
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the camera");
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    };


    selectFromGallery = () => {

        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchImageLibrary({ options, includeBase64: true }, (res) => {
            console.log('Response = ', res);

            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.error) {
                console.log('ImagePicker Error: ', res.error);
            } else if (res.customButton) {
                console.log('User tapped custom button: ', res.customButton);
                alert(res.customButton);
            } else {

                this.setState({
                    photo_data: res.assets[0],
                    photo_uri: res.assets[0].uri,
                });
            }
        });
        this.setChangeImage(this.state.photo_uri)

    }

    async setChangeImage(change_image) {
        await AsyncStorage.setItem('changeImage', JSON.stringify(change_image))
    }
    async getChangeImage() {
        let get_image = await AsyncStorage.getItem('changeImage')

        if (get_image == null || get_image == undefined) {
            get_image = '[]'
        } else {
            get_image = JSON.parse(get_image)
        }

        this.setState({ photo_uri: get_image })


    }


    async setChangeName(change_name) {
        await AsyncStorage.setItem('changename', JSON.stringify(change_name))
    }
    async getChangeName() {
        let get_name = await AsyncStorage.getItem('changename')

        if (get_name == null || get_name == undefined) {
            get_name = ''
        } else {
            get_name = JSON.parse(get_name)
        }


        this.setState({ name: get_name })

    }

    componentDidMount() {
        this.getChangeName()
        this.getChangeImage()
    }

    render() {
        return (
            <>
                <View style={[StylesAccount.container,
                { backgroundColor: this.state.dark_mode ? COLOR.dark_gray : "#fff" }]}>


                    <View style={[StylesForgetPass.arrowContainer, {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        // backgroundColor: '#f00',
                        alignItems: 'center',
                        paddingHorizontal: 10
                    }]}>
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate("Account")
                                this.set_name()
                                // this.getChangeName()
                                // this.getChangeImage()
                            }}
                        >
                            <FontAwesome5 name="chevron-left" color={"#373737"}
                                size={ICONS.xlIcon} style={{ marginRight: RFValue(15) }} />
                        </TouchableOpacity>
                        <TouchableOpacity

                            onPress={() => {
                                this.set_name()
                                this.props.navigation.navigate("Account")
                                //async
                            }}

                            style={[StylesAccount.bottom_text_input,
                            { alignItems: 'flex-end', paddingRight: RFValue(15) }]}>

                            <Text style={{ fontSize: RFValue(20), fontWeight: "bold", color: COLOR.PrimaryColor }}>Done</Text>

                        </TouchableOpacity>
                    </View>



                    <ScrollView>
                        <View style={[StylesAccount.view_profil_imge, { height: 200 }]}>
                            <Image
                                source={{ uri: this.state.photo_uri }}
                                style={StylesAccount.style_img_profil}
                            />
                            <TouchableOpacity

                                onPress={() => {
                                    this.selectFromGallery()
                                }}

                                style={[StylesAccount.bottom_text_input, { width: RFValue(120) }]}>

                                <Text style={{ fontSize: RFValue(17), fontWeight: "bold", color: COLOR.PrimaryColor }}>Change Photo</Text>

                            </TouchableOpacity>



                        </View>

                        <TextInput
                            placeholder="Enter New Name "
                            placeholderTextColor={this.state.dark_mode ? "#fff" : COLOR.gray}


                            value={this.state.inpu_name}
                            onChangeText={(value) => {
                                this.setState({ inpu_name: value })
                            }}

                            style={[StylesAccount.text_input, {
                                // backgroundColor: this.state.dark_mode ? COLOR.dark_gray : "#fff",
                                borderColor: this.state.dark_mode ? "#fff" : "#000",
                                color: this.state.dark_mode ? "#fff" : "#000", marginTop: RFValue(0)
                            }]}


                        />



                        {/* <TouchableOpacity

                                onPress={() => {
                                    this.set_name()


                                }}

                                style={StylesAccount.bottom_text_input}>

                                <Text style={{ fontSize: RFValue(20), fontWeight: "bold", color: COLOR.PrimaryColor }}>Update</Text>

                            </TouchableOpacity> */}


                    </ScrollView>

                </View>
            </>
        )
    }

}






// <View
//                 // visible={this.state.Visable_modal1}

//                 // animationType="fade"
//                 // onRequestClose={() => {
//                 //     this.setState({ Visable_modal1: false, })

//                 // }}
//                 >

//                     <View style={[StylesAccount.container, { backgroundColor: this.state.dark_mode ? "#000" : "#fff" }]}>

//                         <View style={[StylesAccount.header,]}>

//                             <TouchableOpacity

//                                 onPress={() => {
//                                     // this.setState({ Visable_modal1: false })
//                                     this.props.navigation.navigate("Account")
//                                 }}
//                             >
//                                 <Icon name="chevron-left" size={ICONS.xlIcon} style={{ color: "#000" }} />
//                             </TouchableOpacity>


//                         </View>


//                         <View style={StylesAccount.view_contanir_text_input}>
//                             <TextInput
//                                 placeholder="Enter New Name "
//                                 placeholderTextColor={"#000"}


//                                 value={this.state.inpu_name}
//                                 onChangeText={(value) => {
//                                     this.setState({ inpu_name: value })
//                                 }}

//                                 style={StylesAccount.text_input}


//                             ></TextInput>

//                             <TouchableOpacity

//                                 onPress={() => {
//                                     this.set_name()
//                                 }}

//                                 style={StylesAccount.bottom_text_input}>

//                                 <Text style={{ fontSize: RFValue(20), fontWeight: "bold" }}>update</Text>

//                             </TouchableOpacity>

//                         </View>

//                     </View>


//                 </View >