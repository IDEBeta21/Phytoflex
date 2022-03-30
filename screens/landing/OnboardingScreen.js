import React from 'react';
import { useState } from 'react';
import { 
    SafeAreaView, 
    Dimensions, 
    StyleSheet, 
    FlatList,
    StatusBar, 
    View,
    Image,
    Text, 
    TouchableOpacity
} from 'react-native';

const {width, height} = Dimensions.get('window');

const COLORS = { primary: '#1D4123', white: '#ffffff'};

const slides = [
    {
        id: '1',
        image: require('../../assets/onboarding/Welcome.png'),
        title: 'Welcome!',
        subtitle: 'Phytoflex is just for you! Get yourself and your plants ready now!'
    },
        {
        id: '2',
        image: require('../../assets/onboarding/Flex.png'),
        title: 'Flex your Plants',
        subtitle: 'Snap and Flex your plants now! You can post and flex your plants on your account'
    },
        {
        id: '3',
        image: require('../../assets/onboarding/Discuss.png'),
        title: 'Discuss Plants',
        subtitle: 'Get ready to discuss and share answer to questions about plants through our community'
    },
        {
        id: '4',
        image: require('../../assets/onboarding/Identify.png'),
        title: 'Identify Plants',
        subtitle: 'Have a little knowledge about plants? Snap a photo and let’s identify your plants through your camera'
    },
        {
        id: '5',
        image: require('../../assets/onboarding/Shop.png'),
        title: 'Shop Plants',
        subtitle: 'Looking for more plants for your garden? Start shopping and add them onto your collection'
    }
];

const Slide = ({item}) => {
    return (
        <View style={{alignItems: 'center'}}>
            <Image 
                source= {item.image} 
                style={{height: '75%', width, resizeMode: 'contain'}} 
            />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
    );
};

const OnboardingScreen = ({navigation}) => {

    function gotoHome() {
        toTabs();
    }

    const toTabs = () => {
        navigation.push('MyTabs');
    }

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const ref = React.useRef(null);
    const Footer = () => {
        return (
            <View
                style={{
                    height: height * 0.25,
                    justifyContent: 'space-between',
                    paddingHorizontal: 20,
                }}>
                <View 
                    style={{
                        flexDirection: 'row', 
                        justifyContent: 'center', 
                        marginTop: 20
                    }}>
                    {slides.map((_, index) => (
                        <View 
                            key={index} 
                            style={[
                                styles.indicator, 
                                currentSlideIndex == index && {
                                    backgroundColor: COLORS.white,
                                    width: 25,
                                },
                            ]}
                        />
                    ))}
                    </View>    
                    <View style={{marginBottom:20}}>
                        { currentSlideIndex == slides.length -1 ? ( 
                            <View style={{height: 50}}>
                                <TouchableOpacity 
                                    style={[styles.btn]} onPress={() => gotoHome()}>
                                    <Text 
                                        style={{fontFamily: 'poppins-semiBold', fontSize: 15, color: COLORS.primary}}>
                                        Get Started
                                    </Text>
                                </TouchableOpacity>
                            </View> 
                            ) : ( 
                            <View style={{flexDirection:'row'}}>
                                <TouchableOpacity 
                                    style={[styles.btn, {backgroundColor: 'transparent', borderWidth: 1, borderColor: COLORS.white}]} 
                                    onPress={skip}>
                                    <Text 
                                        style={{fontFamily: 'poppins-regular', fontSize: 15, color: COLORS.white}}>
                                        Skip
                                    </Text>
                                </TouchableOpacity>
                            <View style={{width: 16}}/>
                                <TouchableOpacity 
                                    style={[styles.btn]} 
                                    onPress={goNextSlide}>
                                    <Text 
                                        style={{fontFamily: 'poppins-semiBold', fontSize: 15, color: COLORS.primary}}>
                                        Next
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            )  }

                    </View>
            </View>
        );
    };

    const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
    };

    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex +1;
        if (nextSlideIndex != slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current?.scrollToOffset({offset});
            setCurrentSlideIndex(nextSlideIndex);
        }
    };

    const skip = () => {
        const lastSlideIndex = slides.length -1;
        const offset = lastSlideIndex * width;
        ref?.current?.scrollToOffset({offset});
        setCurrentSlideIndex(lastSlideIndex);
    };

    return ( 
        <SafeAreaView
            style={{flex:1, backgroundColor:COLORS.primary}}>
                <StatusBar backgroundColor={COLORS.primary}/>
                <FlatList
                    ref = {ref}
                    onMomentumScrollEnd={updateCurrentSlideIndex}
                    pagingEnabled
                    data={slides}
                    contentContainerStyle= {{height: height * 0.75}}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item}) => <Slide item={item} />}
                />
                <Footer />
            </SafeAreaView> 
        );
};

const styles = StyleSheet.create({
    title: {
       color: COLORS.white,
       fontSize: 22,
       fontFamily: 'poppins-semiBold',
       marginTop: 20,
       textAlign: 'center'
    },
    subtitle: {
       color: COLORS.white,
       fontFamily: 'poppins-regular',
       fontSize: 13,
       marginTop: 10,
       maxWidth: '70%',
       textAlign: 'center',
       lineHeight: 23,
    },
    indicator: {
        height: 2.5,
        width: 10,
        backgroundColor: 'grey',
        marginHorizontal: 3,
        borderRadius: 2
    },
    btn: {
        flex: 1,
        height: 50,
        borderRadius: 5,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default OnboardingScreen;

