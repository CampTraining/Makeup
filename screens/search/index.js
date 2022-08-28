import React, {useRef} from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import {
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {COLORS, FONTS} from '../../constants/fulltheme';
import {styles} from '../search/styles';
import {COLOR, images} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {RFValue} from 'react-native-responsive-fontsize';
import Modal from 'react-native-modalbox';
import {Header} from '../../components';
const window = Dimensions.get('window');
export function SearchPage(props) {
  const amountRef = useRef();
  // const screen = Dimensions.get("screen");
  const [checked, setChecked] = React.useState('');
  const [photographersArr, setPhotohgraphersArr] = React.useState([
    {
      show: true,
      name: 'Ahmed',
      numOfStars: '3',
      useFilter: false,
      follow: true,
      followers_num: 50,
    },
    {
      show: true,
      name: 'Sami',
      numOfStars: '5',
      useFilter: false,
      follow: false,
      followers_num: 40,
    },
    {
      show: true,
      name: 'Nada',
      numOfStars: '4',
      useFilter: false,
      follow: true,
      followers_num: 200,
    },
  ]);

  const [searchKey, setSearchKey] = React.useState('');
  // rating
  const [defaultRatimg, setDefaultRating] = React.useState(1);
  const [endStar, setEndStar] = React.useState('');
  const onFinishRating = rating => {
    setEndStar(rating);
    console.log(endStar);
    return rating;
  };
  const [isOpen, setIsOpen] = React.useState(false);
  const [conStatus, setConStatus] = React.useState(true);
  const [loading, setLoading] = React.useState(false);
  const [onFiltering, setOnFiltering] = React.useState(false);

  const filterFun = () => {
    let data_filter = [...photographersArr];
    if (onFiltering == true) {
      // showOnFiltering
      for (let index = 0; index < data_filter.length; index++) {
        if (data_filter[index].useFilter == endStar) {
          data_filter[index].useFilter = true;
          // data_filter[index].show=false
        } else {
          data_filter[index].useFilter = false;
          // data_filter[index].show=false
        }
      }
      setPhotohgraphersArr(data_filter);
    }
    //   else  //  filter == false don't use filter
    // {
    //   for(let index=0;index<data_filter.length;index++)
    //   {
    //     data_filter[index].useFilter=false;
    //   }
    //   setPhotohgraphersArr(data_filter)

    // }
  };

  // const showOnFiltering=() => {
  // let data=[...photographersArr];
  // for(i=0;i<data.length;i++)
  // {

  //   data[i].show=false;
  // }
  // setPhotohgraphersArr(data)
  // }

  const onChange = searchKey => {
    setSearchKey(searchKey);
    let data = [...photographersArr];
    let counter = 0;
    // let find_names_arr = []
    for (let index = 0; index < data.length; index++) {
      if (
        data[index].name
          .toUpperCase()
          .trim()
          .includes(searchKey.toUpperCase().trim()) ||
        data[index].numOfStars == endStar
      ) {
        //  let new_value=data[index].show;
        //  new_value=true
        data[index].show = true;
        //  alert(index)
        // let new_obj = data[index]
        // find_names_arr.push(new_obj);
        // setPhotohgraphersArr(find_names_arr)
        // alert("adad");
      } else {
        data[index].show = false;
        counter++;
      }
    }
    setPhotohgraphersArr(data);
    // setCounter(counter);  ////////
    // alert(JSON.stringify(photographersArr))
  };

  // const returnFlatList= React.useEffect(renderFlatList)

  const renderFlatList = () => {
    return <></>;
  };
  return (
    <>
      <View style={[styles.container, {backgroundColor: COLOR.White}]}>
        <StatusBar hidden={true} />
        <Header />

        <View style={[styles.searchContainer]}>
          <Searchbar
            style={styles.searchBar}
            inputStyle={{color: COLORS.darkGray}}
            placeholder="Search"
            iconColor={COLORS.gray3}
            value={searchKey}
            onChangeText={value => {
              onChange(value);
            }}
          />

          <View
            style={{
              // width:80,
              alignItems: 'center',

              marginLeft: -40,
            }}>
            <TouchableOpacity
              onPress={() => {
                if (onFiltering) {
                  setOnFiltering(false);
                  setEndStar(null);
                } //  showOnFiltering
                else amountRef.current.open();
              }}>
              <Icon
                name={onFiltering == true ? 'door-open' : 'filter'}
                size={20}
                color={COLORS.gray3}
              />
            </TouchableOpacity>
          </View>
        </View>
        {loading == true ? (
          <View
            style={{
              height: '100%',
              marginTop: RFValue(-80),
              backgroundColor: COLORS.white,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={50} color={COLORS.pink} />
          </View>
        ) : (
          <>
            <FlatList
              data={photographersArr}
              renderItem={({item, index}) => (
                <>
                  {photographersArr.length > 0 ? (
                    // return data
                    <>
                      {onFiltering == false &&
                      photographersArr[index].show == true ? (
                        <>
                          <TouchableOpacity
                            key={index}
                            style={styles.profile_container}>
                            <Image
                              style={styles.profile_img}
                              resizeMode="contain"
                              source={images.profile}
                            />

                            <View style={styles.rating_follow_container}>
                              <View style={styles.name_rating_view}>
                                <View
                                  style={{
                                    alignSelf: 'flex-start',
                                    alignItems: 'center',
                                  }}>
                                  <Text
                                    numberOfLines={1}
                                    style={{
                                      color: COLORS.darkGray,
                                      fontSize: 20,
                                    }}>
                                    {item.name}
                                  </Text>
                                </View>
                                <View style={styles.airbnb_view}>
                                  <AirbnbRating
                                    ratingContainerStyle={
                                      styles.flat_rating_style
                                    }
                                    // reviews={[]}
                                    defaultRating={item.numOfStars} // from admin
                                    count={5}
                                    isDisabled={true}
                                    size={RFValue(20)}
                                    showRating={false}
                                  />
                                </View>
                              </View>

                              <View style={styles.follow_view}>
                                <TouchableOpacity
                                  // key={index}
                                  onPress={() => {
                                    item.follow = !item.follow;
                                    setChecked(item.follow);
                                    // alert(item.follow)
                                    if (item.follow) {
                                      item.followers_num--;
                                      // alert(item.followers_num)
                                    } else {
                                      item.followers_num++;
                                      // alert(item.followers_num)
                                    }
                                  }}
                                  style={styles.follow_bt}>
                                  <Text
                                    style={{
                                      color: COLORS.white,
                                      fontWeight: '900',
                                      fontSize: 20,
                                    }}>
                                    {item.follow ? 'Follow' : 'Unfollow'}
                                  </Text>
                                </TouchableOpacity>
                              </View>
                            </View>
                          </TouchableOpacity>
                        </>
                      ) : (
                        <>
                          {onFiltering == true &&
                          photographersArr[index].numOfStars == endStar ? (
                            <>
                              <TouchableOpacity
                                key={index}
                                style={styles.profile_container}>
                                <Image
                                  style={styles.profile_img}
                                  resizeMode="contain"
                                  source={images.profile}
                                />

                                <View style={styles.rating_follow_container}>
                                  <View style={styles.name_rating_view}>
                                    <View
                                      style={{
                                        alignSelf: 'flex-start',
                                        alignItems: 'center',
                                      }}>
                                      <Text
                                        numberOfLines={1}
                                        style={{
                                          color: COLORS.darkGray,
                                          fontSize: 20,
                                        }}>
                                        {item.name}
                                      </Text>
                                    </View>
                                    <View style={styles.airbnb_view}>
                                      <AirbnbRating
                                        ratingContainerStyle={
                                          styles.flat_rating_style
                                        }
                                        // reviews={[]}
                                        defaultRating={item.numOfStars} // from admin
                                        count={5}
                                        isDisabled={true}
                                        size={RFValue(20)}
                                        showRating={false}
                                      />
                                    </View>
                                  </View>

                                  <View style={styles.follow_view}>
                                    <TouchableOpacity
                                      // key={index}
                                      onPress={() => {
                                        item.follow = !item.follow;
                                        setChecked(item.follow);
                                        // alert(item.follow)
                                        if (item.follow) {
                                          item.followers_num--;
                                          // alert(item.followers_num)
                                        } else {
                                          item.followers_num++;
                                          // alert(item.followers_num)
                                        }
                                      }}
                                      style={styles.follow_bt}>
                                      <Text
                                        style={{
                                          color: COLORS.white,
                                          fontWeight: '900',
                                          fontSize: 20,
                                        }}>
                                        {item.follow ? 'Follow' : 'Unfollow'}
                                      </Text>
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              </TouchableOpacity>
                            </>
                          ) : (
                            <></>
                          )}
                        </>
                      )}
                    </>
                  ) : photographersArr.length == 0 ? (
                    <View
                      style={{
                        height: 400,
                        marginTop: RFValue(-80),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#f00',
                      }}>
                      <Text style={{color: COLORS.pink}}>There is no data</Text>
                    </View>
                  ) : (
                    <>
                      {/* Erorr in connection */}
                      {conStatus == false && photographersArr.length == 0 ? (
                        <>
                          <View
                            style={{
                              height: '100%',
                              marginTop: RFValue(-80),
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Text style={{color: COLORS.pink}}>
                              Erorr in connection
                            </Text>
                          </View>
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  )}
                </>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </>
        )}

        <Modal
          style={styles.modal4}
          position={'bottom'}
          startOpen={isOpen}
          //  opacity={.5}
          backgroundColor="#0f0"
          animationDuration={700}
          ref={amountRef}
          // backdropOpacity={0.7}
        >
          <View style={styles.modal_header}>
            <TouchableOpacity
              onPress={() => {
                setEndStar(defaultRatimg);
              }}>
              <Text
                style={[
                  FONTS.h2,
                  {
                    fontWeight: 'bold',
                    color: COLORS.pink,
                    alignSelf: 'center',
                  },
                ]}>
                Reset
              </Text>
            </TouchableOpacity>

            <Text style={[FONTS.h1, {fontWeight: 'bold'}]}>Filter</Text>

            <TouchableOpacity
              onPress={() => {
                amountRef.current.close();
              }}>
              <Text style={[FONTS.h2, styles.r_c_style]}>Cancel</Text>
            </TouchableOpacity>
          </View>
          {/* ////////////////////////////////// */}

          <View style={styles.rating_container}>
            <TouchableOpacity
              style={styles.non}
              onPress={() => {
                // setDefaultRating(0)
                setEndStar(0);
                console.log(endStar);
              }}>
              <Text style={{fontWeight: '700'}}>None</Text>
            </TouchableOpacity>
            <AirbnbRating
              ratingContainerStyle={{padding: 0}}
              reviews={['1', '2', '3', '4', '5']}
              count={5}
              onFinishRating={onFinishRating}
              // onStartRating={onStartRating}
              reviewColor={COLORS.pink}
              selectedColor={COLORS.pink}
              reviewSize={RFValue(40)}
              defaultRating={defaultRatimg}
              showRating={true}
              // onFinishRating=()
              // ratingContainerStyle=
              // starContainerStyle={{width:RFValue(40),height:RFValue(40),backgroundColor:"#0dd"}}
              size={RFValue(30)}
            />
          </View>

          {/* {searchKey} */}
          <TouchableOpacity
            onPress={() => {
              setOnFiltering(true);
              // setEndStar()
              // showOnFiltering
              // filterFun;

              setEndStar(endStar);
              // onChange()
              amountRef.current.close();
              console.log(endStar);
            }}
            style={styles.filter_btn}>
            <Text style={[FONTS.h2, {color: COLORS.white, fontWeight: 'bold'}]}>
              Filter
            </Text>
          </TouchableOpacity>
        </Modal>
      </View>
    </>
  );
}

//  export default SearchPage;
// const styles = StyleSheet.create({

//   container: {
//     width: window.width, flex: 1,
//     // justifyContent:"center",
//     // alignItems:"center",
//     //  backgroundColor:[COLORS.white],
//     paddingTop: "1%",
//   },
//   searchContainer: {
//     // borderWidth:5,
//     flexDirection: "row",
//     // justifyContent: "center",
//     alignItems: "center",
//     //  width: window.width,
//     width: RFValue(350),
//     height: RFValue(50),
//     alignSelf: "center",
//     borderRadius: RFValue(20),
//     marginBottom: "5%",
//     // backgroundColor
//     elevation: 5,
//     // borderRadius: 15,
//   },

//   searchBar: {
//     height: RFValue(50),
//     width: RFValue(350),
//     alignSelf: "center"
//     //  alignItems:"center"
//     // ,marginLeft:20
//     // ,elevation:0,
//     , borderWidth: 2,
//     borderColor: COLORS.gray3
//     , borderRadius: RFValue(20)
//   },

//   profile_container:
//   {
//     width: window.width * 0.9,
//     borderRadius: RFValue(15)
//     , height: window.height * 0.4
//     , marginBottom: "2.5%"
//     ,  //  ,padding:"2%",
//     // justifyContent:"space-between",
//     elevation: 4,
//     backgroundColor: COLORS.white,
//     marginTop: '2.5%',
//     paddingBottom: 1,
//     borderRadius: 20,
//     alignSelf: "center",
//     alignItems: "center"
//   },

//   profile_img: {
//     width: "100%",
//     height: "70%",
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15

//   },
//   rating_follow_container:
//   {
//     width: "100%",
//     height: "30%",
//     justifyContent: "space-between",
//     flexDirection: "row",
//     marginTop: "0%",
//     paddingHorizontal: "5%",
//   },
//   name_rating_view:
//   {
//     paddingTop: 10,
//     justifyContent: "space-between",
//     width: "50%",
//     height: "70%"
//   },

//   airbnb_view:
//   {
//     // flexDirection: "row",
//     marginTop: "0%",
//     width: "80%",
//     alignSelf: "flex-start",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   flat_rating_style:
//   {
//     margin: 0,
//     height: "68%",
//     width: 100
//     , alignSelf: "center",
//     padding: 0
//   },
//   modal_header:
//   {
//     flexDirection: "row",
//     width: RFValue(400),
//     // borderWidth:1,
//     alignSelf: "center",
//     alignItems: "center",
//     justifyContent: "space-between",
//     paddingHorizontal: RFValue(10)
//   },
//   modal: {
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   rating_container:
//   {
//     flexDirection: "row",
//     marginTop: RFValue(-80),
//     marginLeft: RFValue(-40),
//     width: "100%",
//     alignSelf: "center",
//     justifyContent: "space-around",
//     alignItems: "center",
//     height: 200,
//     flexDirection: "row",
//     //  borderWidth:1,
//   },

//   modal4: {
//     borderTopEndRadius: 20,
//     borderTopStartRadius: 20,
//     height: 400,
//     justifyContent: "space-around"
//   },
// r_c_style:
// {
//   color:COLORS.pink,
//   fontWeight: "bold",
//   // width:100,
//   alignSelf: "center",
//   marginRight: RFValue(-10),
// }

// });
// const window = Dimensions.get("window");
