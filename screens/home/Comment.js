
import * as React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
  Modal,
  ImageBackground,
  Button
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Component } from 'react';
import { Input, GeneralButton } from '../components';
import { RFValue } from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RBSheet from "react-native-raw-bottom-sheet";
import { Styles } from "./styles";

import {
  PADDING,
  IconsView,
  COLOR,
  MARGIN,
  ICONS,
  FONTS,
  RADIUS,
  images,
} from '../../constants';

// import { COLOR } from 'react-native/Libraries/NewAppScreen';
import axios from 'axios';

export class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      visible: true,
      replay_comment: '',
      current_comment: "",

      current_replay: {
        replay_comment: "",
        replay_name: "",
        replay_image: images.story1,
      },

      comments: [
        {
          name: "Elwishy",
          image: images.story1,
          comment_content: "Alkont De Mont",
          replays: []
        },
        {
          name: "Tantawe",
          image: images.story1,
          comment_content: "Hello World",
          replays: [],
        },
        {
          name: "Alaa",
          image: images.story1,
          comment_content: "tlashany ashank mesh ashany",
          replays: [],
        },
        {
          name: "Salma",
          image: images.story1,
          comment_content: "elweshosh hatetabl",
          replays: [],
        }
        ,
        {
          name: "Asmaa",
          image: images.story1,
          comment_content: "law elklam ala mkask elbeso",
          replays: [],
        }
      ],

    };
  }

  // get_comments() {
  //   let data_to_send = {
  //     user_id: 1,
  //     post_id: 2
  //   }

  //   // axios.post('https://generation3.000webhostapp.com/project/Training/Comments.php', data_to_send).then(res => {
  //   //   if (res.status == 200) {
  //   //     if (res.data == 'Not Valid Parametar Value') {
  //   //       console.log('not valid');
  //   //     } else if (typeof (res.data) == "object") {
  //   //       console.log("success");
  //   //       console.log(res.data);
  //   //       this.setState({ comments: res.data })
  //   //     } else ("use not found")
  //   //   }
  //   // }).catch(err => {
  //   //   console.log(err);
  //   // })

  //   // axios.get('').then(res => {
  //   //   if (res.status == 200) {
  //   //     // .....
  //   //   }
  //   // }).catch(err => {
  //   //   console.log(err);
  //   // })

  // }

  // componentDidMount() {
  //   this.get_comments()
  // }



  add() {
    let list = this.state.comments

    let obj = {
      image: images.story1,
      name: "Elwishy",
      comment_content: this.state.text,
      replays: [],

    }

    list.push(obj)
    this.setState({

      comments: list,
      text: "",


    })

  }

  Add_Replay(text) {
    let comment = this.state.current_comment;
    const reply = {
      replay_comment: text.trim(),
      replay_name: "Aday",
      replay_image: images.story2,
    }

    comment.replays.push(reply);

    this.setState({

      replay_comment: "",
      comments: this.state.comments


    })
  }




  render() {
    return (






      <View style={[{
        flex: 1,
        // backgroundColor: "#ff0",

      }]}>

      
        


        <View style={[Styles.header, { justifyContent: "space-between", height: RFValue(50) ,
        // backgroundColor:"#ff0"
        }]}>
          <View style={[Styles.anyHeader,{
            // backgroundColor:"#0f0",
            width:"60%",
          padding:RFValue(5)
          }]}>
            <TouchableOpacity
              onPress={() => {
             this.props.navigation.navigate("Home")
              }}

            >
              < MaterialIcons name="arrow-back-ios" size={ICONS.mdIcon} color={COLOR.dark_gray}

              />
            </TouchableOpacity>
            <Text style={[Styles.text_header,]}>Comments</Text>
          </View>


        </View>

        {/* <ScrollView
          showsVerticalScrollIndicator={false}> */}

        <View style={{
          flex: 1,
          // backgroundColor: COLOR.,
          borderBottomLeftRadius: RFValue(30),
          borderBottomRightRadius: RFValue(30),
          paddingBottom: 40,
          // backgroundColor:"#00f"

        }}>

          <View style={{ padding: PADDING.smPadding, }}>




            <ScrollView showsVerticalScrollIndicator={false}>

              {/* map */}
              {this.state.comments.map((comment, index) => (
                <View style={[styles.container_comment, { borderBottomWidth: index == this.state.comments.length - 1 ? 0 : 1 }]}
                >
                  <View style={{}}>

                    <Image
                      source={comment.image}
                      style={{
                        width: RFValue(40),
                        height: RFValue(40),
                        backgroundColor: "#ccc",
                      }}
                      resizeMode="contain"
                      borderRadius={30}
                    />

                  </View>

                  <View style={{
                    minWidth: "50%",
                    marginLeft: MARGIN.xsMargin,

                  }}>

                    <View style={{
                      backgroundColor: "#fff",
                      borderWidth: RFValue(1.5),
                      borderColor: COLOR.PrimaryColor,
                      minHeight: RFValue(50),
                      paddingHorizontal: PADDING.smPadding,
                      borderRadius: RFValue(10),
                      elevation: 2
                    }}>
                      <Text style={styles.titleStyle}>{comment.name}</Text>
                      <Text style={styles.messageTitleStyle}>{comment.comment_content}</Text>
                    </View>

                    {
                      comment.replays.length > 0 ? comment.replays.map((replay, index) => (
                        <View style={{ flexDirection: "row" }}>
                          {
                            comment.replays == "" ? null : <Image
                              source={replay.replay_image}
                              style={{
                                width: RFValue(25),
                                height: RFValue(25),
                                marginTop: MARGIN.xsMargin,
                                marginRight: MARGIN.xsMargin,

                              }}
                              resizeMode="contain"
                              borderRadius={20}
                            />}
                          {comment.replays == "" ? null :
                            <View style={{
                              backgroundColor: "#ece9e9",
                              minWidth: "40%",
                              minHeight: RFValue(40),

                              borderRadius: RADIUS.xsRadius,
                              paddingHorizontal: PADDING.smPadding,
                              marginTop: MARGIN.xsMargin,
                              elevation: 2
                            }}>
                              <Text style={[styles.titleStyle, { alignItems: "flex-end" }]}>{replay.replay_name}</Text>
                              <Text style={{
                                marginLeft: RFValue(20),
                                fontSize: RFValue(15),
                                color: COLOR.black
                              }}>{replay.replay_comment}</Text>

                            </View>}

                        </View>
                      )) : null
                    }

                    <View
                      style={{
                        // backgroundColor: "#ff0",
                        width: RFValue(120),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: RFValue(5),
                        paddingHorizontal: RFValue(20),
                      }}

                    >
                      <TouchableOpacity
                        style={{
                          // backgroundColor: "#f00",
                          padding: RFValue(3)

                        }}
                      >
                        <Text style={{

                          fontSize: RFValue(FONTS.h6),
                          color: COLOR.dark_gray,
                          fontWeight: 'bold',
                        }}
                        >Like</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={{
                          // backgroundColor: "#f00",
                          padding: RFValue(3)

                        }}

                        onPress={() => {
                          this.setState({
                            current_comment: comment
                          })
                          this.RBSheet.open()
                        }}
                      >
                        <Text style={{
                          fontSize: RFValue(FONTS.h6),
                          color: COLOR.dark_gray,
                          fontWeight: 'bold',
                        }}
                        >Reply</Text>
                      </TouchableOpacity>
                    </View>


                  </View>
                </View>

              ))}

            </ScrollView>

          </View >
        </View >

        {/* <View style={{ width:20, height:20,justifyContent: "center", alignItems: "center",backgroundColor:"#0ff" }}>

        </View> */}

        <View style={styles.container_add_comment}>
          <TextInput
            style={[styles.input, { backgroundColor: "#ece9e9" }]}
            placeholder={"Write a comment.."}
            placeholderTextColor={COLOR.dark_gray}
            value={this.state.text}
            onChangeText={(newValue) => {
              this.setState({
                text: newValue

              })
            }}
          />


          <TouchableOpacity style={styles.smallButtom}
            disabled={this.state.text == "" ? true : false}
            onPress={() => {
              this.add()
            }}
          >
                <Ionicons name="send" color={COLOR.PrimaryColor} size={ICONS.xlIcon} />
          </TouchableOpacity>

        </View>


        <View style={[styles.view]}>
          <RBSheet
            ref={ref => {
              this.RBSheet = ref;
            }}
            height={70}
            openDuration={250}

            customStyles={{
              container: {
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: COLOR.White,
                // borderTopColor:COLOR.dark_gray,
                // borderTopWidth:RFValue(1.5)

              }
            }}
          >
            <View style={[styles.container_add_comment, {
              flex: 1,

            }]}>
              <TextInput
                style={[styles.input, { backgroundColor: "#ece9e9" }]}
                placeholder={"Write a comment.."}
                placeholderTextColor={COLOR.dark_gray}
                value={this.state.replay_comment}
                onChangeText={(newValue) => {
                  this.setState({
                    replay_comment: newValue
                  })
                }}
              />

              <TouchableOpacity style={styles.smallButtom}
                disabled={this.state.replay_comment == "" ? true : false}
                onPress={() => {
                  this.Add_Replay(this.state.replay_comment)
                  this.RBSheet.close()
                }}
              >
                <Ionicons name="send" color={COLOR.PrimaryColor} size={ICONS.xlIcon} />
              </TouchableOpacity>
            </View>
          </RBSheet>
        </View>

        {/* </ScrollView > */}


      </View >



    );
  }
}
const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    justifyContent: "space-between"
  },
  titleStyle: {
    fontSize: RFValue(FONTS.h5),
    color: COLOR.dark_gray,
    fontWeight: 'bold',

  },
  messageTitleStyle: {
    fontSize: RFValue(FONTS.h5),
    color: COLOR.dark_gray,

  },

  container_comment: {
    flexDirection: "row",
    width: "100%",
    minheight: RFValue(50),
    // alignItems: "center",
    borderBottomWidth: RFValue(0.7),
    borderBottomColor: "#ddd",
    paddingBottom: 20,
    marginVertical: 10

  },
  smallButtom: {
    // marginRight: 10,
    // backgroundColor: COLOR.White,
    // borderRadius: 5,
    // width: RFValue(40),
    // height: RFValue(40),
    // alignItems: "center",
    // justifyContent: "center",

    // borderWidth: RFValue(0.7),
    // borderColor: COLOR.gray,
    // position: "absolute"

    marginRight: 10,
    // backgroundColor: COLOR.White,
    borderRadius: RFValue(20),
    width: RFValue(40),
    height: RFValue(40),
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    alignItems: "center",
    backgroundColor: COLOR.White,
    borderRadius: RFValue(20),
    height: RFValue(40),
    paddingHorizontal: 20,
    borderWidth: RFValue(0.7),
    borderColor: COLOR.gray,
  },
  container_add_comment: {
    // backgroundColor: COLOR.gray,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: RFValue(50),
    paddingHorizontal: RFValue(10)

  }
});
export default Comment;
