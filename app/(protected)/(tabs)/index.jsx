import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  Pressable,
  ImageBackground,
} from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { COLORS } from "../../../constants/colors";
import { Entypo, Feather, Fontisto, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function Page() {
  const insets = useSafeAreaInsets();
  const [destination, setDesination] = useState("");
  const [origin, setOrigin] = useState("");
  const router = useRouter();

  const handleFindBus = (origin, destination, photoName) => {
    router.push({
      pathname: "/(protected)/bus-list",
      params: {
        origin,
        destination,
        photoName,
      },
    });
  };

  return (
    <SafeAreaProvider>
      {/* <View
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
      </View> */}

      <ImageBackground
        source={require(`../../../assets/images/jinja-bridge.jpg`)}
        style={[
          {
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            zIndex: 1,
          },
        ]}
        imageStyle={{
          width: "100%",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
        resizeMode="cover"
      >
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.6)", "rgba(0, 0, 0, 0.6)"]} // Gradient from transparent to semi-transparent black
          style={{
            paddingHorizontal: 20,
            paddingTop: insets.top + 20,
            paddingBottom: insets.bottom + 30,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 30,
            }}
          >
            <Ionicons name="menu-outline" size={24} color={"#fff"} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Fontisto name="map-marker-alt" size={12} color={"#fff"} />
              <Text
                style={{
                  fontSize: 12,
                  color: "#fff",
                  fontFamily: "Poppins-Bold",
                  paddingHorizontal: 5,
                }}
              >
                Kampala
              </Text>
              <Entypo name="chevron-small-down" size={24} color={"#fff"} />
            </View>
            <Ionicons name="notifications-sharp" size={24} color={"#fff"} />
          </View>
          <View>
            <Text style={styles.title}>Hi there!, where are you going?</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Enter your destination"
                value={destination}
                onChangeText={setDesination}
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                cursorColor={COLORS.primary}
                placeholderTextColor="#888"
              />
              <Fontisto
                name="map-marker-alt"
                size={14}
                color="#888"
                style={styles.icon}
              />
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "#f5f5f5", marginTop: 20 }}
      >
        {/* upcoming trips header  */}
        <View
          style={{
            paddingVertical: 20,
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Poppins-Medium",
              paddingHorizontal: 20,
              color: "#555",
            }}
          >
            Upcoming Trips
          </Text>

          <Pressable
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Feather
              name="chevron-down"
              color={COLORS.primary}
              size={24}
              style={{
                paddingRight: 20,
              }}
            />
          </Pressable>
        </View>

        {/* upcoming trips card */}
        <View style={styles.upComingTrips}>
          <View>
            <Text style={styles.upComingTripsSubTitle}>24th Nov, 9:45 am</Text>
            <Text style={styles.upComingTripsTitle}>Kampala</Text>
            <Text style={styles.upComingTripsText}>YY Bus Terminal</Text>
          </View>
          <View>
            <Text
              style={[
                styles.upComingTripsSubTitle,
                {
                  textAlign: "right",
                },
              ]}
            >
              4:30 pm
            </Text>
            <Text
              style={[
                styles.upComingTripsTitle,
                {
                  textAlign: "right",
                },
              ]}
            >
              Lira
            </Text>
            <Text
              style={[
                styles.upComingTripsText,
                {
                  textAlign: "right",
                },
              ]}
            >
              YY Bus Terminal
            </Text>
          </View>
        </View>

        {/* popular destinations header */}
        <View
          style={{
            paddingVertical: 20,
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontFamily: "Poppins-Medium",
              paddingHorizontal: 20,
              color: "#555",
            }}
          >
            Popular Destinations
          </Text>

          <Pressable
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Feather
              name="chevron-down"
              color={COLORS.primary}
              size={24}
              style={{
                paddingRight: 20,
              }}
            />
          </Pressable>
        </View>

        {/* popular destinations scroll bar */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Pressable
            style={{
              flex: 1,
              paddingHorizontal: 20,
            }}
            onPress={() => {
              handleFindBus("Kampala", "Lira");
            }}
          >
            <ImageBackground
              // source={{ uri: "https://picsum.photos/id/110/367/267" }}
              source={require("../../../assets/images/lira.jpeg")}
              style={styles.popularDestinationsImageBackground}
              imageStyle={styles.popularDestinationsImage}
              resizeMode="cover"
            >
              <LinearGradient
                colors={["transparent", "rgba(0, 0, 0, 0.5)"]} // Gradient from transparent to semi-transparent black
                style={styles.popularDestinationsTextContainer}
              >
                <Text style={styles.popularDestinationsText}>Lira</Text>
              </LinearGradient>
            </ImageBackground>
          </Pressable>

          <Pressable
            style={{ flex: 1 }}
            onPress={() => {
              handleFindBus("Kampala", "Mbarara");
            }}
          >
            <ImageBackground
              // source={{ uri: "https://picsum.photos/id/25/367/267" }}
              source={require("../../../assets/images/mbarara.jpeg")}
              style={styles.popularDestinationsImageBackground}
              imageStyle={styles.popularDestinationsImage}
              resizeMode="cover"
            >
              <LinearGradient
                colors={["transparent", "rgba(0, 0, 0, 0.8)"]} // Gradient from transparent to semi-transparent black
                style={styles.popularDestinationsTextContainer}
              >
                <Text style={styles.popularDestinationsText}>Mbarara</Text>
              </LinearGradient>
            </ImageBackground>
          </Pressable>
          <Pressable
            style={{ flex: 1, paddingHorizontal: 20 }}
            onPress={() => {
              handleFindBus("Kampala", "Soroti");
            }}
          >
            <ImageBackground
              // source={{ uri: "https://picsum.photos/id/28/367/267" }}
              source={require("../../../assets/images/soroti.jpeg")}
              style={styles.popularDestinationsImageBackground}
              imageStyle={styles.popularDestinationsImage}
              resizeMode="cover"
            >
              <LinearGradient
                colors={["transparent", "rgba(0, 0, 0, 0.5)"]} // Gradient from transparent to semi-transparent black
                style={styles.popularDestinationsTextContainer}
              >
                <Text style={styles.popularDestinationsText}>Soroti</Text>
              </LinearGradient>
            </ImageBackground>
          </Pressable>

          <Pressable
            style={{ flex: 1 }}
            onPress={() => {
              handleFindBus("Kampala", "Kabale");
            }}
          >
            <ImageBackground
              // source={{ uri: "https://picsum.photos/id/29/367/267" }}
              source={require("../../../assets/images/kabale.jpeg")}
              style={styles.popularDestinationsImageBackground}
              imageStyle={styles.popularDestinationsImage}
              resizeMode="cover"
            >
              <LinearGradient
                colors={["transparent", "rgba(0, 0, 0, 0.8)"]} // Gradient from transparent to semi-transparent black
                style={styles.popularDestinationsTextContainer}
              >
                <Text style={styles.popularDestinationsText}>Kabale</Text>
              </LinearGradient>
            </ImageBackground>
          </Pressable>

          <Pressable
            style={{
              flex: 1,
              paddingHorizontal: 20,
            }}
            onPress={() => {
              handleFindBus("Kampala", "Arua");
            }}
          >
            <ImageBackground
              // source={{ uri: "https://picsum.photos/id/62/367/267" }}
              source={require("../../../assets/images/arua.jpeg")}
              style={styles.popularDestinationsImageBackground}
              imageStyle={styles.popularDestinationsImage}
              resizeMode="cover"
            >
              <LinearGradient
                colors={["transparent", "rgba(0, 0, 0, 0.5)"]} // Gradient from transparent to semi-transparent black
                style={styles.popularDestinationsTextContainer}
              >
                <Text style={styles.popularDestinationsText}>Arua</Text>
              </LinearGradient>
            </ImageBackground>
          </Pressable>
        </ScrollView>
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
    paddingVertical: 10,
  },
  inputContainer: {
    marginVertical: 10,
    position: "absolute",
    top: "100%",
    zIndex: 500,
    width: "100%",
  },
  input: {
    width: "100%",
    padding: 10,
    paddingVertical: Platform.OS === "ios" ? 12 : 8,
    paddingLeft: 30,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#888",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  icon: {
    position: "absolute",
    left: 10,
    top: "50%",
    transform: [{ translateY: -7 }],
  },
  upComingTrips: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#888",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  upComingTripsTitle: {
    fontFamily: "Roboto-Medium",
    color: "#555",
    marginVertical: 10,
    fontSize: 18,
  },
  upComingTripsSubTitle: {
    fontFamily: "Roboto-Regular",
    color: "#888",
  },
  upComingTripsText: {
    fontFamily: "Roboto-Regular",
    color: "#A6A6A6",
  },

  popularDestinationsImageBackground: {
    flex: 1,
    height: 200,
    justifyContent: "flex-end",
    width: 140,
  },
  popularDestinationsImage: {
    borderRadius: 10,
  },
  popularDestinationsTextContainer: {
    padding: 10,
    borderBottomLeftRadius: 10, // Match border radius of image
    borderBottomRightRadius: 10, // Match border radius of image
  },
  popularDestinationsText: {
    color: "#fff",
    fontSize: 16,
    paddingHorizontal: 10,
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
