
import { RFValue } from "react-native-responsive-fontsize"

export const endPoint='https://generation3.000webhostapp.com/project/Training';

export  const COLOR = {
    PrimaryColor: "#FF33F6",
    White: "#fff",
    dark_gray: "#333232",
    red: "#f00",
    gray: "#b2b2b2",
    black:"#000",
    blue:"#2121EB",
    green:"#2BE12B",
    dark_red:"#E52929"
    
    // Primarycolor_2: "#daa"
}

export const ICONS = {
    xsIcon: RFValue(10) >= 10 ? RFValue(10) : 5,
    smIcon: RFValue(15) >= 15 ? RFValue(15) : 10,
    mdIcon: RFValue(20) >= 20 ? RFValue(20) : 15,
    lgIcon: RFValue(25) >= 25 ? RFValue(25) : 20,
    xlIcon: RFValue(30) >= 30 ? RFValue(30) : 25,
};

export const FONTS = {
    h1: RFValue(35) >= 35 ? RFValue(35) : 30,
    h2: RFValue(30) >= 30 ? RFValue(30) : 25,
    h3: RFValue(25) >= 25 ? RFValue(25) : 20,
    h4: RFValue(20) >= 20 ? RFValue(20) : 17,
    h5: RFValue(16) >= 16 ? RFValue(16) : 15,
    h6: RFValue(13) >= 13 ? RFValue(13) : 13
};
export const MARGIN = {
    xsMargin: 10,
    smMargin: 20,
    mdMargin: 25,
    lgMargin: 30,
    xlMargin: 45,
  };
  export const PADDING = {
    xsPadding: 5,
    smPadding: 10,
    mdPadding: 15,
    lgPadding: 20,
    xlPadding: 25,
};
export const RADIUS = {
    xsRadius: 10,
    smRadius: 15,
    mdRadius: 20,
    lgRadius: 25,
    xlRadius: 30,
};

 