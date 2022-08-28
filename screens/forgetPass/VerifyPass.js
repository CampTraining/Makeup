


/* IMPORT */
import * as React from "react"
import { Text, Stylesheet, View, Image, ScrollView, TextInput, TouchableOpacity, ImageBackground } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5"
import AntDesign from "react-native-vector-icons/AntDesign"

import { RFValue } from "react-native-responsive-fontsize"
import { StylesForgetPass } from "./styles"
import { COLOR, FONTS, ICONS } from "../../constants"


/* ******************************************************************************************** */

/* DESINE OF COMPONANTS */

export default class VerifyPass extends React.Component {

  constructor() {
    super()

    this.state = {
      PhoneNumber: "",
      // country: "",



    }

  }


  clearPhoneNumber() {
    this.setState({ PhoneNumber: "" })

    // alert("hi")
  }

  render() {
    return (
      <>



        <View style={[StylesForgetPass.arrowContainer,
        { backgroundColor: COLOR.White }]}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("ForgetPass")
            }}
          >
            <Icon name="arrow-left" color={COLOR.black} size={ICONS.xlIcon} style={{ marginRight: RFValue(15) }}></Icon>
          </TouchableOpacity>
        </View>

        <ScrollView style={{ backgroundColor: COLOR.White }} >


          <View style={[StylesForgetPass.VerficationContainer]}>


            <Text style={[StylesForgetPass.VerficationText]}>Verify your Phone Number</Text>

            <Text style={StylesForgetPass.VerficationCaption}>We will send an SMS with a
              code to number +20{this.state.PhoneNumber}</Text>
          </View>


          <View style={[StylesForgetPass.inputContainer]}>


            <Text style={StylesForgetPass.countryCodeText}>+20</Text>
            <TextInput
              value={this.state.PhoneNumber}
              onChangeText={(value) => {
                this.setState({ PhoneNumber: value })
              }}
              maxLength={10}

              keyboardType="numeric"
              style={StylesForgetPass.PhoneInput}
            />

            <TouchableOpacity
              onPress={() => {
                this.clearPhoneNumber()
              }}
              style={{ marginBottom: RFValue(3) }}
            >

              <AntDesign name="closecircle" color={COLOR.gray} size={ICONS.mdIcon} />

            </TouchableOpacity>



          </View>




          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("PhoneVerification")
            }}
            style={[StylesForgetPass.resetView, { alignSelf: 'center',marginVertical:RFValue(70)}]}>
            <View >
              <Text style={StylesForgetPass.resetText}>Next</Text>
            </View>
          </TouchableOpacity>


        </ScrollView>







      </>
    )
  }
}




