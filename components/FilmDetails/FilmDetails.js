import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const FilmDetails = props => {
  const { film } = props;

  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>{film.title}</Text>      
      <Text style={styles.crawl}>{film.opening_crawl}</Text>      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10    
  },
  title: {
    textAlign: 'center'
  },
  crawl: {
    marginTop: 20,
    textAlign: 'center'
  }
})


export default FilmDetails;