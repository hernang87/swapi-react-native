import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Header, withTheme } from 'react-native-elements';
import { connect } from 'react-redux';
import { FilmList } from '../../components';
import { fetchFilms } from '../../actions/films';

const HomePage = (props) => {
  const { films, theme } = props;

  useEffect(() => {
    props.fetchFilms();
  }, [])

  const content = props.films.length === 0
    ? <ActivityIndicator size="large" color={theme.colors.primary} />
    : <FilmList films={films} />;
  
  return (
    <View>
      <Header 
        centerComponent={{ text: 'Star Wars' }}      
      />
      { content }
    </View>
  );
}

const mapStateToProps = (state) => ({
  films: state.films.results
});

export default connect(
  mapStateToProps, 
  { fetchFilms }
)(withTheme(HomePage));
