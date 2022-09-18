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
import { COLOR, FONTS, ICONS, images, MARGIN } from "../../constants";
import { RFValue } from "react-native-responsive-fontsize";
import { BackArrowHeader } from "../../components";
import { StylesForgetPass } from "../forgetPass";
import { StylesLogSign } from '../loginSignup';
import { Button } from "react-native-paper";
export default class EditPage extends React.Component {

    constructor() {
        super()
        this.state = {
            photo_uri: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fhomey.app%2Fimg%2Fnav%2Faccount.svg&imgrefurl=https%3A%2F%2Fhomey.app%2Fen-gb%2Faccount%2Fsubscriptions%2F&tbnid=mkm9VteTbOudZM&vet=12ahUKEwjH0IyGzt_5AhUPeBoKHT6RBM4QMygSegUIARDnAQ..i&docid=d51JUCMEu1GnmM&w=800&h=800&q=photo%20account&ved=2ahUKEwjH0IyGzt_5AhUPeBoKHT6RBM4QMygSegUIARDnAQ",
            icon_dark: false,
            dark_mode: false,
            name: "Ayman Gaballah",
            inpu_name: "",
            Visable_modal1: false,
            Visable_modal2: false,

            

            account_username: '',
            active_editOfUsername: false,

            // account_phone: '',
            // active_editOfPhone:false,

            email_err: '',
            account_email: '',
            active_editOfEmail: false,

        }
    }

    set_name() {
        let user_name = this.state.inpu_name
        this.setState({
            name: user_name,

        })
        this.setChangeName(user_name)
    }

    change_dark_mode() {
        let DarkMode = this.state.dark_mode
        this.setState({ dark_mode: !DarkMode })
        this.store_dark(!DarkMode)

    }

    async store_dark(value) {
        await AsyncStorage.setItem("dark_mode", JSON.stringify(value))
    }

    async get_dark() {
        let mood = await AsyncStorage.getItem("dark_mode")

        if (mood == null || mood == "") {
            mood = "false"
        }

        mood = JSON.parse(mood)
        this.setState({ dark_mode: mood })
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

                this.setChangeImage(res.assets[0].uri)

            }
        });

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
        this.get_dark()
    }

    edit_Username() {
        let editState = this.state.active_editOfUsername
        if (!editState) {
            editState = true
        }
        this.setState({ active_editOfUsername: editState })
        console.log(editState)
    }

    edit_Email() {
        let editState = this.state.active_editOfEmail
        if (!editState) {
            editState = true
        }
        this.setState({ active_editOfEmail: editState })
        console.log(editState)
    }

    email_validation() {
        let email = this.state.account_email;

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/; // asdsadsad@sadjkjshd.skldjlskjd
        if (reg.test(email.trim()) == false || email.trim().length == 0) {
            this.setState({ email_err: 'Please Enter Correct Email!' });
        } else {
            this.setState({ email_err: '' });
            // this.sendOTP();
        }
    }



    render() {
        return (
            <>

                <View style={[StylesForgetPass.container]}>
                    <BackArrowHeader onPress={() => this.props.navigation.goBack()} />

                    <ScrollView>

                        {/* Change Photo View */}
                        <View style={[StylesAccount.view_profil_imge, { height: 200, marginTop: RFValue(0) }]}>

                            {/* Account Image */}
                            <TouchableOpacity
                                onPress={() => {
                                    this.selectFromGallery()
                                    //async
                                }}
                                style={[StylesAccount.accountImage_container, { marginBottom: RFValue(0) }]}
                            >
                                <Image style={StylesAccount.accountImage_style}
                                    source={images.story11}
                                />
                            </TouchableOpacity>

                            {/* Change Photo Text */}
                            <TouchableOpacity

                                onPress={() => {
                                    this.selectFromGallery()
                                }}

                                style={[StylesAccount.bottom_text_input, { width: RFValue(120) }]}>

                                <Text style={{ fontSize: RFValue(17), fontWeight: "bold", color: COLOR.PrimaryColor }}>Change Photo</Text>

                            </TouchableOpacity>

                        </View>

                        {/* Username TextInput */}
                        <View style={[StylesLogSign.email_passView, { marginTop: MARGIN.mdMargin }]}>
                            <FontAwesome5
                                name="user"
                                size={ICONS.mdIcon}
                                color={COLOR.PrimaryColor}
                                style={{ marginLeft: RFValue(10) }}
                            />

                            <TextInput
                                value={this.state.account_username}
                                onChangeText={value => {
                                    this.setState({ account_username: value });
                                }}
                                placeholder="Username"
                                style={[StylesLogSign.email_passTextInput]}
                                keyboardType="default"
                                placeholderTextColor={COLOR.gray}
                                autoCapitalize="none"
                            />

                            <TouchableOpacity
                                onPress={() => {
                                    this.edit_Username();
                                }}
                            >
                                <FontAwesome5
                                    name="pen"
                                    size={ICONS.smIcon}
                                    color={(this.state.active_editOfUsername ? COLOR.dark_gray : COLOR.gray)}
                                    style={{ marginRight: RFValue(10) }}
                                />
                            </TouchableOpacity>
                        </View>

                        {/* Phone Number TextInput */}
                        {/* <View style={[StylesLogSign.email_passView, { marginTop: MARGIN.mdMargin }]}>
                            <FontAwesome5
                                name="phone-alt"
                                size={ICONS.mdIcon}
                                color={COLOR.PrimaryColor}
                                style={{ marginLeft: RFValue(10) }}
                            />

                            <TextInput
                                value={this.state.account_phone}
                                onChangeText={value => {
                                    this.setState({ account_phone: value });
                                }}
                                placeholder="Phone number"
                                style={StylesLogSign.email_passTextInput}
                                keyboardType="phone-pad"
                                placeholderTextColor={COLOR.gray}
                                autoCapitalize="none"
                            />

                            <TouchableOpacity>
                                <FontAwesome5
                                    name="pen"
                                    size={ICONS.smIcon}
                                    color={COLOR.gray}
                                    style={{ marginRight: RFValue(10) }}
                                />
                            </TouchableOpacity>
                        </View> */}

                        {/* Email TextInput */}
                        <View style={[StylesLogSign.email_passView, { marginTop: MARGIN.mdMargin }]}>
                            <FontAwesome5
                                name="envelope"
                                size={ICONS.mdIcon}
                                color={COLOR.PrimaryColor}
                                style={{ marginLeft: RFValue(10) }}
                            />

                            <TextInput
                                value={this.state.account_email}
                                onChangeText={value => {
                                    this.setState({ account_email: value });
                                }}
                                placeholder="Email"
                                style={StylesLogSign.email_passTextInput}
                                keyboardType="email-address"
                                placeholderTextColor={COLOR.gray}
                                autoCapitalize="none"
                            />

                            <TouchableOpacity
                                onPress={() => {
                                    this.edit_Email();
                                }}
                            >
                                <FontAwesome5
                                    name="pen"
                                    size={ICONS.smIcon}
                                    color={(this.state.active_editOfEmail ? COLOR.dark_gray : COLOR.gray)}
                                    style={{ marginRight: RFValue(10) }}
                                />
                            </TouchableOpacity>
                        </View>

                        {/* Error Text of Email Validation */}
                        <Text
                            style={{
                                fontSize: FONTS.h5,
                                color: COLOR.dark_red,
                                marginTop: 5,
                                alignSelf:'center'
                            }}>
                            {this.state.email_err}
                        </Text>


                        {/* Save Cahnges Button */}
                        <TouchableOpacity
                            activeOpacity={0.4}
                            onPress={() => {
                                this.email_validation()
                            }}
                            style={[
                                StylesForgetPass.resetView,
                                {
                                    alignSelf: 'center',
                                    width: RFValue(200),
                                    marginBottom: MARGIN.mdMargin,
                                },
                            ]}>
                            {/* {this.state.loading ? (
                                <ActivityIndicator size={'large'} color={COLOR.White} />
                            ) : (
                                <Text style={StylesForgetPass.resetText}>Update Password</Text>
                            )} */}

                            <Text style={StylesForgetPass.resetText}>Save Changes</Text>
                        </TouchableOpacity>

                    </ScrollView>

                </View>
            </>
        )
    }

}


































// Error Text
{/* <Text
    style={{
        fontSize: FONTS.h5,
        color: COLOR.dark_red,
        marginTop: 5,
    }}>
    {this.state.email_err}
</Text> */}


// Old Header View
{/* <View style={[StylesForgetPass.arrowContainer, {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f00',
    alignItems: 'center',
    paddingHorizontal: 10
}]}>
    <TouchableOpacity
        onPress={() => {
            this.props.navigation.navigate("Account")
            // this.set_name()
            // this.getChangeName()
        }}
    >
        <FontAwesome5 name="chevron-left" color={this.state.dark_mode ? "#fff" : "#373737"}
            size={ICONS.xlIcon} style={{ marginRight: RFValue(15) }} />
    </TouchableOpacity>
    <TouchableOpacity

        onPress={() => {
            this.set_name()
            // this.getChangeName()
            this.getChangeImage()
            this.props.navigation.navigate("Account")
            //async
        }}

        style={[StylesAccount.bottom_text_input,
        { alignItems: 'flex-end', paddingRight: RFValue(15) }]}>

        <Text style={{ fontSize: RFValue(20), fontWeight: "bold", color: COLOR.PrimaryColor }}>Done</Text>

    </TouchableOpacity>
</View> */}


//  Old TextInput
// <TextInput
//     placeholder="Enter New Name "
//     placeholderTextColor={this.state.dark_mode ? "#fff" : COLOR.gray}


//     value={this.state.inpu_name}
//     onChangeText={(value) => {
//         this.setState({ inpu_name: value })
//     }}

//     style={[StylesAccount.text_input, {
//         borderBottomColor: this.state.dark_mode ? "#fff" : "#373737",
//         color: this.state.dark_mode ? "#fff" : "#373737", marginTop: RFValue(0)
//     }]}
// />
















// Old Update Button
//     < TouchableOpacity

// onPress = {() => {
//     this.set_name()


// }}

// style = { StylesAccount.bottom_text_input } >

//     <Text style={{ fontSize: RFValue(20), fontWeight: "bold", color: COLOR.PrimaryColor }}>Update</Text>

// </TouchableOpacity >





























// Old Code:


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