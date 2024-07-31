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
import { Feather, Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Page() {
  const insets = useSafeAreaInsets();
  const [destination, setDesination] = useState("");

  return (
    <SafeAreaProvider style={{ backgroundColor: "#fff" }}>
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
      {/* <View style={{ padding: 20 }}>
        <View
          style={{
            borderColor: "#eee",
            borderWidth: StyleSheet.hairlineWidth,
            padding: 10,
            borderRadius: 10,
            elevation: 2,
            backgroundColor: "#fff",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                backgroundColor: "#f0f0f0",
                borderRadius: 50,
                padding: 10,
              }}
            >
              <Ionicons
                name="bus"
                size={36}
                color="#000" // You can set the color of the icon if needed
              />
            </View>
            <Text
              style={{
                // fontSize: 18,
                fontFamily: "Poppins-Regular",
              }}
            >
              YY Coaches
            </Text>
            <Text
              style={{
                // fontSize: 18,
                fontFamily: "Roboto-Regular",
                color: "#888",
              }}
            >
              UAM-123-X
            </Text>
          </View>
        </View>
      </View> */}

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

          {/* northern */}
          <View>
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                paddingHorizontal: 20,
                color: "#555",
              }}
            >
              Northern Uganda
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 10,
              }}
            >
              <View style={styles.topPicks}>
                <Image
                  style={styles.image}
                  source="https://picsum.photos/id/110/367/267"
                  placeholder={{ blurhash }}
                  contentFit="cover"
                  transition={1000}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.townName}>Lira, Uganda</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.fromText}>From UGX</Text>
                    <Text style={styles.amount}>30,000</Text>
                  </View>

                  <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Find a bus</Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.topPicks}>
                <Image
                  style={styles.image}
                  source="https://picsum.photos/id/25/367/267"
                  placeholder={{ blurhash }}
                  contentFit="cover"
                  transition={1000}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.townName}>Gulu, Uganda</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.fromText}>From UGX</Text>
                    <Text style={styles.amount}>30,000</Text>
                  </View>

                  <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Find a bus</Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.topPicks}>
                <Image
                  style={styles.image}
                  source="https://picsum.photos/id/28/367/267"
                  placeholder={{ blurhash }}
                  contentFit="cover"
                  transition={1000}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.townName}>Arua, Uganda</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.fromText}>From UGX</Text>
                    <Text style={styles.amount}>30,000</Text>
                  </View>

                  <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Find a bus</Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.topPicks}>
                <Image
                  style={styles.image}
                  source="https://picsum.photos/id/29/367/267"
                  placeholder={{ blurhash }}
                  contentFit="cover"
                  transition={1000}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.townName}>Kitgum, Uganda</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.fromText}>From UGX</Text>
                    <Text style={styles.amount}>30,000</Text>
                  </View>

                  <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Find a bus</Text>
                  </Pressable>
                </View>
              </View>
            </ScrollView>
          </View>

          {/* western */}
          <View>
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                paddingHorizontal: 20,
                color: "#555",
              }}
            >
              Western Uganda
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 10,
              }}
            >
              <View style={styles.topPicks}>
                <Image
                  style={styles.image}
                  source="https://picsum.photos/id/110/367/267"
                  placeholder={{ blurhash }}
                  contentFit="cover"
                  transition={1000}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.townName}>Mbarara, Uganda</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.fromText}>From UGX</Text>
                    <Text style={styles.amount}>30,000</Text>
                  </View>

                  <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Find a bus</Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.topPicks}>
                <Image
                  style={styles.image}
                  source="https://picsum.photos/id/25/367/267"
                  placeholder={{ blurhash }}
                  contentFit="cover"
                  transition={1000}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.townName}>Kasese, Uganda</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.fromText}>From UGX</Text>
                    <Text style={styles.amount}>30,000</Text>
                  </View>

                  <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Find a bus</Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.topPicks}>
                <Image
                  style={styles.image}
                  source="https://picsum.photos/id/28/367/267"
                  placeholder={{ blurhash }}
                  contentFit="cover"
                  transition={1000}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.townName}>Kabale, Uganda</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.fromText}>From UGX</Text>
                    <Text style={styles.amount}>30,000</Text>
                  </View>

                  <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Find a bus</Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.topPicks}>
                <Image
                  style={styles.image}
                  source="https://picsum.photos/id/29/367/267"
                  placeholder={{ blurhash }}
                  contentFit="cover"
                  transition={1000}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.townName}>Isingiro, Uganda</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.fromText}>From UGX</Text>
                    <Text style={styles.amount}>30,000</Text>
                  </View>

                  <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Find a bus</Text>
                  </Pressable>
                </View>
              </View>
            </ScrollView>
          </View>

          {/* eastern */}
          <View>
            <Text
              style={{
                fontFamily: "Poppins-Bold",
                paddingHorizontal: 20,
                color: "#555",
              }}
            >
              Eastern Uganda
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 10,
              }}
            >
              <View style={styles.topPicks}>
                <Image
                  style={styles.image}
                  source="https://picsum.photos/id/110/367/267"
                  placeholder={{ blurhash }}
                  contentFit="cover"
                  transition={1000}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.townName}>Mbale, Uganda</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.fromText}>From UGX</Text>
                    <Text style={styles.amount}>30,000</Text>
                  </View>

                  <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Find a bus</Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.topPicks}>
                <Image
                  style={styles.image}
                  source="https://picsum.photos/id/25/367/267"
                  placeholder={{ blurhash }}
                  contentFit="cover"
                  transition={1000}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.townName}>Tororo, Uganda</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.fromText}>From UGX</Text>
                    <Text style={styles.amount}>30,000</Text>
                  </View>

                  <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Find a bus</Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.topPicks}>
                <Image
                  style={styles.image}
                  source="https://picsum.photos/id/28/367/267"
                  placeholder={{ blurhash }}
                  contentFit="cover"
                  transition={1000}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.townName}>kapchorwa, Uganda</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.fromText}>From UGX</Text>
                    <Text style={styles.amount}>30,000</Text>
                  </View>

                  <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Find a bus</Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.topPicks}>
                <Image
                  style={styles.image}
                  source="https://picsum.photos/id/29/367/267"
                  placeholder={{ blurhash }}
                  contentFit="cover"
                  transition={1000}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.townName}>Soroti, Uganda</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={styles.fromText}>From UGX</Text>
                    <Text style={styles.amount}>30,000</Text>
                  </View>

                  <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Find a bus</Text>
                  </Pressable>
                </View>
              </View>
            </ScrollView>
          </View>
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
    // width: 250,
    height: 250,
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

  townName: {
    fontFamily: "Roboto-Light",
    color: "#888",
    marginTop: 10,
  },
  fromText: {
    color: "#888",
    fontSize: 10,
    paddingVertical: 5,
    fontFamily: "Roboto-Light",
  },
  amount: {
    color: "#555",
    fontFamily: "Poppins-Bold",
    paddingHorizontal: 5,
  },
  button: {
    padding: 10,
    paddingVertical: Platform.OS === "ios" ? 15 : 10,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
    borderColor: "#555",
    borderWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
  buttonText: {
    color: "#555",
    fontFamily: "Poppins-Regular",
    fontSize: 12,
  },
});
