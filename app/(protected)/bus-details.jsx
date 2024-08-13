import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  FlatList,
} from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { COLORS } from "../../constants/colors";
import {
  Entypo,
  Feather,
  Fontisto,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import BusItem from "../../components/BusItem";

export default function Page() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const { origin, destination } = useLocalSearchParams();

  const a = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <SafeAreaProvider>
      <ImageBackground
        source={require(`../../assets/images/jinja-bridge.jpg`)}
        resizeMode="center"
        style={{
          width: "100%",
          height: 300,
        }}
        imageStyle={{
          width: "100%",
          height: "100%",
        }}
      >
        <LinearGradient
          colors={["rgba(0, 0, 0, 0.3)", "transparent"]} // Gradient from transparent to semi-transparent black
          style={{
            paddingTop: insets.top + 20,
            paddingBottom: insets.bottom + 30,
            height: 300,
          }}
        >
          <Pressable
            onPress={() => {
              router.back();
            }}
            style={{ paddingHorizontal: 20 }}
          >
            <Feather name="arrow-left" size={24} color="#fff" />
          </Pressable>
        </LinearGradient>
      </ImageBackground>

      <View style={styles.curvedContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}
        >
          <View>
            <Text style={styles.title}>YY Coaches</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: -5,
              }}
            >
              <Fontisto
                name="map-marker-alt"
                size={12}
                color={COLORS.primary}
              />
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: "Roboto-Regular",
                  paddingHorizontal: 5,
                  color: "#888",
                }}
              >
                Kampala - Lira
              </Text>
            </View>
          </View>
          <Text style={styles.title}>UGX 30,000</Text>
        </View>
        {/* <View
          style={{
            flexDirection: "row",
            //   justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Fontisto name="map-marker-alt" size={12} color={COLORS.primary} />
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Poppins-Bold",
              paddingHorizontal: 5,
            }}
          >
            Kampalaa
          </Text>
        </View> */}
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
  },
  curvedContainer: {
    backgroundColor: "#f5f5f5",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 200,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
