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
import { images, FONTS, COLOR, ICONS } from "../../constants";
import { BackArrowHeader } from '../../components';
import Icon from "react-native-vector-icons/FontAwesome";










export default class Followers extends React.Component {


    render() {
        return (
            <>
                <View style={StylesAccount.container}>
                    <View style={StylesAccount.followersHeaderView}>
                        <BackArrowHeader navigation={this.props.navigation} />
                        <Text style={StylesAccount.followersHeaderText} >Followers</Text>

                    </View>

                    <View style={StylesAccount.searchboxContainer}>
                        <View style={StylesAccount.searchbox}>

                            <Icon name="search" size={ICONS.mdIcon} style={StylesAccount.searchIcon}  ></Icon>
                            <TextInput style={StylesAccount.searchInput}
                                placeholder={"Search"}
                            ></TextInput>
                        </View>
                    </View>

                    <ScrollView>
                        <View style={StylesAccount.viewAccContainer}>

                            <View style={StylesAccount.viewInfoContainer}>
                                <Image source={images.story1} style={StylesAccount.profileImage}></Image>

                                <View style={StylesAccount.ViewNameContainer}>
                                    <Text style={StylesAccount.nameText}>Alaa Mohamed</Text>
                                    <Text style={{ fontSize: FONTS.h6 }}>Alaa88</Text>
                                </View>
                            </View>


                            <TouchableOpacity>
                                <View style={StylesAccount.viewFollow}>
                                    <Text style={{ fontWeight: "bold", color: COLOR.White }}>Follow</Text>
                                </View>
                            </TouchableOpacity>

                        </View>






                        <View style={StylesAccount.viewAccContainer}>

                            <View style={StylesAccount.viewInfoContainer}>
                                <Image source={images.story2} style={StylesAccount.profileImage}></Image>

                                <View style={StylesAccount.ViewNameContainer}>
                                    <Text style={StylesAccount.nameText}>Salma Mohsen</Text>
                                    <Text style={{ fontSize: FONTS.h6 }}>Slama61</Text>
                                </View>
                            </View>


                            <TouchableOpacity>
                                <View style={StylesAccount.viewFollow}>
                                    <Text style={{ fontWeight: "bold", color: COLOR.White }}>Follow</Text>
                                </View>
                            </TouchableOpacity>

                        </View>









                        <View style={StylesAccount.viewAccContainer}>

                            <View style={StylesAccount.viewInfoContainer}>
                                <Image source={images.story3} style={StylesAccount.profileImage}></Image>

                                <View style={StylesAccount.ViewNameContainer}>
                                    <Text style={StylesAccount.nameText}>Rana Khaled</Text>
                                    <Text style={{ fontSize: FONTS.h6 }}>ٌRana9</Text>
                                </View>
                            </View>


                            <TouchableOpacity>
                                <View style={StylesAccount.viewFollow}>
                                    <Text style={{ fontWeight: "bold", color: COLOR.White }}>Follow</Text>
                                </View>
                            </TouchableOpacity>

                        </View>






                        <View style={StylesAccount.viewAccContainer}>

                            <View style={StylesAccount.viewInfoContainer}>
                                <Image source={images.story4} style={StylesAccount.profileImage}></Image>

                                <View style={StylesAccount.ViewNameContainer}>
                                    <Text style={StylesAccount.nameText}>Doha Abdulla</Text>
                                    <Text style={{ fontSize: FONTS.h6 }}>Duha60</Text>
                                </View>
                            </View>


                            <TouchableOpacity>
                                <View style={StylesAccount.viewFollow}>
                                    <Text style={{ fontWeight: "bold", color: COLOR.White }}>Follow</Text>
                                </View>
                            </TouchableOpacity>

                        </View>






                        <View style={StylesAccount.viewAccContainer}>

                            <View style={StylesAccount.viewInfoContainer}>
                                <Image source={images.story5} style={StylesAccount.profileImage}></Image>

                                <View style={StylesAccount.ViewNameContainer}>
                                    <Text style={StylesAccount.nameText}>Dalia Mohsen</Text>
                                    <Text style={{ fontSize: FONTS.h6 }}>Daliaaa</Text>
                                </View>
                            </View>


                            <TouchableOpacity>
                                <View style={StylesAccount.viewFollow}>
                                    <Text style={{ fontWeight: "bold", color: COLOR.White }}>Follow</Text>
                                </View>
                            </TouchableOpacity>

                        </View>






                        <View style={StylesAccount.viewAccContainer}>

                            <View style={StylesAccount.viewInfoContainer}>
                                <Image source={images.story6} style={StylesAccount.profileImage}></Image>

                                <View style={StylesAccount.ViewNameContainer}>
                                    <Text style={StylesAccount.nameText}>Rana Khaled</Text>
                                    <Text style={{ fontSize: FONTS.h6 }}>Rana_3</Text>
                                </View>
                            </View>


                            <TouchableOpacity>
                                <View style={StylesAccount.viewFollow}>
                                    <Text style={{ fontWeight: "bold", color: COLOR.White }}>Follow</Text>
                                </View>
                            </TouchableOpacity>

                        </View>






                        <View style={StylesAccount.viewAccContainer}>

                            <View style={StylesAccount.viewInfoContainer}>
                                <Image source={images.story7} style={StylesAccount.profileImage}></Image>

                                <View style={StylesAccount.ViewNameContainer}>
                                    <Text style={StylesAccount.nameText}>Alaa</Text>
                                    <Text style={{ fontSize: FONTS.h6 }}>Alaa_0</Text>
                                </View>
                            </View>


                            <TouchableOpacity>
                                <View style={StylesAccount.viewFollow}>
                                    <Text style={{ fontWeight: "bold", color: COLOR.White }}>Follow</Text>
                                </View>
                            </TouchableOpacity>

                        </View>






                        <View style={StylesAccount.viewAccContainer}>

                            <View style={StylesAccount.viewInfoContainer}>
                                <Image source={images.story8} style={StylesAccount.profileImage}></Image>

                                <View style={StylesAccount.ViewNameContainer}>
                                    <Text style={StylesAccount.nameText}>Aya Mohamed</Text>
                                    <Text style={{ fontSize: FONTS.h6 }}>Aya44</Text>
                                </View>
                            </View>


                            <TouchableOpacity>
                                <View style={StylesAccount.viewFollow}>
                                    <Text style={{ fontWeight: "bold", color: COLOR.White }}>Follow</Text>
                                </View>
                            </TouchableOpacity>

                        </View>






                        <View style={StylesAccount.viewAccContainer}>

                            <View style={StylesAccount.viewInfoContainer}>
                                <Image source={images.story9} style={StylesAccount.profileImage}></Image>

                                <View style={StylesAccount.ViewNameContainer}>
                                    <Text style={StylesAccount.nameText}>Doha Abdulla</Text>
                                    <Text style={{ fontSize: FONTS.h6 }}>Duha80</Text>
                                </View>
                            </View>


                            <TouchableOpacity>
                                <View style={StylesAccount.viewFollow}>
                                    <Text style={{ fontWeight: "bold", color: COLOR.White }}>Follow</Text>
                                </View>
                            </TouchableOpacity>

                        </View>






                        <View style={StylesAccount.viewAccContainer}>

                            <View style={StylesAccount.viewInfoContainer}>
                                <Image source={images.story10} style={StylesAccount.profileImage}></Image>

                                <View style={StylesAccount.ViewNameContainer}>
                                    <Text style={StylesAccount.nameText}>Alaa</Text>
                                    <Text style={{ fontSize: FONTS.h6 }}>Alaa_320</Text>
                                </View>
                            </View>


                            <TouchableOpacity>
                                <View style={StylesAccount.viewFollow}>
                                    <Text style={{ fontWeight: "bold", color: COLOR.White }}>Follow</Text>
                                </View>
                            </TouchableOpacity>

                        </View>





                        <View style={StylesAccount.viewAccContainer}>

                            <View style={StylesAccount.viewInfoContainer}>
                                <Image source={images.story11} style={StylesAccount.profileImage}></Image>

                                <View style={StylesAccount.ViewNameContainer}>
                                    <Text style={StylesAccount.nameText}>Dalia Mohsen</Text>
                                    <Text style={{ fontSize: FONTS.h6 }}>Dalia_90</Text>
                                </View>
                            </View>


                            <TouchableOpacity>
                                <View style={StylesAccount.viewFollow}>
                                    <Text style={{ fontWeight: "bold", color: COLOR.White }}>Follow</Text>
                                </View>
                            </TouchableOpacity>

                        </View>





                        <View style={StylesAccount.viewAccContainer}>

                            <View style={StylesAccount.viewInfoContainer}>
                                <Image source={images.story12} style={StylesAccount.profileImage}></Image>

                                <View style={StylesAccount.ViewNameContainer}>
                                    <Text style={StylesAccount.nameText}>Asmaa</Text>
                                    <Text style={{ fontSize: FONTS.h6 }}>Asmaa79</Text>
                                </View>
                            </View>


                            <TouchableOpacity>
                                <View style={StylesAccount.viewFollow}>
                                    <Text style={{ fontWeight: "bold", color: COLOR.White }}>Follow</Text>
                                </View>
                            </TouchableOpacity>

                        </View>





                        <View style={StylesAccount.viewAccContainer}>

                            <View style={StylesAccount.viewInfoContainer}>
                                <Image source={images.story13} style={StylesAccount.profileImage}></Image>

                                <View style={StylesAccount.ViewNameContainer}>
                                    <Text style={StylesAccount.nameText}>Aya Mohamed</Text>
                                    <Text style={{ fontSize: FONTS.h6 }}>Aya_64</Text>
                                </View>
                            </View>


                            <TouchableOpacity>
                                <View style={StylesAccount.viewFollow}>
                                    <Text style={{ fontWeight: "bold", color: COLOR.White }}>Follow</Text>
                                </View>
                            </TouchableOpacity>

                        </View>







                        <View style={StylesAccount.viewAccContainer}>

                            <View style={StylesAccount.viewInfoContainer}>
                                <Image source={images.story14} style={StylesAccount.profileImage}></Image>

                                <View style={StylesAccount.ViewNameContainer}>
                                    <Text style={StylesAccount.nameText}>Rana Khaled</Text>
                                    <Text style={{ fontSize: FONTS.h6 }}>Rana_Khaled</Text>
                                </View>
                            </View>


                            <TouchableOpacity>
                                <View style={StylesAccount.viewFollow}>
                                    <Text style={{ fontWeight: "bold", color: COLOR.White }}>Follow</Text>
                                </View>
                            </TouchableOpacity>

                        </View>





                        <View style={StylesAccount.viewAccContainer}>

                            <View style={StylesAccount.viewInfoContainer}>
                                <Image source={images.story15} style={StylesAccount.profileImage}></Image>

                                <View style={StylesAccount.ViewNameContainer}>
                                    <Text style={StylesAccount.nameText}>Doha Abdulla</Text>
                                    <Text style={{ fontSize: FONTS.h6 }}>Duha80</Text>
                                </View>
                            </View>


                            <TouchableOpacity>
                                <View style={StylesAccount.viewFollow}>
                                    <Text style={{ fontWeight: "bold", color: COLOR.White }}>Follow</Text>
                                </View>
                            </TouchableOpacity>

                        </View>




                        <View style={StylesAccount.viewAccContainer}>

                            <View style={StylesAccount.viewInfoContainer}>
                                <Image source={images.story16} style={StylesAccount.profileImage}></Image>

                                <View style={StylesAccount.ViewNameContainer}>
                                    <Text style={StylesAccount.nameText}>Rana Khaled</Text>
                                    <Text style={{ fontSize: FONTS.h6 }}>Rana_Khaled0</Text>
                                </View>
                            </View>


                            <TouchableOpacity>
                                <View style={StylesAccount.viewFollow}>
                                    <Text style={{ fontWeight: "bold", color: COLOR.White }}>Follow</Text>
                                </View>
                            </TouchableOpacity>

                        </View>





                        <View style={StylesAccount.viewAccContainer}>

                            <View style={StylesAccount.viewInfoContainer}>
                                <Image source={images.story17} style={StylesAccount.profileImage}></Image>

                                <View style={StylesAccount.ViewNameContainer}>
                                    <Text style={StylesAccount.nameText}>Aya Mohamed</Text>
                                    <Text style={{ fontSize: FONTS.h6 }}>Aya_Mohamed</Text>
                                </View>
                            </View>


                            <TouchableOpacity>
                                <View style={StylesAccount.viewFollow}>
                                    <Text style={{ fontWeight: "bold", color: COLOR.White }}>Follow</Text>
                                </View>
                            </TouchableOpacity>

                        </View>




                    </ScrollView>




                </View>
            </>
        );
    }
}
