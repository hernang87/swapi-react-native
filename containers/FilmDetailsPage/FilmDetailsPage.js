import React from 'react';
import { withNavigation } from 'react-navigation';
import { View } from 'react-native';
import { FilmDetails } from '../../components';


const FilmDetailsPage = (props) => {
  const { navigation } = props;
  const film = navigation.getParam('film', {});
  
  return(
    <View>
      <FilmDetails film={film} />
    </View>
  );
};

FilmDetailsPage.navigationOptions = ({ navigation, navigationOptions }) => ({
  title: `Episode ${navigation.getParam('film', {}).episode_id}`
});

export default withNavigation(FilmDetailsPage);