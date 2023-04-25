import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const items = [
  {
    id: 1,
    name: "New Meeting",
    iconName: "video-camera",
    customColor: "#FF751F",
  },
  {
    id: 2,
    name: "Join",
    iconName: "plus-square",
  },
  {
    id: 3,
    name: "Schedule",
    iconName: "calendar",
  },
  {
    id: 4,
    name: "Share Screen",
    iconName: "upload",
  },
];

const MenuButtons = () => {
  return (
    <View style={style.container}>
      {items.map((item) => {
        return (
          <View style={style.buttonContainer} key={item.id}>
            <TouchableOpacity
              style={{
                ...style.button,
                backgroundColor: item.customColor
                  ? item.customColor
                  : "#0470DC",
              }}
            >
              <FontAwesome name={item.iconName} size={30} color="#efefef" />
            </TouchableOpacity>
            <Text style={style.buttonText}>{item.name}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default MenuButtons;

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  button: {
    height: 60,
    width: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: "#858585",
    fontSize: 15,
    paddingTop: 10,
  },
});
