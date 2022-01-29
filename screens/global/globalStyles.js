import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 20,
    },
    textContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    appBarText: {
        fontFamily: 'poppins-semiBold',
        fontSize: 18,
        color: '#1D4123'
    },
    statusText: {
        fontFamily: 'poppins-light',
        fontSize: 8,
        color: '#1D4123'
    },
    paragraphText: {
        fontFamily: 'poppins-regular',
        fontSize: 12,
        color: '#1D4123',
        marginVertical: 8,
        lineHeight: 20,
    },
    titleText: {
        fontFamily: 'poppins-semiBold',
        fontSize: 14,
        color: '#1D4123'
    }
})