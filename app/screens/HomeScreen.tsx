/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles/HomeScreenStyle';
import constants from '../constants/AppConstants';
import Feather from 'react-native-vector-icons/Feather';
import Carousel from 'react-native-reanimated-carousel';
import { freeGames, imgSliderData, paidGames } from '../slides/imgSlides';
import { BannerSlider, CustomSwitch, GamesList } from '../components';
import { windowWidth } from '../utils/Dimensions';
import { connect } from 'react-redux';
import images from '../assets/images';


const HomeScreen = (props) => {
    const [gamesTab, setGamesTab] = useState(1);
    const renderBanner = ({ item }) => {
        return (<BannerSlider data={item} />);
    };

    const onSelectSwitch = (value) => {
        setGamesTab(value);
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.subContainer}>
                <View style={styles.userHeader}>
                    <Text style={styles.username}>
                        {props.displayHomeScreenUserName ? props.displayHomeScreenUserName : 'Hello User'}
                    </Text>
                    <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                        <Image source={props.displayHomeScreenUserImg ?
                            { uri: props.displayHomeScreenUserImg } : images.updateProfileImg}
                            style={styles.userImg} />
                    </TouchableOpacity>
                </View>

                <View style={styles.searchBar}>
                    <Feather name="search" size={20} color="#C6C6C6" style={styles.searchIcon} />
                    <TextInput placeholder={constants.SEARCH} placeholderTextColor={'gray'} style={styles.searchInput} />
                </View>

                <View style={styles.searchBarBottomContainer}>
                    <Text style={styles.username}>Upcoming Games</Text>
                    <TouchableOpacity>
                        <Text style={styles.seeAll}>See all</Text>
                    </TouchableOpacity>
                </View>

                <Carousel
                    loop
                    width={windowWidth - 30}
                    height={windowWidth / 2}
                    autoPlay={true}
                    data={imgSliderData}
                    scrollAnimationDuration={1000}
                    renderItem={renderBanner}
                />
                <View>
                    <CustomSwitch
                        selectionMode={1}
                        option1="Free to play"
                        option2="Paid games"
                        onSelectSwitch={onSelectSwitch} />
                </View>
                {gamesTab === 1 &&
                    freeGames.map(item => (
                        < GamesList
                            key={item.id}
                            photo={item.poster}
                            title={item.title}
                            subTitle={item.subtitle}
                            isFree={item.isFree}
                            price
                            onPress={() =>
                                props.navigation.navigate(constants.GAME_DETAIL, {
                                    title: item.title, id: item.id,
                                })
                            }
                        />
                    ))
                }
                {gamesTab === 2 &&
                    paidGames.map(item => (
                        < GamesList
                            key={item.id}
                            photo={item.poster}
                            title={item.title}
                            subTitle={item.subtitle}
                            isFree={item.isFree}
                            price={item.price}
                            onPress={() =>
                                props.navigation.navigate(constants.GAME_DETAIL, {
                                    title: item.title, id: item.id,
                                })
                            }
                        />
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    );
};
export const mapStateToProps = (state: any) => {
    return {
        displayHomeScreenUserImg: state.profile.imgLink,
        displayHomeScreenUserName: state.profile.name,
    };
};
export default connect(mapStateToProps)(HomeScreen);

