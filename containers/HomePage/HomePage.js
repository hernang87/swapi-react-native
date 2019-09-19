import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import { Header, withTheme } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';
import { FilmList } from '../../components';
import { fetchFilms } from '../../actions/films';

const HomePage = (props) => {
  const onFilmSelect = (film) => props.navigation.navigate('FilmDetailsPage', { film });

  const { films, theme } = props;

  useEffect(() => {
    if (props.films.length === 0) {
      props.fetchFilms();
    }
  }, [])

  const content = props.films.length === 0
    ? (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={theme.colors.primary} />
      </View>
    )
    : <FilmList films={films} onFilmSelect={onFilmSelect} />;
  
  return content;
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const mapStateToProps = (state) => ({
  films: state.films.results
});

export default connect(
  mapStateToProps, 
  { fetchFilms }
)(withNavigation(withTheme(HomePage)));
