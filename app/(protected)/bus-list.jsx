import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Platform,
  Pressable,
  ImageBackground,
  FlatList,
} from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { COLORS } from "../../constants/colors";
import { Entypo, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
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
      <LinearGradient
        colors={[COLORS.accent, COLORS.primary]} // Gradient from transparent to semi-transparent black
        style={{
          paddingTop: insets.top + 20,
          paddingBottom: insets.bottom + 30,
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
        >
          <Text style={styles.title}>{origin}</Text>
          <MaterialCommunityIcons name="bus-side" size={36} color="#fff" />

          <Text style={styles.title}>{destination}</Text>
        </View>
        <View style={styles.scrollViewContainer}>
          <FlatList
            data={a}
            renderItem={({ item }) => <BusItem />}
            style={{
              paddingHorizontal: 20,
            }}
            contentContainerStyle={{
              paddingBottom: 170,
            }}
            ListHeaderComponent={
              <Pressable style={styles.dateContainer}>
                <Feather name="calendar" size={18} color={COLORS.primary} />

                <Text
                  style={{
                    color: COLORS.primary,
                    fontFamily: "Roboto-Bold",
                    paddingLeft: 5,
                  }}
                >
                  Monday, 01 Nov 2024
                </Text>
                <Entypo
                  name="chevron-small-down"
                  size={28}
                  color={COLORS.primary}
                />
              </Pressable>
            }
          />
        </View>
      </LinearGradient>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: "#fff",
    fontFamily: "Poppins-Bold",
    paddingVertical: 10,
  },
  scrollViewContainer: {
    backgroundColor: "#f5f5f5",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "100%",
    width: "100%",
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
