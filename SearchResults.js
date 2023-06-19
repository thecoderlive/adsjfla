import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const searchResultsItem = ({ item }) => (
<View style={styles.search_results_item}>
<Image
    style={styles.art_photo}
    source={{uri: item.art_photo}}
    />
<Text style={styles.art_caption}>{item.art_caption}</Text>
</View>
  );

const SearchResults = ({ item }) => (
<FlatList
    style={styles.search_results}
    data={item}
    renderItem={searchResultsItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default SearchResults;

const styles = StyleSheet.create({
    'art_photo': {
        'width': '50vw',
        'height': '100vw',
        'marginTop': 5
    },
    'art_caption': {
        'color': 'hsl(274,100%,60%)',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});