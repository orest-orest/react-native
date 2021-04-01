import {StatusBar} from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import {Dimensions} from "react-native-web";


const ImageList = ({imageList, fetchImages, navigation}) => {

    const [status, setStatus] = useState(true)

    useEffect(() => {

        fetchImages()
    }, [])


    return (
        <View>
            <Text>Images</Text>
            {imageList.imageList === undefined ? null : <View style={styles.container}>{
                <FlatList
                    contentContainerStyle={styles.container}
                    data={imageList.imageList}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item, index}) => {
                        return <TouchableOpacity
                                    onPress={() => {
                                        console.log(item.urls.regular)
                                        let fullSize = item.urls.regular
                                        navigation.navigate('View', {fullSize})
                                    }
                                    }>
                        <Image
                            style={styles.image}
                            source={{
                                uri: `${item.urls.small}`
                            }}
                        />
                        </TouchableOpacity>
                    }
                    }
                />
            }</View>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        кflexWrap: 'wrap',
        justifyContent: 'center'
    },
    image: {
        width: 100,
        height: 100,
        margin: 5,
    },
});


export default ImageList;
