import { View, Text, StyleSheet } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

const Header = () => {
  return (
    <View style={style.container}>
      <Entypo name="notification" size={30} color="#efefef" />
      <Text style={style.heading}>Zoom Calls</Text>
      <Entypo name="new-message" size={30} color="#efefef" />
    </View>
  );
};

export default Header;

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  heading: {
    color: "#efefef",
    fontSize: 20,
    fontWeight: "bold",
  },
});
