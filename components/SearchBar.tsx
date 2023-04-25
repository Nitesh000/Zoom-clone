import { View, Text, StyleSheet, TextInput } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";

const SearchBar = () => {
  return (
    <View style={style.container}>
      <Fontisto name="search" size={20} color={"#858585"} />
      <Text style={style.textSearchBar}>Search</Text>
    </View>
  );
};

export default SearchBar;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#333333",
    flexDirection: "row",
    paddingHorizontal: 10,
    height: 40,
    alignItems: "center",
    borderRadius: 15,
  },
  textSearchBar: {
    color: "#858585",
    paddingLeft: 10,
    fontSize: 20,
  },
});
