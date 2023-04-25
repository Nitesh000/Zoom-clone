import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ContactMenu from "../components/ContactMenu";
import Header from "../components/Header";
import MenuButtons from "../components/MenuButtons";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <View style={style.container}>
      <SafeAreaView style={{ height: "100%" }}>
        {/* Header */}
        {/*Search-Bar */}
        {/* Menu Butons */}
        {/* Contact Menu */}
        <Header />
        <SearchBar />
        <MenuButtons />
        <ContactMenu />
      </SafeAreaView>
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    padding: 15,
  },
});
