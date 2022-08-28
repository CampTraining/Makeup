import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList,
    ImageBackground,
    TouchableHighlight,
    AsyncStorage,
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { RFValue } from "react-native-responsive-fontsize"
import { Styles } from "../home";
import { COLOR, images, FONTS, ICONS } from "../../constants"

const hightlights = [
    { name: "Alaa Mohamed ", img: images.story1 },
    { name: "Salma Mohsen", img: images.story2 },
    { name: "Rana Khaled ", img: images.story3 },
    { name: "Doha Abdulla", img: images.story4 },
    { name: "Dalia Mohsen", img: images.story5 },
    { name: "Rana Khaled", img: images.story6 },
    { name: "Alaa", img: images.story7 },
    { name: "Aya Mohamed", img: images.story8 },
    { name: "Doha Abdulla", img: images.story9 },
    { name: "Alaa", img: images.story10 },
    { name: "Dalia Mohsen", img: images.story11 },
    { name: "Asmaa", img: images.story12 },
    { name: "Aya Mohamed", img: images.story13 },
    { name: "Rana Khaled", img: images.story14 },
    { name: "Doha Abdulla", img: images.story15 },
    { name: "Rana Khaled", img: images.story16 },
    { name: "Aya Mohamed", img: images.story17 },
]
const posts = [
    {
        name: "Aya Mohamed",
        img_artist: images.story1,
        imge_post: images.story2,
        description: "Congratulations Alaa",
        isFollow: false,
        isSaved: false,
        isLiked: false,

    },
    {
        name: "Rana Khaled",
        img_artist: images.story3,
        imge_post: images.story4,
        description: "Amazing bridal look",
        isFollow: false,
        isSaved: false,
        isLiked: false,

    }, {
        name: "Nour Ahmed",
        img_artist: images.story5,
        imge_post: images.story6,
        description: "This is a special look for my niecest friend I hope for you  ",
        isFollow: false,
        isSaved: false,
        isLiked: false,

    },
    {
        name: "Doha Abdullah",
        img_artist: images.story7,
        imge_post: images.story8,
        description: "Crystal clear beauty ",
        isFollow: false,
        isSaved: false,
        isLiked: false,

    },
    {
        name: "Dalia Mohsen",
        img_artist: images.story9,
        imge_post: images.story10,
        description: "",
        isFollow: false,
        isSaved: false,
        isLiked: false,

    },
    {
        name: "Aya Mohamed",
        img_artist: images.story11,
        imge_post: images.story12,
        description: "When elegance & beauty meet, uniqueness happens , It was a wonderful day with the girls of Dora Bo Dhabi When elegance & beauty meet, uniqueness happens , It was a wonderful day with the girls of Dora Bo Dhabi",
        isFollow: false,
        isSaved: false,
        isLiked: false,

    },
    {
        name: "Rana Khaled",
        img_artist: images.story13,
        imge_post: images.story14,
        description: "Fashionable saree needs an elegant star,Keep shiningggg ",
        isFollow: false,
        isSaved: false,
        isLiked: false,

    }, {
        name: "Nour Ahmed",
        img_artist: images.story15,
        imge_post: images.story16,
        description: "just like a captivating movie scene",
        isFollow: false,
        isSaved: false,
        isLiked: false,

    },
    {
        name: "Doha Abdullah",
        img_artist: images.story17,
        imge_post: images.story2,
        description: "As time goes by, what is true is revealed and what is fake, fades away ",
        isFollow: false,
        isSaved: false,
        isLiked: false,

    },
    {
        name: "Dalia Mohsen",
        img_artist: images.story6,
        imge_post: images.story14,
        description: "Pretty soft brownish pinks for my beautiful",
        isFollow: false,
        isSaved: false,
        isLiked: false,

    },
]

const showFullImgPostObj = {
    name: "",
    img: "",
    description: "",
    isFollow: false,
    isSaved: false,
    isLiked: false,
}
const showFullStory = {
    name: "",
    img: "",
}
const savedItemsArr = [
    {
        name: "",
        img_artist: "",
        imge_post: "",
        description: "",
        isFollow: false,
        isSaved: false,
        isLiked: false,
    }
]

export function SavedPage(props) {

    const { navigation } = props

    const [post, setPost] = useState(posts)
    const [visableStory, setvisableStory] = useState(false)// ModalKey to show story
    const [VisiableShowFullImgePost, setVisiableShowFullImgePost] = useState(false)// modal for fullImagepost
    const [fullImage, setfullImage] = useState(showFullImgPostObj) //imgeFullObj
    const [fullStory, setStoryImage] = useState(showFullStory) //imgeFullObj
    const [ShowSavedModel, setShowSavedModel] = useState(false)//show saved modal
    const [savedArr, setSavedArr] = useState([])
    const [counter, setCounter] = useState(0)


    const likeFun = (index_var) => {
        let post_var = [...post]
        post_var[index_var].isLiked = !post_var[index_var].isLiked
        setPost(post_var)
    }
    const SavedFun = (index_var) => {
        let post_var = [...post]
        post_var[index_var].isSaved = !post_var[index_var].isSaved
        setPost(post_var)

    }
    const FollowFun = (index_var) => {
        let post_var = [...post]
        post_var[index_var].isFollow = !post_var[index_var].isFollow
        setPost(post_var)

    }
    const fullImageFun = (item_var) => {
        // let post_var = [...post]
        let imgObj = { ...fullImage }
        imgObj.name = item_var.name
        imgObj.img = item_var.imge_post
        imgObj.description = item_var.description
        imgObj.isLiked = item_var.isLiked
        setfullImage(imgObj)
    }
    const fullStoryFun = (index_var) => {
        let highlights_var = [...hightlights]
        let storyObj = { ...fullStory }
        storyObj.name = highlights_var[index_var].name
        storyObj.img = highlights_var[index_var].img
        setStoryImage(storyObj)
    }
    const add_to_saved = (index_var) => {
        let post_var = [...post]
        let savedItems_var = [...savedArr]
        if (!savedItems_var.includes(post_var[index_var])) {

            savedItems_var[counter] = post_var[index_var]
        }
        setSavedArr(savedItems_var)
        setCounter(counter + 1)// to avoid index error

    }

    useEffect(() => {
        getSavedPosts()
    }, [])

    const setSavedPosts = async (arr) => {
        await AsyncStorage.setItem('savedPosts', JSON.stringify(arr))
    }

    const getSavedPosts = async () => {
        let get_saved_var = await AsyncStorage.getItem('savedPosts')

        if (get_saved_var == null || get_saved_var == undefined) {
            get_saved_var = '[]'
        } else {
            get_saved_var = JSON.parse(get_saved_var)
        }

        setSavedArr(get_saved_var)

    }

    const removeFromSaved = (index_var) => {
        // let post_var = [...post]
        let savedItems_var = [...savedArr]
        savedItems_var.splice(index_var, 1)
        setSavedArr(savedItems_var)
        setSavedPosts(savedItems_var)
    }

    return (
        <>

            <View style={{ flex: 1, }}>
                <View style={[Styles.header, { marginBottom: RFValue(20) }]}>
                    <View style={Styles.anyHeader}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Account")
                            }}
                        >
                            < MaterialIcons name="arrow-back-ios" size={ICONS.mdIcon} color={"#fff"}

                            />
                        </TouchableOpacity>
                        <Text style={[Styles.text_header]}>Saved Items </Text>
                    </View>

                    {/* <TouchableOpacity style={Styles.HeaderIcon}>
                        <Feather name="bell" size={ICONS.mdIcon} color={"#fff"} />
                    </TouchableOpacity> */}

                </View>


                <FlatList
                    data={savedArr}
                    renderItem={({ index, item }) => {
                        return (
                            <>
                                <View style={Styles.postContainer}>

                                    {/* PostHeader */}
                                    <View style={Styles.postHeader}>

                                        <View style={Styles.img_name_follow}>

                                            <TouchableOpacity style={Styles.artistImageContainer}
                                            // onPress={() => {
                                            //     setvisableStory(!visableStory)
                                            //     fullStoryFun(index)
                                            // }}
                                            >
                                                <Image source={item.img_artist} style={Styles.artistImage} />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{
                                                width: RFValue(100),
                                                //backgroundColor: '#0f0'
                                            }}>
                                                <Text style={{ fontSize: FONTS.h5, fontWeight: "bold" }}>{item.name + " ."}</Text>

                                            </TouchableOpacity>
                                            <TouchableOpacity style={Styles.followBtn}
                                                onPress={() => FollowFun(index)}
                                            >
                                                <Text style={{
                                                    fontSize: FONTS.h6,
                                                    fontWeight: "bold",
                                                    color: item.isFollow ? COLOR.gray : "#2780ec",
                                                    // can't put in style.js
                                                    marginLeft: RFValue(8)
                                                }}>{item.isFollow ? "Unfollow" : "Follow"}</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <TouchableOpacity style={Styles.HeaderIcon}
                                            onPress={() => {
                                                removeFromSaved(index)

                                            }}

                                        // onLongPress={() => {
                                        //     setShowSavedModel(!ShowSavedModel)
                                        // }}
                                        >
                                            <FontAwesome name={item.isSaved ? "bookmark" : "bookmark-o"}
                                                size={ICONS.lgIcon} color={item.isSaved ? COLOR.dark_gray : null} />
                                        </TouchableOpacity>
                                    </View>


                                    {/* PostImage */}

                                    <View style={Styles.styleImagePost} >
                                        <TouchableHighlight style={{ flex: 1 }}
                                        // onPress={() => {
                                        //     setVisiableShowFullImgePost(!VisiableShowFullImgePost),
                                        //         fullImageFun(item)
                                        // }}

                                        >
                                            <ImageBackground source={item.imge_post} style={{ flex: 1 }}
                                                borderRadius={RFValue(10)}
                                            >
                                            </ImageBackground>
                                        </TouchableHighlight>
                                    </View>

                                    {/* Like and Comment */}
                                    <View style={Styles.Like_comment_view}>

                                        <TouchableOpacity style={Styles.anyIconContainer}
                                            onPress={() => likeFun(index)}
                                        >
                                            <AntDesign
                                                name={item.isLiked ? "heart" : "hearto"} size={ICONS.lgIcon}
                                                color={item.isLiked ? COLOR.red : null} />
                                        </TouchableOpacity>

                                        <TouchableOpacity style={Styles.anyIconContainer}>
                                            <FontAwesome name="comment-o" size={ICONS.lgIcon} />
                                        </TouchableOpacity>
                                    </View>
                                    {/* description */}
                                    <View style={Styles.postDescription}>
                                        <Text style={{ fontSize: FONTS.h5 }}>{item.description} </Text>
                                        {/* fontsize 16 */}
                                    </View>
                                </View>

                            </>
                        )
                    }}
                />

            </View>

        </>
    )
}