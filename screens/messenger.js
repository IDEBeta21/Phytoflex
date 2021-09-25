import React from 'react'
import { View, Text } from 'react-native'

export default function messenger() {

    const [name, setname] = useState('Ian');
    const [password, setpassword] = useState('pass1');

    return (
        <View>
            <Text>{name}</Text>
        </View>
    )
}