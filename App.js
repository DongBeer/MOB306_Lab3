import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

const App = () => {
  const [data, setData] = useState([
    { name: "Đông ♥", sdt: "0878002632" },
    { name: "Tây ♥", sdt: "0878002632" },
    { name: "Nam ♥", sdt: "0878002632" },
    { name: "Băc ♥", sdt: "0878002632" },
    { name: "Trung ♥", sdt: "0878002632" },
    { name: "Nam ♥", sdt: "0878002632" },
    { name: "Đông ♥", sdt: "0878002632" },
    { name: "Tây ♥", sdt: "0878002632" },
    { name: "Nam ♥", sdt: "0878002632" },
  ]);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        {data.map((item) => (
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.text}>{item.name} </Text>
            <Text style={styles.text}> {item.sdt}</Text>
          </View>
        ))}
      </ScrollView>
      <View>
        <Image
          source={require("./assets/images/background04.jpg")}
          style={styles.img}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  scroll: {
    borderRadius: 10,
    marginTop: 40,
    margin: 20,
    paddingLeft: 10,
    backgroundColor: "#FFCC99",
    height: Dimensions.get("window").height / 7,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  img: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
export default App;
