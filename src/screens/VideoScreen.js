import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player';
import * as React from 'react';
import { View } from 'react-native';
export default function VideScreen() {
    return (
        <View style={{ flex: 1, backgroundColor: '#191C21' }}>
            <VideoPlayer
                style={{ height: 250, }}
                textStyle={{ fontFamily: 'md', fontSize: 12, marginBottom: 10 }}
                defaultControlsVisible={false}
                videoProps={{
                    shouldPlay: true,
                    resizeMode: Video.RESIZE_MODE_CONTAIN,
                    source: {
                        uri: 'https://collegepass-videos-banners.s3.ap-south-1.amazonaws.com/University+names+-+720p.mp4',
                    },
                }}
            />
        </View>
    )
}