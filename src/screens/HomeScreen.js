import { AntDesign } from '@expo/vector-icons';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Image, ImageBackground, Platform, Pressable, ScrollView, StatusBar, Text, TextInput, useWindowDimensions, View } from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
export default function HomeScreen({ navigation }) {

    useEffect(() => {
        changeNavigationBarColor("#191C21")
    })




    const height = useWindowDimensions().height
    const width = useWindowDimensions().width
    const [data, setData] = useState([
        {
            img: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNpdHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
            img: 'https://images.yourstory.com/cs/4/a9efa9c02dd911e9adc52d913c55075e/1Harini-47-1625639267167.jpg?fm=auto&ar=2:1&mode=crop&crop=faces&w=800'
        },
        {
            img: 'https://images.yourstory.com/cs/5/98c65090592f11ea9f62339ce853ca75/azhar20507chn2323916-1625654249795.jpeg?fm=png&auto=format&ar=2:1&mode=crop&crop=faces'
        },
        {
            img: 'https://images.yourstory.com/cs/5/8e7cc4102d6c11e9aa979329348d4c3e/mondaymotivationniteshbhardwaj-1625385415782.png?fm=png&auto=format&ar=2:1&mode=crop&crop=faces'
        },
    ])

    const [mentors, setMentors] = useState([
        {
            img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            img: 'https://images.unsplash.com/photo-1589386417686-0d34b5903d23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            img: 'https://images.unsplash.com/photo-1568493021943-4077b55c95a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
        },
        {
            img: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
        },
    ])
    const [selected, setSelected] = useState('Top')



    return (
        <View style={{ flex: 1, backgroundColor: '#000000' }}>
            <StatusBar backgroundColor="#000000" barStyle="light-content" />
            <ScrollView stickyHeaderIndices={[2]} scrollEventThrottle={700} showsVerticalScrollIndicator={false} >
                {/* Header view start */}
                <View style={{ height: 60, width: width, backgroundColor: "#000000" }}>
                    <View style={{ width: width, flexDirection: 'row', justifyContent: 'space-between', }} >
                        <View />
                        <Image style={{ height: 40, marginRight: -35, width: 120, marginTop: 15 }} source={{ uri: 'https://www.collegepass.org/assets/GoldNLogo.jpeg' }} resizeMode="contain" />
                        <View style={{ marginRight: 25, marginTop: 20 }}>
                            <AntDesign name="notification" size={24} color="#fff" />
                        </View>
                    </View>
                </View>
                <View style={{ height: 50, width: width, backgroundColor: "#000000" }}>
                    <View style={{ width: width, justifyContent: 'center', alignItems: 'center', marginTop: 22 }} >
                        <View style={{ width: width - 30, height: 50, justifyContent: 'space-between', flexDirection: 'row', borderWidth: 0.5, borderRadius: 4, backgroundColor: '#333333', borderColor: '#000000' }} >
                            <TextInput spellCheck={false} style={{ marginLeft: 15, fontFamily: 'ubantuR', width: width - 100, outlineWidth: Platform.OS === "web" ? "0" : 1, color: '#fff' }} placeholderTextColor="lightgray" placeholder="Search articles, videos, componies.." />
                            <AntDesign name="search1" size={24} color="lightgray" style={{ marginRight: 20, marginTop: 13 }} />

                        </View>
                    </View>
                </View>
                <View style={{ marginTop: 25, backgroundColor: '#000000' }}>
                    <View style={{ width: width, flexDirection: 'row', height: 60, backgroundColor: '#000000', borderBottomColor: 'lightgray', }} >
                        <Text onPress={() => setSelected('Top')} style={{ fontSize: selected === "Top" ? 16 : 13, fontFamily: selected === "Top" ? 'ubantu' : 'ubantuR', color: selected === "Top" ? '#fff' : 'gray', marginLeft: 15, marginTop: selected === "Top" ? 14 : 18, textTransform: 'uppercase' }}>Admissions</Text>
                        <Text onPress={() => setSelected('Latest')} style={{ fontSize: selected === "Latest" ? 16 : 13, fontFamily: selected === "Latest" ? 'ubantu' : 'ubantuR', color: selected === "Latest" ? '#fff' : 'gray', marginLeft: 15, marginTop: selected === "Latest" ? 14 : 18, textTransform: 'uppercase' }}>Tutoring</Text>
                        <Text onPress={() => setSelected('Yoryou')} style={{ fontSize: selected === "Yoryou" ? 16 : 13, fontFamily: selected === "Yoryou" ? 'ubantu' : 'ubantuR', color: selected === "Yoryou" ? '#fff' : 'gray', marginLeft: 15, marginTop: selected === "Yoryou" ? 14 : 18, textTransform: 'uppercase' }}>blog</Text>
                    </View>
                </View>
                {/* Header View End */}

                {/* intro */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {data.map((item, index) => {
                        return (
                            <View style={{ backgroundColor: '#000000', marginTop: 10, justifyContent: 'center', alignItems: 'center', }}>
                                <ImageBackground style={{ height: 170, width: 290, borderRadius: 6, marginLeft: 15, }} source={{ uri: item.img }} resizeMode="cover" imageStyle={{ opacity: 0.6, borderRadius: 4 }} >
                                    <View style={{ marginLeft: 20 }}>
                                        <Text style={{ fontFamily: 'ubantu', color: '#fff', fontSize: 16, textTransform: 'uppercase', marginTop: 20 }}>THE IVY LEAGUE TOWNHALL</Text>
                                        <View style={{ height: 40, width: 70, backgroundColor: '#C83232', marginTop: 10, borderRadius: 4, justifyContent: 'center', alignItems: 'center', }}>
                                            <Text style={{ fontFamily: 'ubantu', color: '#fff', fontSize: 10, textTransform: 'uppercase', }}>Notify Me</Text>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                        )
                    })}
                </ScrollView>

                {/* Top Courses */}
                <Text style={{ fontFamily: 'ubantu', color: '#fff', fontSize: 14, textTransform: 'uppercase', marginTop: 20, marginLeft: 15 }}>TOP COURSE</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {data.map((item, index) => {
                        return (
                            <Pressable onPress={() => navigation.navigate("VideoView")}>
                                <View style={{ backgroundColor: '#000000', marginTop: 10, justifyContent: 'center', alignItems: 'center', }}>
                                    <ImageBackground style={{ height: 170, width: 220, borderRadius: 6, marginLeft: 15, justifyContent: 'center', alignItems: 'center', }} imageStyle={{ opacity: 0.5 }} source={{ uri: item.img }} resizeMode="cover">
                                        <AntDesign name="play" size={49} color="#fff" />
                                        <Text style={{ fontFamily: 'ubantu', color: '#fff', fontSize: 16 }}>Top Rated Courses</Text>

                                    </ImageBackground>
                                </View>
                            </Pressable>
                        )
                    })}
                </ScrollView>

                {/* Top Mentors */}
                <Text style={{ fontFamily: 'ubantu', color: '#fff', fontSize: 14, textTransform: 'uppercase', marginTop: 20, marginLeft: 15 }}>TOP MENTORS</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {mentors.map((item, index) => {
                        return (
                            <Pressable onPress={() => navigation.navigate("Profile")}>
                                <View style={{ backgroundColor: '#000000', marginTop: 10, justifyContent: 'center', alignItems: 'center', }}>
                                    <ImageBackground style={{ height: 170, width: 140, borderRadius: 6, marginLeft: 15, justifyContent: 'center', alignItems: 'center', }} imageStyle={{ borderRadius: 3 }} source={{ uri: item.img }} resizeMode="cover">
                                    </ImageBackground>
                                </View>
                            </Pressable>
                        )
                    })}
                </ScrollView>

                {/* on 30% Disconut */}
                <Text style={{ fontFamily: 'ubantu', color: '#fff', fontSize: 14, textTransform: 'uppercase', marginTop: 20, marginLeft: 15 }}>30% Disconut</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {data.reverse().map((item, index) => {
                        return (
                            <Pressable onPress={() => navigation.navigate("Profile")}>
                                <View style={{ backgroundColor: '#000000', marginTop: 10, justifyContent: 'center', alignItems: 'center', }}>
                                    <ImageBackground style={{ height: 170, width: 220, borderRadius: 6, marginLeft: 15, justifyContent: 'center', alignItems: 'center', }} imageStyle={{ opacity: 0.5 }} source={{ uri: item.img }} resizeMode="cover">
                                        <AntDesign name="play" size={49} color="#fff" />
                                        <Text style={{ fontFamily: 'ubantu', color: '#fff', fontSize: 16 }}>Top Rated Courses</Text>

                                    </ImageBackground>
                                </View>
                            </Pressable>
                        )
                    })}
                </ScrollView>
            </ScrollView>
        </View>
    )
}