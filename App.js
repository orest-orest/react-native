import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './store/index.js';
import ImageList from "./ImageList";
import ImageView from './ImageView'
import {fetchImages} from './actions/actions'
import {connect} from 'react-redux'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const store = configureStore();

const mapDispatchToProps = (dispatch) => ({
    fetchImages: () => dispatch(fetchImages())
})

let ImageContainer = connect(state => ({imageList: state}),
    mapDispatchToProps
)(ImageList);

let ImageViewContainer = connect(null, null)(ImageView)

let RootStack = createStackNavigator();


export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <RootStack.Navigator>
                    <RootStack.Screen name="Home" component={ImageContainer}/>
                    <RootStack.Screen name="View" component={ImageViewContainer}/>
                </RootStack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


