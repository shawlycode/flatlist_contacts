import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import {
  FontAwesome5,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
const DATA = [
  {
    img: require("./assets/nojan.jpg"),
    name: " orlando",

    id: "612bhjshchatskbaskdjhv",
  },
  {
    img: require("./assets/nojan.jpg"),
    name: "michaiah",

    id: "623hbhsacastiu18973dd737dvsh6",
  },
  {
    img: require("./assets/gift.jpg"),
    name: "blessing",

    id: "6166fvhvsahvcjasjkkj",
  },
  {
    img: require("./assets/nojan.jpg"),
    name: "Serah",

    id: 3676236362398209,
  },
  {
    img: require("./assets/gift.jpg"),
    name: "blessing",

    id: "328hhavsxgtadkmmdwi83",
  },
  {
    img: require("./assets/nojan.jpg"),
    name: "Mathilda",

    id: "663b78328tbjhdscsdu",
  },
  {
    img: require("./assets/gift.jpg"),
    name: "Kutina",

    id: "673gtqlsbbvc83983v",
  },
  {
    img: require("./assets/nojan.jpg"),
    name: "Delmwine",

    id: "09099ccsbcbdc6563njsscd",
  },
  {
    img: require("./assets/gift.jpg"),
    name: "michaiah",

    id: "12hvtyctubklkjbx77",
  },
  {
    img: require("./assets/nojan.jpg"),
    name: "Bean",

    id: "88t3217r7bfg1gvbgd",
  },
  {
    img: require("./assets/gift.jpg"),
    name: "Raymond",

    id: "bsdc7c87t2371p209393",
  },
  {
    img: require("./assets/nojan.jpg"),
    name: "blessing",

    id: "78321bbhgsrraajslkdksduh",
  },
];
const Item = ({ title, name, img }) => (
  <View style={styles.item}>
    <View style={styles.mainContainer}>
      <Image source={img} style={styles.img} />
      <View style={styles.mainItem}>
        <View style={{ marginRight: 30 }}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.contact}>478-4374-3989</Text>
        </View>

        <FontAwesome5
          name="phone-alt"
          size={28}
          color="black"
          style={styles.icons}
        />
        <MaterialCommunityIcons
          name="message-processing-outline"
          size={28}
          color="black"
          style={styles.icons}
        />
        <Feather
          name="more-vertical"
          size={28}
          color="black"
          style={styles.icons}
        />
      </View>
      <Text>{title}</Text>
    </View>
  </View>
);
export default function App() {
  const renderItem = ({ item }) => (
    <Item img={item.img} title={item.contact} name={item.name} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
  },
  mainContainer: {
    flex: 1,
    flexDirection: "row",
  },
  mainItem: {
    flexDirection: "row",
    paddingLeft: 25,
  },
  item: {
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 30,
    fontStyle: "italic",
    fontWeight: "bold",
    padding: 8,
    color: "#10015B",
  },
  contact: {
    fontSize: 18,
    fontStyle: "italic",
    fontWeight: "600",
    color: "#E1003A",
  },
  img: {
    height: 80,
    width: 80,
    borderRadius: 100,
  },
  icons: {
    padding: 20,
    color: "#8E02BB",
  },
});
