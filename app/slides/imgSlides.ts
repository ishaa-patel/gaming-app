/* eslint-disable prettier/prettier */
import images from "../assets/images";
export const imgSliderData = [
    {
        title: 'Fisrt Game',
        image: images.marioImg,
    },
    {
        title: 'Second Game',
        image: images.subwayImg,
    },
    {
        title: 'Third Game',
        image: images.birdsImg,
    },
];

export const paidGames = [
    {
        id: 1,
        poster: images.cricketImg,
        title: 'Cricket',
        subtitle: 'Player',
        isFree: 'No',
        price: '$19.99',
    },
    {
        id: 2,
        poster: images.batManImg,
        title: 'BatMan',
        subtitle: 'Marvel',
        isFree: 'No',
        price: '$45',
    },
    {
        id: 3,
        poster: images.ironManImg,
        title: 'IronMan',
        subtitle: 'Marvel',
        isFree: 'No',
        price: '$25.99',
    },
    {
        id: 4,
        poster: images.spiderManImg,
        title: 'SpiderMan',
        subtitle: 'EA',
        isFree: 'No',
        price: '$35.48',
    },
    {
        id: 5,
        poster: images.superManImg,
        title: 'SuperMan',
        subtitle: 'Marvel',
        isFree: 'No',
        price: '$49.99',
    },
];

export const freeGames = [
    {
        id: 1,
        poster: images.chessImg,
        title: 'Chess',
        subtitle: 'logic',
        isFree: 'Yes',
    },
    {
        id: 2,
        poster: images.birdsImg,
        title: 'Angry-Birds',
        subtitle: 'puzzle',
        isFree: 'Yes',
    },
    {
        id: 3,
        poster: images.marioImg,
        title: 'Super-Mario',
        subtitle: 'Fun',
        isFree: 'Yes',
    },
    {
        id: 4,
        poster: images.subwayImg,
        title: 'Subway-Surfers',
        subtitle: 'logic',
        isFree: 'Yes',
    },
];
