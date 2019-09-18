import React from "react";
import { View, FlatList } from "react-native";
import { ListItem, Icon } from "react-native-elements";

const renderItem = ({ item }) =>  
  <ListItem
    leftAvatar={<Icon name="movie" />}
    key={item.episode_id}
    title={`Episode ${item.episode_id} - ${item.title}`}
    bottomDivider
    chevron
  />;
  

const keyExtractor = (item, index) => index.toString();

const FilmList = props => {
  return (
    <View>
      <FlatList 
        keyExtractor={keyExtractor}
        data={props.films}
        renderItem={renderItem}
      />
    </View>
  );
};

export default FilmList;
