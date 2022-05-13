import React, { useState, useRef } from 'react';

import { View, Text, StyleSheet, FlatList, Animated, ImageBackground, useWindowDimensions,} from 'react-native';

import OnboardingItem from './OnboardingItem';
import Paginator from './Paginator';
import NextButton from './NextButton';
import slides from './slides';

import { StatusBar } from 'expo-status-bar';



export default Onboarding = ({navigation}) => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);
    const viewableItemsChanged = useRef(({ viewableItems })=> {
        setCurrentIndex(viewableItems[0].index);
    }).current;
    
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const scrollTo = () => {
        if (currentIndex < slides.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1});
        } else {
            console.log('Last item.');
            navigation.replace('Login')
        }
    };

    const { width } = useWindowDimensions();

    return (
        <View style={[styles.container, {width}]}>
            <StatusBar style="auto" />
            <ImageBackground source={require ('../../assets/drawerIcons/discussionIcons/bg5.png')} resizeMode='cover' style={styles.imageBG}>
            <View style={{ flex: 3 }}>
                <FlatList 
                    data={slides} 
                    renderItem={({ item }) => <OnboardingItem item={item} /> }
                    horizontal
                    showsHorizontalScrollIndicator= {false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{ nativeEvent: {contentOffset: { x:scrollX } }}],{ 
                        useNativeDriver: false
                    })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>
                    <Paginator data={slides} scrollX={scrollX} />
                    <NextButton scrollTo={scrollTo} percentage={(currentIndex + 1) * (100 / slides.length)} />
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
   container: {
       flex: 1,
       justifyContent: 'center',
       alignItems:'center',
       backgroundColor: '#1D4123'
   },
    imageBG: {
        flex: 1,
       justifyContent: 'center',
        alignItems:'center',
   }
});