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
import { StylesAccount } from "./styles";
import { images,FONTS,COLOR,ICONS } from "../../constants";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from "react-native-vector-icons/Feather"
import { RFValue } from "react-native-responsive-fontsize";
import axios from "axios";
import * as ImagePicker from 'react-native-image-picker';
import { Header } from "../../components";


export default class Account extends React.Component {

    constructor({route}) {
        super()
        this.state = {


            photo_uri: "",
            icon_dark: false,
            dark_mode: false,
            name: "Alaa Hamdi",
            inpu_name: "",
        //   name_change:route.params("editName"),


            Visable_modal1: false,
            Visable_modal2: false,

        }
        
    }
   
    
    // Functions
    set_name() {
        let user_name = this.state.inpu_name

        this.setState({ inpu_name: user_name })
        this.setChangeName(user_name)
    }

    ghange_icon_mode() {
        let icon_dark_mode = this.state.icon_dark
        this.setState({ icon_dark: !icon_dark_mode })
    }

    change_dark_mode() {
        let DarkMode = this.state.dark_mode
        this.setState({ dark_mode: !DarkMode })
        this.store_dark(!DarkMode)

    }

    componentDidMount() {
        this.get_dark()
        this.requestCameraPermission()
        this.set_name()
        // axios.get('https://generation3.000webhostapp.com/project/Training/photographer_list.php')
        //     .then(function (response) {
        //         if (response.status == 200) {

        //         }
        //         // handle success
        //         console.log(response);
        //     })

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

    async setChangeImage  (change_image)  {
        await AsyncStorage.setItem('changeImage', JSON.stringify(change_image))
    }

    // async getChangeImage  ()  {
    //     let get_image = await AsyncStorage.getItem('changeImage')
    //     alert(get_image)

    //     if (get_image == null || get_image == undefined) {
    //         get_image = '[]'
    //     } else {
    //         get_image = JSON.parse(get_image)
    //     }

       
    //     this.setState({photo_uri:get_image})

    // }

    // async setChangeName  (change_name)  {
    //     await AsyncStorage.setItem('changename', JSON.stringify(change_name))
    // }

    // async getChangeName  ()  {
    //     let get_name = await AsyncStorage.getItem('changename')

    //     if (get_name == null || get_name == undefined) {
    //         get_name = ''
    //     } else {
    //         get_name = JSON.parse(get_name)
    //     }

       
    //     this.setState({name:get_name})

    // }
    
    componentDidMount(){
        // this.getChangeImage()
        // this.getChangeName()
      
    }


    // New Design:
    render() {
        return (
            <>
    
                <View style={[StylesAccount.accountPage_container,{backgroundColor: this.state.dark_mode ? COLOR.dark_gray :COLOR.White }]}> 
                    
                    {/* Header */}
                    <View style={StylesAccount.accountHeader}>
                        <Text style={StylesAccount.textOfAccount_header }>Account</Text>
                    </View>


                    {/* Account Details */}
                    <View style={StylesAccount.accountDetails_container}>
                        
                        {/* Account Image */}
                        <TouchableOpacity 
                            onPress={() => {
                                this.selectFromGallery()
                                //async
                            }}
                            style={StylesAccount.accountImage_container}
                        >
                            <Image style={StylesAccount.accountImage_style} 
                                source={images.story11}
                            />
                        </TouchableOpacity>
                            
                        <Text style={[StylesAccount.accountName_text,{ color: this.state.dark_mode ? "#fff" : COLOR.dark_gray }]}>{this.state.name}</Text>

                        <Text style={[StylesAccount.accountName_text,{fontSize:FONTS.h6 , color:this.state.dark_mode? "#fff" : COLOR.dark_gray}]}>450  Following</Text>

                        {/* Edit Button */}
                        <TouchableOpacity 
                            onPress={() => {
                                this.props.navigation.navigate("EditPage")
                            }}
                            style={[StylesAccount.accountEdit_container,{backgroundColor:this.state.dark_mode ?COLOR.dark_gray:COLOR.White }]}
                        >
                            <Text style={[StylesAccount.accountName_text,{fontSize:FONTS.h6 , color:this.state.dark_mode? "#fff" : COLOR.dark_gray}]}>Edit</Text>
                        </TouchableOpacity>

                    </View>


                    {/* Options */}
                    <ScrollView style={{width:'100%'}}>
                        <View style={{
                            alignItems:'center',
                            marginTop:RFValue(15)
                            // backgroundColor:'#ff0'
                        }}>

                            {/* Notifications */}
                            <TouchableOpacity style={[StylesAccount.accountOptions_container,{backgroundColor:this.state.dark_mode? COLOR.gray : '#ddd'}]}>
                                <Ionicons name="notifications" size={RFValue(ICONS.mdIcon)} style={StylesAccount.accountOptions_icons}/>
                                <Text style={{ flex:1, fontSize: RFValue(FONTS.h5), color:this.state.dark_mode? "#fff" : COLOR.black, fontWeight:"bold" }}>Notifications</Text>
                                <FontAwesome5 name="chevron-right" size={RFValue(ICONS.smIcon)} color={this.state.dark_mode? COLOR.White : null} />
                            </TouchableOpacity>

                            {/* Saved Items */}
                            <TouchableOpacity 
                                onPress={() => {
                                    this.props.navigation.navigate("SavedPage")
                                }}
                                style={[StylesAccount.accountOptions_container,{backgroundColor:this.state.dark_mode? COLOR.gray : '#ddd'}]}
                            >
                                <FontAwesome name="bookmark" size={RFValue(ICONS.mdIcon)} style={[StylesAccount.accountOptions_icons,{paddingHorizontal:RFValue(13)}]}/>
                                <Text style={{ flex:1, fontSize: RFValue(FONTS.h5), color:this.state.dark_mode? "#fff" : COLOR.black, fontWeight:"bold" }}>Saved Items</Text>
                                <FontAwesome5 name="chevron-right" size={RFValue(ICONS.smIcon)} color={this.state.dark_mode? COLOR.White : null}/>
                            </TouchableOpacity>

                            {/* Dark Mode */}
                            <TouchableOpacity 
                                onPress={() => {
                                    this.ghange_icon_mode()
                                    this.change_dark_mode()
                                }}
                                style={[StylesAccount.accountOptions_container,{backgroundColor:this.state.dark_mode? COLOR.gray : '#ddd'}]}
                            >
                                <Ionicons name="moon-sharp" size={RFValue(ICONS.mdIcon)} style={StylesAccount.accountOptions_icons}/>
                                <Text style={{ flex:1, fontSize: RFValue(FONTS.h5), color:this.state.dark_mode? "#fff" : COLOR.black, fontWeight:"bold" }}>Dark Mode</Text>
                                <FontAwesome5  name={this.state.icon_dark ? "toggle-on" : "toggle-off"} 
                                size={RFValue(ICONS.lgIcon)} style={{ color:this.state.dark_mode ? COLOR.PrimaryColor : null}}/>
                            </TouchableOpacity>
                            
                            {/* Log Out */}
                            <TouchableOpacity 
                                onPress={() => {
                                    this.props.navigation.navigate("SplashScreen")
                                }}
                                style={[StylesAccount.accountOptions_container,{backgroundColor:this.state.dark_mode? COLOR.gray : '#ddd'}]}
                            >

                                <FontAwesome name="sign-out" size={RFValue(ICONS.mdIcon)} style={StylesAccount.accountOptions_icons}/>
                                <Text style={{ flex:1, fontSize: RFValue(FONTS.h5), color:this.state.dark_mode? "#fff" : COLOR.black, fontWeight:"bold" }}>Log Out</Text>
                                <FontAwesome5 name="chevron-right" size={RFValue(ICONS.smIcon)} color={this.state.dark_mode? COLOR.White : null}/>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>

                </View >
    
    
            </>
        )
    }















    // Old Design:
    // render() {
    //     return (
    //         <>

    //             <View style={[StylesAccount.view_containr_profile,{backgroundColor: this.state.dark_mode ? COLOR.dark_gray :COLOR.White }]}>

              

    //                     <Header/>

    //                     <View style={[StylesAccount.view_profil_imge,]}>

    //                         <TouchableOpacity style={[StylesAccount.storyImageContainer,{borderColor:this.state.dark_mode ? "#fff" :"#373737",borderWidth:1.5}]}
    //                          onPress={() => {
    //                             this.selectFromGallery()
    //                             //async
    //                         }}
    //                         ><Image source={{ uri: this.state.photo_uri }}
    //                                 style={StylesAccount.style_img_profil}/>


    //                         </TouchableOpacity>

    //                     </View>

                        
    //                         <Text style={[StylesAccount.text_header, 
    //                             { color: this.state.dark_mode ? "#fff" : COLOR.dark_gray }]}>
    //                                 {this.state.name }</Text>

                       



    //                     <View style={StylesAccount.view_follow_profile}>
    //                         <Text style={{ fontSize: RFValue(18), color: this.state.dark_mode ? "#fff" : COLOR.dark_gray,fontFamily:'Gill Sans' }}>Following</Text>
    //                         <Text style={{ fontSize: RFValue(18), color: this.state.dark_mode ? "#fff" : COLOR.dark_gray, }}>450</Text>


    //                     </View>



    //                 <View style={{
    //                    // backgroundColor: "#0f0",
    //                      height: RFValue(260),
    //                      justifyContent:'center',
    //                       marginTop:RFValue(40)
    //                 }}>
    //                     <TouchableOpacity
    //                         onPress={() => {
    //                             // this.setState({ Visable_modal1: true, })
    //                             this.props.navigation.navigate("EditPage")
    //                         }}
    //                         style={[StylesAccount.view_contanir_edit]}>
    //                         <FontAwesome5 name="edit" size={RFValue(ICONS.mdIcon)} 
    //                         style={{ color:COLOR.PrimaryColor,paddingHorizontal:RFValue(10) }}/>
    //                         <Text style={{ flex:1,fontSize: RFValue(FONTS.h4), 
    //                             color: this.state.dark_mode ? "#fff" : "#000",fontWeight:"bold" }}>Edit</Text>
    //                         <FontAwesome5 name="chevron-right" 
    //                         size={RFValue(ICONS.mdIcon)} 
    //                         style={{ color: this.state.dark_mode ? "#fff" :COLOR.PrimaryColor,paddingRight:RFValue(10)}}/>
    //                     </TouchableOpacity>

    //                     <TouchableOpacity
    //                      onPress={() => {
    //                         this.ghange_icon_mode()
    //                         this.change_dark_mode()
    //                     }}
    //                         style={[StylesAccount.view_contanir_edit]}>
    //                         <Ionicons name="moon-sharp" size={RFValue(ICONS.mdIcon)} 
    //                         style={{ color:COLOR.PrimaryColor,paddingHorizontal:RFValue(10) }}/>
    //                         <Text style={{ flex:1,fontSize: RFValue(FONTS.h4), 
    //                             color: this.state.dark_mode ? "#fff" : "#000",fontWeight:"bold" }}>DarkMode</Text>
    //                         <TouchableOpacity
    //                         onPress={() => {
    //                             this.ghange_icon_mode()
    //                             this.change_dark_mode()
    //                                        }}
    //                         >
    //                         <MaterialCommunityIcons  name={this.state.icon_dark ? "toggle-switch" : "toggle-switch-off"} 
    //                         size={RFValue(35)} style={{ color:  this.state.dark_mode ? COLOR.PrimaryColor : "#000",
    //                         paddingRight:RFValue(10)}}/>
                            
    //                         </TouchableOpacity>
                           
    //                     </TouchableOpacity>


    //                     <TouchableOpacity
    //                         onPress={() => {
    //                             this.props.navigation.navigate("SavedPage")
    //                         }}
    //                         style={[StylesAccount.view_contanir_edit]}>
    //                         <FontAwesome name="bookmark"  size={RFValue(ICONS.mdIcon)} 
    //                         style={{ color:COLOR.PrimaryColor,paddingHorizontal:RFValue(13) }}/>

    //                         <Text style={{ flex:1,fontSize: RFValue(FONTS.h4), 
    //                             color: this.state.dark_mode ? "#fff" : "#000",fontWeight:"bold" }}>Saved</Text>
    //                         <FontAwesome5 name="chevron-right" 
    //                         size={RFValue(ICONS.mdIcon)} 
    //                         style={{ color: this.state.dark_mode ? "#fff" :COLOR.PrimaryColor,paddingRight:RFValue(10)}}/>
    //                     </TouchableOpacity>

    //                     <TouchableOpacity
    //                         onPress={() => {
    //                             this.props.navigation.navigate("SplashScreen")
    //                         }}
    //                         style={[StylesAccount.view_contanir_edit]}>
    //                         <FontAwesome name="sign-out"  size={RFValue(ICONS.mdIcon)} 
    //                         style={{ color:COLOR.PrimaryColor,paddingHorizontal:RFValue(13) }}/>

    //                         <Text style={{ flex:1,fontSize: RFValue(FONTS.h4), 
    //                             color: this.state.dark_mode ? "#fff" : "#000",fontWeight:"bold" }}>Sign Out</Text>
    //                             <TouchableOpacity
    //                               onPress={() => {
    //                                 this.props.navigation.navigate("SplashScreen")
    //                             }}
    //                             >
    //                             <FontAwesome5 name="chevron-right" size={RFValue(ICONS.mdIcon)} 
    //                                 style={{ color: this.state.dark_mode ? "#fff" :COLOR.PrimaryColor,paddingRight:RFValue(10)}}/> 
    //                             </TouchableOpacity>
                            
        
    //                     </TouchableOpacity>
                    


                    



    //                     {/* <TouchableOpacity style={StylesAccount.view_contanir_edit}>

    //                         <View style={{
    //                             width: "10%",
    //                             // backgroundColor: "#fff", 
    //                             alignItems: "center"
    //                         }}>
    //                             <TouchableOpacity>
    //                                 <Octicons name="sign-out" size={RFValue(20)} style={{ color: COLOR.PrimaryColor }}></Octicons>
    //                             </TouchableOpacity>
    //                         </View>

    //                         <View style={{
    //                             width: "80%",
    //                             //  backgroundColor: "#0ff" 
    //                         }}>

    //                             <Text style={{ fontSize: RFValue(20), color: this.state.dark_mode ? "#fff" : "#000", fontWeight: "bold" }}>Sign Out</Text>
    //                         </View>
    //                         <View style={{
    //                             width: "10%",
    //                             // backgroundColor: "#fff", 
    //                             alignItems: "center"
    //                         }}>
    //                             <TouchableOpacity>
    //                                 <FontAwesome5 name="chevron-right" size={RFValue(20)} style={{ color: this.state.dark_mode ? "#fff" : COLOR.PrimaryColor }}></FontAwesome5>
    //                             </TouchableOpacity>
    //                         </View>
    //                     </TouchableOpacity>  */}






    //                     {/* <Modal
    //                         visible={this.state.Visable_modal1}

    //                         animationType="fade"
    //                         onRequestClose={() => {
    //                             this.setState({ Visable_modal1: false, })

    //                         }}
    //                     >

    //                         <View style={[StylesAccount.container, { backgroundColor: this.state.dark_mode ? COLOR.dark_gray : "#fff" }]}>

    //                             <View style={[StylesAccount.header,]}>

    //                                 <TouchableOpacity

    //                                     onPress={() => {
    //                                         this.setState({ Visable_modal1: false })
    //                                     }}
    //                                 >
    //                                     <FontAwesome5 name="chevron-left" size={ICONS.xlIcon} style={{ color: "#000" }} />
    //                                 </TouchableOpacity>


    //                             </View>




    //                             <View style={[StylesAccount.view_profil_imge, { height: 200 }]}>

    //                                 <View style={[StylesAccount.storyImageContainer, { width: RFValue(100), height: RFValue(100), borderRadius: RFValue(100 / 2), }]}>

    //                                     {/* <TouchableOpacity style={{ width: "95%", height: "95%", backgroundColor: "#0ff", justifyContent: "center", alignItems: "center", borderRadius: 100 }}> */}

    //                                     {/* <Image

    //                                         source={{ uri: this.state.photo_uri }}
    //                                         style={StylesAccount.style_img_profil}

    //                                     ></Image> */}

    //                                     {/* </TouchableOpacity> */}



    //                                 {/* </View>

    //                                 <TouchableOpacity

    //                                     onPress={() => {
    //                                         this.selectFromGallery()
    //                                     }}

    //                                     style={StylesAccount.bottom_text_input}>

    //                                     <Text style={{ fontSize: RFValue(20), fontWeight: "bold", color: "#fff" }}>Change Photo</Text>

    //                                 </TouchableOpacity>



    //                             </View>




    //                             <View style={StylesAccount.view_contanir_text_input}>
    //                                 <TextInput
    //                                     placeholder="Enter New Name "
    //                                     placeholderTextColor={ this.state.dark_mode ? "#fff" :"#000" }


    //                                     value={this.state.inpu_name}
    //                                     onChangeText={(value) => {
    //                                         this.setState({ inpu_name: value })
    //                                     }}

    //                                     style={[StylesAccount.text_input,{backgroundColor:this.state.dark_mode ? COLOR.dark_gray  :"#fff", borderColor: this.state.dark_mode ? "#fff" :"#000" ,color:  this.state.dark_mode ? "#fff" :"#000",}]}


    //                                 ></TextInput>

                                   

    //                                 <TouchableOpacity

    //                                     onPress={() => {
    //                                         this.set_name()
                                           

    //                                     }}

    //                                     style={StylesAccount.bottom_text_input}>

    //                                     <Text style={{ fontSize: RFValue(20), fontWeight: "bold", color: "#fff" }}>Update</Text>

    //                                 </TouchableOpacity>

    //                             </View> */}

    //                         {/* </View>


    //                     </Modal >  */}








    //                     {/* <Modal
    //                         visible={this.state.Visable_modal2}

    //                         animationType="fade"
    //                         onRequestClose={() => {
    //                             this.setState({ Visable_modal2: false, })

    //                         }}
    //                     >

    //                         <View style={{ backgroundColor: this.state.dark_mode ? COLOR.dark_gray : "#fff", width: "100%", height: "100%" ,}}>

    //                             <View style={[StylesAccount.header,]}>

    //                                 <TouchableOpacity

    //                                     onPress={() => {
    //                                         this.setState({ Visable_modal2: false })
    //                                     }}
    //                                 >
    //                                     <FontAwesome5 name="chevron-left" size={ICONS.xlIcon} style={{ color: "#000" }} />
    //                                 </TouchableOpacity>


    //                             </View>



    //                             <Text style={{fontSize:30,color: this.state.dark_mode ? "#fff" :"#000",textAlign:"center"}}>Saved</Text>

    //                         </View>


    //                     </Modal > */}




    //                 </View>





    //             </View >


    //         </>
    //     )
    // }
}























































































// Elwish's Code:

// import React from "react";
// import { Text, View } from "react-native"
// import { Header } from "../../components";
// export function Account(props) {
//     return (
//         <>
//             <View style={{ flex: 1, backgroundColor: '#ddd', alignItems: 'center' }}>
//                 <Header />
//                 <Text style={{ fontSize: 27, fontWeight: 'bold' }}>Account Page</Text>
//             </View>
//         </>
//     )
// }
// import React from "react"
// import {
//     Text,
//     View,
//     StylesAccountheet,
//     ScrollView,
//     Image,
//     TouchableOpacity,
//     FlatList,
//     Modal,
//     TextInput,
//     AsyncStorage
// } from "react-native";
// // import { StylesAccount } from "./StylesAccount";
// import { StylesAccount } from "./styles";
// import { COLOR, FONTS, ICONS, images } from "../../constants";
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Octicons from 'react-native-vector-icons/Octicons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Feather from "react-native-vector-icons/Feather"
// import { RFValue } from "react-native-responsive-fontsize";
// import { Header } from "../../components";
// import EditPage from "./EditPage";
// // import {useNavigation} from "@react-navigation/native"

// export default class Account extends React.Component {
    
//     constructor() {
//         super()
//         // const {navigation} =props
//         this.state = {

//             icon_dark: false,
//             dark_mode: false,
//             name: "Elwishy",
//             inpu_name: "",
//             Visable_modal1: false,
//             Visable_modal2: false,

//         }
//     }

//     set_name() {
//         let user_name = this.state.inpu_name

//         this.setState({ name: user_name, Visable_modal1: false, inpu_name: "", })
//     }

//     ghange_icon_mode() {
//         let icon_dark_mode = this.state.icon_dark
//         this.setState({ icon_dark: !icon_dark_mode })
//     }

//     change_dark_mode() {
//         let DarkMode = this.state.dark_mode
//         this.setState({ dark_mode: !DarkMode })
//         this.store_dark(!DarkMode)

//     }

//     componentDidMount() {
//         this.get_dark()
//     }

//     async store_dark(value) {
//         await AsyncStorage.setItem("dark_mode", JSON.stringify(value))
//     }

//     async get_dark() {
//         let mood = await AsyncStorage.getItem("dark_mode")

//         if (mood == null || mood == "") {
//             mood = "false"
//         }

//         mood = JSON.parse(mood)
//         this.setState({ dark_mode: mood })
//     }


//     // renderProductsList() {
//     //     return this.state.list.map((item, index) => {
//     //         return (

//     //             );
//     //     });
//     // }


//     render() {
//         return (
//             <>

//                 <View style={[StylesAccount.view_containr_profile, { backgroundColor: this.state.dark_mode ? "#000" : "#fff" }]}>

//                     <View style={{
//                         // backgroundColor: "#000",
//                         width: "100%", height: "40%"
//                     }}>

//                         {/* <View style={StylesAccount.header}>

//                             <TouchableOpacity>
//                                 <Icon name="chevron-left" size={ICONS.xlIcon} style={{ color: "#000" }} />
//                             </TouchableOpacity>

//                             <Text style={[StylesAccount.text_header, { color: "#000" }]}>Profile</Text>

//                             <TouchableOpacity>
//                                 <Feather name="bell" size={ICONS.xlIcon} style={{ color: "#000" }}></Feather>
//                             </TouchableOpacity>
//                         </View> */}
//                         <Header />

//                         <View style={StylesAccount.view_profil_imge}>
//                             <Image source={images.story1}
//                                 style={{ width: 70, height: 70, borderRadius: 35 }} />

//                         </View>

//                         <View style={StylesAccount.view_text_name_profile}>
//                             <Text style={[StylesAccount.text_header, { color: this.state.dark_mode ? "#fff" : "#000" }]}>{this.state.name}</Text>

//                         </View>



//                         <View style={StylesAccount.view_follow_profile}>
//                             <Text style={{ fontSize: RFValue(18), color: this.state.dark_mode ? "#fff" : "#000", fontWeight: "500" }}>Following</Text>
//                             <Text style={{ fontSize: RFValue(18), color: this.state.dark_mode ? "#fff" : "#000", fontWeight: "500", }}>450</Text>
//                         </View>

//                         {/* <View style={{
//                             width: "100%", height: "15%",
//                             //  backgroundColor: "#f00",
//                             justifyContent: "center", alignItems: "center", flexDirection: "column"
//                         }}>


//                         </View> */}

//                     </View>




//                     <View style={{
//                         // backgroundColor: "#0f0",
//                         width: "100%", height: "60%"
//                     }}>
//                         <TouchableOpacity style={StylesAccount.view_contanir_edit}
//                             onPress={() => {
//                                 // this.setState({ Visable_modal1: true, })
//                               this.props.navigation.navigate("EditPage")
//                             }}
//                         >

//                             <View style={{
//                                 width: "10%",
//                                 //  backgroundColor: "#fff", 
//                                 alignItems: "center"
//                             }}>
//                                 <TouchableOpacity>
//                                     <Icon name="edit" size={RFValue(20)} style={{ color: "#e393a8", }}></Icon>
//                                 </TouchableOpacity>
//                             </View>

//                             <View style={{
//                                 width: "80%",
//                                 //  backgroundColor: "#0ff" 
//                             }}>

//                                 <Text style={{ fontSize: RFValue(20), color: this.state.dark_mode ? "#fff" : "#000", fontWeight: "bold" }}>Edit</Text>
//                             </View>
//                             <View style={{
//                                 width: "10%",
//                                 //  backgroundColor: "#fff", 
//                                 alignItems: "center"
//                             }}>
//                                 <TouchableOpacity

//                                     onPress={() => {
//                                         this.setState({ Visable_modal1: true, })
//                                     }}

//                                 >
//                                     <Icon name="chevron-right" size={RFValue(20)} style={{ color: this.state.dark_mode ? "#fff" : "#000" }}></Icon>
//                                 </TouchableOpacity>
//                             </View>
//                         </TouchableOpacity>



//                         <View style={StylesAccount.view_contanir_edit}>

//                             <View style={{
//                                 width: "10%",
//                                 // backgroundColor: "#fff",
//                                 alignItems: "center"
//                             }}>
//                                 <TouchableOpacity>
//                                     <Ionicons name="moon-sharp" size={RFValue(20)} style={{ color: "#e393a8", }}></Ionicons>
//                                 </TouchableOpacity>
//                             </View>

//                             <View style={{
//                                 width: "78%",
//                                 // backgroundColor: "#0ff"
//                             }}>

//                                 <Text style={{ fontSize: RFValue(20), color: this.state.dark_mode ? "#fff" : "#000", fontWeight: "bold" }}>Dark Mood</Text>
//                             </View>
//                             <View style={{
//                                 width: "10%",
//                                 //  backgroundColor: "#fff", 
//                                 alignItems: "center"
//                             }}>
//                                 <TouchableOpacity

//                                     onPress={() => {
//                                         this.ghange_icon_mode()
//                                         this.change_dark_mode()
//                                     }}

//                                 >
//                                     <MaterialCommunityIcons name={this.state.icon_dark ? "toggle-switch" : "toggle-switch-off"} size={RFValue(35)} style={{ color: this.state.dark_mode ? "#0f0" : "#000" }}></MaterialCommunityIcons>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>


//                         <View style={StylesAccount.view_contanir_edit}>

//                             <View style={{
//                                 width: "10%",
//                                 // backgroundColor: "#fff",
//                                 alignItems: "center"
//                             }}>
//                                 <TouchableOpacity>
//                                     <Ionicons name="help-circle" size={RFValue(20)} style={{ color: "#e393a8", }}></Ionicons>
//                                 </TouchableOpacity>
//                             </View>

//                             <View style={{
//                                 width: "80%",
//                                 // backgroundColor: "#0ff"
//                             }}>

//                                 <Text style={{ fontSize: RFValue(20), color: this.state.dark_mode ? "#fff" : "#000", fontWeight: "bold" }}>Help</Text>
//                             </View>
//                             <View style={{
//                                 width: "10%",
//                                 //  backgroundColor: "#fff",
//                                 alignItems: "center"
//                             }}>
//                                 <TouchableOpacity>
//                                     <Icon name="chevron-right" size={RFValue(20)} style={{ color: this.state.dark_mode ? "#fff" : "#000", }}></Icon>
//                                 </TouchableOpacity>
//                             </View>
//                         </View>

//                         {/* Saved */}

//                         <TouchableOpacity style={StylesAccount.view_contanir_edit}
//                         onPress={()=>{
//                             this.props.navigation.navigate("SavedPage")
//                         }}
//                         >

//                             <View style={{
//                                 width: "10%",
//                                 //  backgroundColor: "#fff", 
//                                 alignItems: "center"
//                             }}>
//                                 <TouchableOpacity>
//                                     <MaterialCommunityIcons name="content-save-move" size={RFValue(20)} style={{ color: "#e393a8", }}></MaterialCommunityIcons>
//                                 </TouchableOpacity>
//                             </View>

//                             <View style={{
//                                 width: "80%",
//                                 //  backgroundColor: "#0ff"
//                             }}>

//                                 <Text style={{ fontSize: RFValue(20), color: this.state.dark_mode ? "#fff" : "#000", fontWeight: "bold" }}>Saved</Text>
//                             </View>
//                             <View style={{
//                                 width: "10%",
//                                 // backgroundColor: "#fff",
//                                 alignItems: "center"
//                             }}>
//                                 <TouchableOpacity

//                                     onPress={() => {
//                                         this.setState({ Visable_modal2: true, })
//                                     }}

//                                 >
//                                     <Icon name="chevron-right" size={RFValue(20)} style={{ color: this.state.dark_mode ? "#fff" : "#000", }}></Icon>
//                                 </TouchableOpacity>
//                             </View>
//                         </TouchableOpacity>

//                         {/* SignOut */}

//                         <TouchableOpacity style={StylesAccount.view_contanir_edit}
//                         onPress={()=>{
//                           this.props.navigation.navigate("SplashScreen")  
//                         }}
//                         >

//                             <View style={{
//                                 width: "10%",
//                                 // backgroundColor: "#fff", 
//                                 alignItems: "center"
//                             }}>
//                                 <TouchableOpacity>
//                                     <Octicons name="sign-out" size={RFValue(20)} style={{ color: "#e393a8", }}></Octicons>
//                                 </TouchableOpacity>
//                             </View>

//                             <View style={{
//                                 width: "80%",
//                                 //  backgroundColor: "#0ff" 
//                             }}>

//                                 <Text style={{ fontSize: RFValue(20), color: this.state.dark_mode ? "#fff" : "#000", fontWeight: "bold" }}>Sign Out</Text>
//                             </View>
//                             <View style={{
//                                 width: "10%",
//                                 // backgroundColor: "#fff", 
//                                 alignItems: "center"
//                             }}>
//                                 <TouchableOpacity>
//                                     <Icon name="chevron-right" size={RFValue(20)} style={{ color: this.state.dark_mode ? "#fff" : "#000", }}></Icon>
//                                 </TouchableOpacity>
//                             </View>
//                         </TouchableOpacity>






//                         {/* <Modal
//                             visible={this.state.Visable_modal1}

//                             animationType="fade"
//                             onRequestClose={() => {
//                                 this.setState({ Visable_modal1: false, })

//                             }}
//                         >

//                             <View style={[StylesAccount.container, { backgroundColor: this.state.dark_mode ? "#000" : "#fff" }]}>

//                                 <View style={[StylesAccount.header,]}>

//                                     <TouchableOpacity

//                                         onPress={() => {
//                                             this.setState({ Visable_modal1: false })
//                                         }}
//                                     >
//                                         <Icon name="chevron-left" size={ICONS.xlIcon} style={{ color: "#000" }} />
//                                     </TouchableOpacity>


//                                 </View>


//                                 <View style={StylesAccount.view_contanir_text_input}>
//                                     <TextInput
//                                         placeholder="Enter New Name "
//                                         placeholderTextColor={"#000"}


//                                         value={this.state.inpu_name}
//                                         onChangeText={(value) => {
//                                             this.setState({ inpu_name: value })
//                                         }}

//                                         style={StylesAccount.text_input}


//                                     ></TextInput>

//                                     <TouchableOpacity

//                                         onPress={() => {
//                                             this.set_name()
//                                         }}

//                                         style={StylesAccount.bottom_text_input}>

//                                         <Text style={{ fontSize: RFValue(20), fontWeight: "bold" }}>update</Text>

//                                     </TouchableOpacity>

//                                 </View>

//                             </View>


//                         </Modal > */}

//                         {/* <EditPage /> */}






//                         <Modal
//                             visible={this.state.Visable_modal2}

//                             animationType="fade"
//                             onRequestClose={() => {
//                                 this.setState({ Visable_modal2: false, })

//                             }}
//                         >

//                             <View style={{ backgroundColor: this.state.dark_mode ? "#000" : "#fff", width: "100%", height: "100%" }}>

//                                 <View style={[StylesAccount.header,]}>

//                                     <TouchableOpacity

//                                         onPress={() => {
//                                             this.setState({ Visable_modal2: false })
//                                         }}
//                                     >
//                                         <Icon name="chevron-left" size={ICONS.xlIcon} style={{ color: "#000" }} />
//                                     </TouchableOpacity>


//                                 </View>

//                             </View>


//                         </Modal >




//                     </View>





//                 </View >


//             </>
//         )
//     }
// }
