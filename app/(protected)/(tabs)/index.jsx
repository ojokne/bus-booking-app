import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  Pressable,
} from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { COLORS } from "../../../constants/colors";
import { Feather } from "@expo/vector-icons";
import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
export default function Page() {
  const insets = useSafeAreaInsets();
  const [destination, setDesination] = useState("");

  return (
    <SafeAreaProvider>
      <View
        style={[
          styles.headerContainer,
          {
            paddingTop: insets.top + 30,
            paddingBottom: insets.bottom + 30,
            paddingHorizontal: 20,
          },
        ]}
      >
        <Text style={styles.title}>Hi there!, where are you going?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Search"
            value={destination}
            onChangeText={setDesination}
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            cursorColor={COLORS.primary}
            placeholderTextColor="#888"
          />
          <Feather name="search" size={20} color="#888" style={styles.icon} />
        </View>
      </View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "#fff" }}
      >
        <View style={{ paddingVertical: 10 }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Poppins-Bold",
              paddingHorizontal: 20,
              color: "#555",
            }}
          >
            Top destinations from kampala
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View style={styles.topPicks}>
              <Image
                style={styles.image}
                source="https://thumbs.dreamstime.com/b/beautiful-nature-thailand-james-bond-island-reflection-reflects-water-near-phuket-61039131.jpg?w=768"
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={1000}
              />
              <View style={styles.textContainer}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "Roboto-Medium",
                    color: "#888",
                  }}
                >
                  Lira, Uganda
                </Text>
                <Text
                  style={{
                    color: "#888",
                    fontSize: 10,
                    paddingVertical: 5,
                    fontFamily: "Roboto-Light",
                  }}
                >
                  From UGX
                  <Text
                    style={{
                      color: "#555",
                      fontSize: 18,
                      fontFamily: "Poppins-Bold",
                      paddingLeft: 5,
                    }}
                  >
                    {" "}
                    30,000
                  </Text>
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: "Roboto-Light",
                    color: "#888",
                    marginBottom: 10,
                    textDecorationLine: "underline",
                  }}
                >
                  Find return trips
                </Text>
                <Pressable style={styles.button}>
                  <Text style={styles.buttonText}>Find a bus</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.topPicks}>
              <Image
                style={styles.image}
                source="https://thumbs.dreamstime.com/b/scenic-nature-landscape-path-near-lake-forest-path-tunnel-trees-near-lake-scenic-nature-autumn-landscape-panorama-view-115358410.jpg?w=1400"
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={1000}
              />
              <View style={styles.textContainer}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "Roboto-Medium",
                    color: "#888",
                  }}
                >
                  Kasese, Uganda
                </Text>
                <Text
                  style={{
                    color: "#888",
                    fontSize: 10,
                    paddingVertical: 5,
                    fontFamily: "Roboto-Light",
                  }}
                >
                  From UGX
                  <Text
                    style={{
                      color: "#555",
                      fontSize: 18,
                      fontFamily: "Poppins-Bold",
                      paddingLeft: 5,
                    }}
                  >
                    {" "}
                    50,000
                  </Text>
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: "Roboto-Light",
                    color: "#888",
                    marginBottom: 10,
                    textDecorationLine: "underline",
                  }}
                >
                  Find return trips
                </Text>
                <Pressable style={styles.button}>
                  <Text style={styles.buttonText}>Find a bus</Text>
                </Pressable>
              </View>
            </View>

            <View style={styles.topPicks}>
              <Image
                style={styles.image}
                source="https://thumbs.dreamstime.com/b/autumn-fall-nature-scene-autumnal-park-beautiful-77869343.jpg?w=768"
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={1000}
              />
              <View style={styles.textContainer}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "Roboto-Medium",
                    color: "#888",
                  }}
                >
                  Arua, Uganda
                </Text>
                <Text
                  style={{
                    color: "#888",
                    fontSize: 10,
                    paddingVertical: 5,
                    fontFamily: "Roboto-Light",
                  }}
                >
                  From UGX
                  <Text
                    style={{
                      color: "#555",
                      fontSize: 18,
                      fontFamily: "Poppins-Bold",
                      paddingLeft: 5,
                    }}
                  >
                    {" "}
                    70,000
                  </Text>
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: "Roboto-Light",
                    color: "#888",
                    marginBottom: 10,
                    textDecorationLine: "underline",
                  }}
                >
                  Find return trips
                </Text>
                <Pressable style={styles.button}>
                  <Text style={styles.buttonText}>Find a bus</Text>
                </Pressable>
              </View>
            </View>

            <View style={styles.topPicks}>
              <Image
                style={styles.image}
                source="https://thumbs.dreamstime.com/b/cockatoo-parrot-sitting-green-tree-branch-australia-big-white-yellow-nature-background-sulphur-crested-cacatua-307519612.jpg?w=768"
                placeholder={{ blurhash }}
                contentFit="cover"
                transition={1000}
              />
              <View style={styles.textContainer}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: "Roboto-Medium",
                    color: "#888",
                  }}
                >
                  Mbarara, Uganda
                </Text>
                <Text
                  style={{
                    color: "#888",
                    fontSize: 10,
                    paddingVertical: 5,
                    fontFamily: "Roboto-Light",
                  }}
                >
                  From UGX
                  <Text
                    style={{
                      color: "#555",
                      fontSize: 18,
                      fontFamily: "Poppins-Bold",
                      paddingLeft: 5,
                    }}
                  >
                    {" "}
                    25,000
                  </Text>
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    fontFamily: "Roboto-Light",
                    color: "#888",
                    marginBottom: 10,
                    textDecorationLine: "underline",
                  }}
                >
                  Find return trips
                </Text>
                <Pressable style={styles.button}>
                  <Text style={styles.buttonText}>Find a bus</Text>
                </Pressable>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: COLORS.accent,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "Poppins-Bold",
  },
  inputContainer: {
    position: "relative",
    marginVertical: 10,
  },
  input: {
    width: "100%",
    padding: 10,
    paddingVertical: Platform.OS === "ios" ? 12 : 8,
    paddingRight: 35,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  icon: {
    position: "absolute",
    right: 10,
    top: "50%",
    transform: [{ translateY: -10 }],
  },
  topPicks: {
    borderRadius: 10,
    width: 250,
    height: 300,
    margin: 10,
    elevation: 2,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    flex: 1,
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  textContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 5,
  },
  button: {
    padding: 10,
    paddingVertical: Platform.OS === "ios" ? 15 : 10,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
    borderColor: "#555",
    borderWidth: StyleSheet.hairlineWidth,
  },
  buttonText: {
    color: "#555",
    fontFamily: "Poppins-Regular",
    fontSize: 12,
  },
});
