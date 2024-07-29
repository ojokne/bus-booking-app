import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
} from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { COLORS } from "../../../constants/colors";
import { AntDesign, Feather } from "@expo/vector-icons";

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
              fontSize: 20,
              fontFamily: "Poppins-Bold",
              paddingHorizontal: 20,
            }}
          >
            Popular Routes
          </Text>

          {/* <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <View style={[styles.popularRoutes, { marginLeft: 20 }]}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text>Kampala</Text>
                <AntDesign name="swap" size={24} color="black" />
                <Text>Lira</Text>
              </View>
            </View>
          </ScrollView> */}
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
  popularRoutes: {
    flex: 1,
    // backgroundColor: "#fafafa",
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#f0f0f0",
    margin: 5,
    width: 200,
  },
});
