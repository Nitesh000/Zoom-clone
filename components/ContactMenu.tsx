import { View, Text, StyleSheet, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

type ContactType = {
  type: string;
  name?: string;
  photo?: string;
};

const contactMenuButtons: ContactType[] = [
  {
    type: "starred",
  },
  {
    type: "contact",
    name: "Nitesh Tudu",
    photo: "https://i.redd.it/7f0j0ftjzn431.jpg",
  },
  {
    type: "contact",
    name: "Shakti Mahato",
    photo:
      "https://th.bing.com/th/id/OIP.3Z6zHg7YyTjwFaoNSfi9agAAAA?pid=ImgDet&rs=1",
  },
  {
    type: "contact",
    name: "Jackson Kujur",
    photo:
      "https://yt3.ggpht.com/a/AGF-l7-pEYtWsPHJhimhRgh5ULsA3rexfDwzOjmzkw=s900-c-k-c0xffffffff-no-rj-mo",
  },
];

const ContactMenu = () => {
  return (
    <View style={styles.container}>
      {/*Contact Container*/}
      {contactMenuButtons.map((item, i) => {
        return (
          <View key={i} style={styles.row}>
            {/* Image */}
            {item.type == "starred" ? (
              <View style={styles.starrtedIcon}>
                <AntDesign name="star" size={30} color="#efefef" />
              </View>
            ) : (
              <View style={styles.starrtedIcon}>
                <Image source={{ uri: item.photo }} style={styles.image} />
              </View>
            )}
            {item.type == "starred" ? (
              <Text style={styles.text}>Starred</Text>
            ) : (
              <Text style={styles.text}>{item.name}</Text>
            )}
          </View>
        );
      })}
    </View>
  );
};

export default ContactMenu;

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    columnGap: 10,
  },
  starrtedIcon: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
});
