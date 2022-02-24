import React from 'react';
import { Text as XText } from 'react-native';
import Colors from '../utils/globalColors';

export const PFText = ({children, style, weight = 'light', color, center, size, numberOfLines,adjustsFontSizeToFit}) => {
    let fontStyle = ''
    let fontColor = color ? { color: color } : { color: Colors.primary }
    let fontSize = size ? { fontSize: size } : {}
    let fontCenter = center ? { textAlign: 'center' } : {}

    switch (weight) { 
        case 'semi-bold':
            fontStyle = 'poppins-semiBold'
            break;
        case 'italic':
            fontStyle = 'poppins-italic'
            break;
        case 'light':
            fontStyle = 'poppins-light'
            break;
        case 'medium':
            fontStyle = 'poppins-regular'
            break;
        default:
            fontStyle = 'poppins-light'
    }


    return (
            <XText 
                style={{ ...style, fontFamily: fontStyle, ...fontColor, ...fontSize, ...fontCenter }}
                numberOfLines={numberOfLines}
                adjustsFontSizeToFit={adjustsFontSizeToFit} 
            >
                {children}
            </XText> 
    )
}

// export default PFText;
