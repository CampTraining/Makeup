import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Modal,
  TextInput,
  TouchableHighlight,
  Animated,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RFValue } from 'react-native-responsive-fontsize';
import { Styles } from './styles';
import { COLOR, images, FONTS, ICONS,MARGIN } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import InstaStory from 'react-native-insta-story';

import axios from 'axios';
const hightlights = [
  {
    name: 'Alaa Mohamed ',
    img: images.story1,
    statusData: [
      {
        id: 1,
        img: images.story11,
      },
      {
        id: 2,
        img: images.story6,
      },
    ],
  },
  {
    name: 'Salma Mohsen',
    img: images.story2,
    statusData: [
      {
        id: 1,
        img: images.story4,
      },
      {
        id: 2,
        img: images.story14,
      },
    ],
  },
  {
    name: 'Rana Khaled ',
    img: images.story3,
    statusData: [
      {
        id: 1,
        img: images.story10,
      },
      {
        id: 2,
        img: images.story11,
      },
      {
        id: 3,
        img: images.story12,
      },
    ],
  },
  {
    name: 'Doha Abdulla',
    img: images.story4,
    statusData: [
      {
        id: 1,
        img: images.story15,
      },
      {
        id: 2,
        img: images.story16,
      },
      {
        id: 3,
        img: images.story17,
      },
    ],
  },
  {
    name: 'Dalia Mohsen',
    img: images.story5,
    statusData: [
      {
        id: 1,
        img: images.story2,
      },
      {
        id: 2,
        img: images.story13,
      },
      {
        id: 3,
        img: images.story3,
      },
    ],
  },
  {
    name: 'Rana Khaled',
    img: images.story6,
    statusData: [
      {
        id: 1,
        img: images.story2,
      },
      {
        id: 2,
        img: images.story13,
      },
      {
        id: 3,
        img: images.story3,
      },
    ],
  },
  {
    name: 'Alaa',
    img: images.story7,
    statusData: [
      {
        id: 1,
        img: images.story2,
      },
      {
        id: 2,
        img: images.story13,
      },
      {
        id: 3,
        img: images.story3,
      },
    ],
  },
  {
    name: 'Aya Mohamed',
    img: images.story8,
    statusData: [
      {
        id: 1,
        img: images.story2,
      },
      {
        id: 2,
        img: images.story13,
      },
      {
        id: 3,
        img: images.story3,
      },
    ],
  },
  {
    name: 'Doha Abdulla',
    img: images.story9,
    statusData: [
      {
        id: 1,
        img: images.story2,
      },
      {
        id: 2,
        img: images.story13,
      },
      {
        id: 3,
        img: images.story3,
      },
    ],
  },
  {
    name: 'Alaa',
    img: images.story10,
    statusData: [
      {
        id: 1,
        img: images.story2,
      },
      {
        id: 2,
        img: images.story13,
      },
      {
        id: 3,
        img: images.story3,
      },
    ],
  },
  {
    name: 'Dalia Mohsen',
    img: images.story11,
    statusData: [
      {
        id: 1,
        img: images.story2,
      },
      {
        id: 2,
        img: images.story13,
      },
      {
        id: 3,
        img: images.story3,
      },
    ],
  },
  {
    name: 'Asmaa',
    img: images.story12,
    statusData: [
      {
        id: 1,
        img: images.story2,
      },
      {
        id: 2,
        img: images.story13,
      },
      {
        id: 3,
        img: images.story3,
      },
    ],
  },
  {
    name: 'Aya Mohamed',
    img: images.story13,
    statusData: [
      {
        id: 1,
        img: images.story2,
      },
      {
        id: 2,
        img: images.story13,
      },
      {
        id: 3,
        img: images.story3,
      },
    ],
  },
  {
    name: 'Rana Khaled',
    img: images.story14,
    statusData: [
      {
        id: 1,
        img: images.story2,
      },
      {
        id: 2,
        img: images.story13,
      },
      {
        id: 3,
        img: images.story3,
      },
    ],
  },
  {
    name: 'Doha Abdulla',
    img: images.story15,
    statusData: [
      {
        id: 1,
        img: images.story2,
      },
      {
        id: 2,
        img: images.story13,
      },
      {
        id: 3,
        img: images.story3,
      },
    ],
  },
  {
    name: 'Rana Khaled',
    img: images.story16,
    statusData: [
      {
        id: 1,
        img: images.story2,
      },
      {
        id: 2,
        img: images.story13,
      },
      {
        id: 3,
        img: images.story3,
      },
    ],
  },
  {
    name: 'Aya Mohamed',
    img: images.story17,
    statusData: [
      {
        id: 1,
        img: images.story2,
      },
      {
        id: 2,
        img: images.story13,
      },
      {
        id: 3,
        img: images.story3,
      },
    ],
  },
];


const data = [
  {
      user_id: 1,
      user_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYepoYngWIbQ0Y8DmOVFqJ1y8qMGW1VQWpFw&usqp=CAU',
      user_name: "Alaa Mohamed ",
      stories: [
          {
              story_id: 1,
              story_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYepoYngWIbQ0Y8DmOVFqJ1y8qMGW1VQWpFw&usqp=CAU',
          },
          {
              story_id: 2,
              story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyfeHXjqR2-B3oyVDcjEL_tvHdECuJyon5_w&usqp=CAU",
          }]
  },
  {
      user_id: 2,
      user_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvFu5M0Ln05taRajiZ9ZvRcnpXClZ2q2gOWQ&usqp=CAU",
      user_name: "salmaa",
      stories: [
          {
              story_id: 1,
              story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH96mRkkuKpoJnz-5yGjcMJV7_WhT8OFk_-w&usqp=CAU",
          },
          {
              story_id: 2,
              story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQ-yrgSAQj07HGw22ooQmUd1H2ouQpaE4ug&usqp=CAU",
          }]
  },
  {
      user_id: 3,
      user_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2HNdYPx7n9QMmdM6dgJDsDNO_whJ_5Mmmxw&usqp=CAU",
      user_name: "Asmaa ",
      stories: [
          {
              story_id: 1,
              story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCVfPEq94Ru4XqUK0joWuhKih7f1xJBPr7MQ&usqp=CAU",
          },
          {
              story_id: 2,
              story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2HNdYPx7n9QMmdM6dgJDsDNO_whJ_5Mmmxw&usqp=CAU",
          }]
  }, {
      user_id: 4,
      user_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvFu5M0Ln05taRajiZ9ZvRcnpXClZ2q2gOWQ&usqp=CAU",
      user_name: "Shahd",
      stories: [
          {
              story_id: 1,
              story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH96mRkkuKpoJnz-5yGjcMJV7_WhT8OFk_-w&usqp=CAU",
          },
          {
              story_id: 2,
              story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQ-yrgSAQj07HGw22ooQmUd1H2ouQpaE4ug&usqp=CAU",
          }]
  }, {
      user_id: 5,
      user_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYepoYngWIbQ0Y8DmOVFqJ1y8qMGW1VQWpFw&usqp=CAU',
      user_name: "Maryam ",
      stories: [
          {
              story_id: 1,
              story_image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYepoYngWIbQ0Y8DmOVFqJ1y8qMGW1VQWpFw&usqp=CAU',
          },
          {
              story_id: 2,
              story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyfeHXjqR2-B3oyVDcjEL_tvHdECuJyon5_w&usqp=CAU",
          },
          {
              story_id: 3,
              story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyfeHXjqR2-B3oyVDcjEL_tvHdECuJyon5_w&usqp=CAU",
          }]
  }, {
      user_id: 6,
      user_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2HNdYPx7n9QMmdM6dgJDsDNO_whJ_5Mmmxw&usqp=CAU",
      user_name: "Lobna ",
      stories: [
          {
              story_id: 1,
              story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCVfPEq94Ru4XqUK0joWuhKih7f1xJBPr7MQ&usqp=CAU",
          },
          {
              story_id: 2,
              story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2HNdYPx7n9QMmdM6dgJDsDNO_whJ_5Mmmxw&usqp=CAU",
          }]
  },



];

const showFullStory = {
  name: '',
  img: '',
};

export default function Highlights(props) {
  const navigation = useNavigation();
  const [visableStory, setvisableStory] = useState(false); // ModalKey to show story

  const [heartIcon, setHeartIcon] = useState(false); //heart icons in story
  const [fullStory, setStoryImage] = useState(showFullStory); //storyFullObj

  const [isAuth, setAuth] = useState(true);

  // const StatusVar = hightlights.statusData
  // console.log(StatusVar)

  const fullStoryFun = index_var => {
    let highlights_var = [...hightlights];
    let storyObj = { ...fullStory };
    storyObj.name = highlights_var[index_var].name;
    storyObj.img = highlights_var[index_var].img;
    setStoryImage(storyObj);
  };

  // useEffect(() => {
  //     let timer = setTimeout(() => {
  //         //   navigation.goBack();
  //     }, 5000);

  //     Animated.timing(progress, {
  //         toValue: 5,
  //         duration: 5000,
  //         useNativeDriver: false,
  //     }).start();
  //     return () => clearTimeout(timer);
  // }, []);

  // const [progress, setProgress] = useState(new Animated.Value(0));

  // const progressAnimation = progress.interpolate({
  //     inputRange: [0, 5],
  //     outputRange: ['0%', '100%'],
  // });

  return (
    <>
      <Text style={Styles.textheader_List}>Hightlights</Text>
      {/* Hightlights */}
      {/* <FlatList
        horizontal
        contentContainerStyle={{
          paddingHorizontal: RFValue(22),
          height: RFValue(120),
        }}
        data={hightlights}
        renderItem={({item, index}) => {
          return (
            <>
              <TouchableOpacity
                style={Styles.storyContainer}
                onPress={() => {
                  // setHighlight(!hightlight[index].isShowStory,!visableStory)
                  setvisableStory(!visableStory);
                  fullStoryFun(index);
                }}>
                <View style={Styles.storyImageContainer}>
                  <Image source={item.img} style={Styles.storyImage} />
                </View>
                <View>
                  <Text style={Styles.storyName}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            </>
          );
        }}
      /> */}


      <View style={[Styles.highlight_view_style,]}>

        <InstaStory
          data={data}
          avatarSize={RFValue(60)}
          duration={10}
          unPressedBorderColor={COLOR.PrimaryColor}
        >

        </InstaStory>



      </View>




      {/* HighLight detail */}

      <Modal
        visible={visableStory}
        onRequestClose={() => {
          setvisableStory(!visableStory);
        }}
        animationType="fade">
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            backgroundColor: '#0e0e0e',
          }}>
          <View
            style={{
              marginTop: RFValue(10),
              flexDirection: 'row',
              width: '100%',
              height: RFValue(5),
              paddingHorizontal: RFValue(5),
            }}>
            {hightlights.map((data, index) => {
              return (
                <>
                  {data.statusData[index] ? (
                    <View
                      style={{
                        height: RFValue(3),
                        backgroundColor: '#ccc',
                        flex: 1,
                        marginHorizontal: RFValue(3),
                        borderRadius: RFValue(7),
                      }}></View>
                  ) : null}
                </>
              );
            })}
          </View>

          <View
            style={[
              Styles.postHeader,
              { alignItems: 'center', paddingHorizontal: RFValue(8) },
            ]}>
            <View style={[Styles.img_name_follow, { width: RFValue(160) }]}>
              <TouchableOpacity
                style={[
                  Styles.artistImageContainer,
                  { marginRight: RFValue(6) },
                ]}>
                <Image source={fullStory.img} style={Styles.artistImage} />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: RFValue(110),
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: FONTS.h5,
                    fontWeight: 'bold',
                    color: COLOR.White,
                  }}>
                  {fullStory.name}
                </Text>
              </TouchableOpacity>
              <MaterialIcons
                name="verified"
                size={ICONS.smIcon}
                color={COLOR.White}
              />
            </View>

            <View
              style={[
                Styles.Like_comment_view,
                { width: RFValue(90), justifyContent: 'space-around' },
              ]}>
              <TouchableOpacity style={Styles.HeaderIcon}>
                <Entypo
                  name="dots-three-horizontal"
                  size={ICONS.mdIcon}
                  color={COLOR.White}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={Styles.HeaderIcon}
                onPress={() => setvisableStory(!visableStory)}>
                <AntDesign
                  name="close"
                  size={ICONS.xlIcon}
                  color={COLOR.White}
                />
              </TouchableOpacity>
            </View>
          </View>

          <ImageBackground
            style={{ flex: 1 }}
            source={fullStory.img}
            resizeMode="cover">
            <View
              style={{
                height: '95%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={() => {
                  console.log('left');
                }}
                style={{ width: '50%' }} // left
              ></TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  console.log('right');
                }}
                style={{ width: '50%' }} //right
              ></TouchableOpacity>
            </View>
          </ImageBackground>

          {/* BottomHeaderStory */}
          <View style={Styles.bottomHeaderStory}>
            <TextInput
              style={Styles.textInputStory}
              placeholder="Send Massage"
              placeholderTextColor={COLOR.White}
            />
            <TouchableHighlight
              style={Styles.heartIconStory}
              onPress={() => {
                isAuth
                  ? setHeartIcon(!heartIcon)
                  : navigation.navigate('Login');
              }}>
              <AntDesign
                name={heartIcon ? 'heart' : 'hearto'}
                size={ICONS.lgIcon}
                color={heartIcon ? COLOR.red : COLOR.White}
              />
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </>
  );
}

{
  /* <View style={{flex:1,backgroundColor:'#000',paddingHorizontal:10}}>
                <View style={ {marginTop: 10,flexDirection: 'row',width: '100%'}}>
                    <FlatList
                    horizontal
                    data={hightlights}
                    renderItem={({item,index})=>{
                        return(
                            <>
                            {item.statusData?
                            <View style={ {height: 3,backgroundColor: '#bbbbbb',flex: 1,paddingHorizontal:6,marginHorizontal:10}}>

                            </View>:null}
                            </>
                        )
                    }}
                    />
                    
                </View>

            </View> */
}
