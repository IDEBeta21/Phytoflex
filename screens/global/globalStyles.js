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
    },
    FABContainer: {
        alignItems: 'center',
        paddingVertical: 5,
        flexGrow: 1,
        backgroundColor: 'white'
    },
    buttonArea: {
        marginTop: 16,
        padding: 10,
        marginStart: 14,
        marginEnd: 14,
        
        backgroundColor: '#639D04',
        borderRadius: 40,
        
        alignItems: 'center', 
        justifyContent: 'center',
        
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 5,
    },
    socmed: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingLeft: 20,
        paddingTop: 10
    }
})