import * as React from "react";
import {
  Alert,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  FlatList
} from "react-native";
import Constants from "expo-constants";
import { FontAwesome } from "@expo/vector-icons";

import data from "./assets/pokemons.json";

// You can import from local files
import Card from "./components/Card";

const URL =
  "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json";
const IMAGE =
  "https://library.kissclipart.com/20180830/ohe/kissclipart-pokeball-png-pokeball-clipart-pok%C3%A9mon-omega-ruby-ff48e0136ebf3909.png";

const handleClickAbout = () => {
  Alert.alert(
    "React Native Expo Test",
    "This program is a test of performance between ScrollView and FlatList and if one of them block the user activities",
    [{ text: "OK", onPress: () => console.log("OK Pressed") }]
  );
};

export default function App() {
  const [pokemons, setPokemons] = React.useState([]);
  const [isScrollView, setScrolView] = React.useState(false);
  React.useEffect(() => {
    setPokemons(data);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.paragraph}>Pokemons</Text>
        <View style={{ position: "absolute", right: 0, top: 10, width: 70 }}>
          <FontAwesome.Button name="info" onPress={handleClickAbout}>
            About
          </FontAwesome.Button>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          marginVertical: 15,
          justifyContent: "space-between"
        }}
      >
        <Button
          onPress={() => setScrolView(true)}
          title="ScrollView"
          color={isScrollView ? "#27C96D" : "grey"}
          accessibilityLabel="Click here to render the list with ScrollView Component"
        />

        <Button
          onPress={() => setScrolView(false)}
          title="FlatList"
          color={isScrollView ? "grey" : "#354c87"}
          accessibilityLabel="Click here to render the list with ScrollView FlatList"
        />
      </View>
      <List isScrollView={isScrollView} pokemons={pokemons} />
    </View>
  );
}

function List({ isScrollView, pokemons }) {
  return (
    <>
      <FlatList
        style={{ display: isScrollView ? "flex" : "none" }}
        data={pokemons}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card
            image={IMAGE}
            text={item.name.english}
            base={item.base}
            key={item.id}
          />
        )}
      />
      <FlatList
        style={{ display: isScrollView ? "none" : "flex" }}
        data={pokemons}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card
            image={IMAGE}
            text={item.name.english}
            base={item.base}
            key={item.id}
          />
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  }
});
