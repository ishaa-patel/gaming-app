/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, SafeAreaView, ImageBackground, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles/HomeScreenStyle';
import images from '../assets/images';
import constants from '../constants/AppConstants';
import Feather from 'react-native-vector-icons/Feather';
import Carousel from 'react-native-reanimated-carousel';
import { freeGames, imgSliderData, paidGames } from '../slides/imgSlides';
import { BannerSlider, CustomSwitch, GamesList } from '../components';
import { windowWidth } from '../utils/Dimensions';


export default function HomeScreen({ navigation }) {
    const [gamesTab, setGamesTab] = useState(1);
    const renderBanner = ({ item, index }) => {
        return (<BannerSlider data={item} />);
    };

    const onSelectSwitch = (value) => {
        setGamesTab(value);
    };
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.subContainer}>
                <View style={styles.userHeader}>
                    <Text style={styles.username}>Hello User</Text>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <ImageBackground source={images.userImg}
                            imageStyle={{ borderRadius: 25 }}
                            style={styles.userImg}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.searchBar}>
                    <Feather name="search" size={20} color="#C6C6C6" style={styles.searchIcon} />
                    <TextInput placeholder={constants.SEARCH} placeholderTextColor={'gray'} style={{ color: 'black' }} />
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
                                navigation.navigate(constants.GAME_DETAIL, {
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
                                navigation.navigate(constants.GAME_DETAIL, {
                                    title: item.title, id: item.id,
                                })
                            }
                        />
                    ))
                }
            </ScrollView>
        </SafeAreaView>
    );
}
