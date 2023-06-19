import React from 'react'
import { TextInput, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import SearchResults from './SearchResults'

const Search = () => (
<ScrollView style={styles.search} showsVerticalScrollIndicator={false}>
<TextInput style={styles.art_caption} placeholder={'Art Caption'} />
<SearchResults item={item.search_results}/>
</ScrollView>
)

export default Search;

const styles = StyleSheet.create({
    'art_caption': {
        'fontSize': 15,
        'fontWeight': '400',
        'padding': 10,
        'margin': 5,
        'backgroundColor': 'whitesmoke',
        'borderWidth': 1
    }
});