import { StyleSheet, View, FlatList as FList, Image } from 'react-native'
import React from 'react'
// import {ActivityIndicator} from '../FiplyComponents/ActivityIndicator'
// import {Text} from '../FiplyComponents/Text'

import { PFText as Text, PFActivityIndicator as ActivityIndicator } from '..'
import Colors from '../../utils/globalColors'
// import Colors from '../../../utils/Colors'


export const PFFlatList = ({
    data, 
    isLoading = false,
    renderItem = () => {},
    numColumns = 1,
    styles = {},
    noDataMessage = 'No Data',
    renderHeader,
    nestedScrollEnabled = false,
    onEndReached = () => {},
    onEndReachedThreshold = .5,
    extraData,
    ListFooterComponent,
    flatlistref = null,
    maxToRenderPerBatch=10,
    initialNumToRender=10,
}) => {
  return (
    <View style={{ flex: 1, ...styles }}	>
 
        {
            data.length > 0 || isLoading == true 
            ? (
                <FList
                    ref={flatlistref}
                    data={data}
                    keyExtractor={(item) => item.id}
                    numColumns={numColumns}
                    renderItem={({item, index}) => renderItem(item, index)}
                    ListHeaderComponent={renderHeader}
                    ListFooterComponent={
                        <View>
                            {
                            isLoading 
                            ? <View>
                                    <ActivityIndicator visible={true}/>
                                </View> 
                            : null 
                            }
                            {ListFooterComponent}
                        </View>
                    }
                    nestedScrollEnabled={nestedScrollEnabled}
                    onEndReached={onEndReached}
                    onEndReachedThreshold={onEndReachedThreshold}
                    extraData={extraData}
                    showsVerticalScrollIndicator={false}
                    initialNumToRender={initialNumToRender}
                    maxToRenderPerBatch={maxToRenderPerBatch}
                />
            )
            : (
                <View style={noDataStyles.container}>
                    <Text weight='medium' size={18} center>{noDataMessage}</Text>
                    <View style={noDataStyles.imgContainer}>
                        {/* <Image 
                            source={ require('../../../assets/img/nomessage.png') }
                            style={noDataStyles.img}
                        /> */}
                    </View>
                </View>
            )

        }

    </View>
  );
};


const noDataStyles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    imgContainer:{
        width: 300,
        height: 300
    },
    img:{
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    },
    loadingIcon:{
        
    }
});