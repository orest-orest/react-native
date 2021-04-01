import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Image} from 'react-native';

const ImageView = ({route}) => {
    return <Image
        style={styles.imageFull}
        source={{
            uri: `${route.params.fullSize}`
        }}
    />
}


const styles = StyleSheet.create({
    imageFull: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
});

export default ImageView;