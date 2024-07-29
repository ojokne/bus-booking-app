import { View, StyleSheet, Text, Pressable, Platform } from "react-native";
import { COLORS } from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Link } from "expo-router";

export default function Page() {
  return (
    <LinearGradient
      colors={[COLORS.accent, COLORS.primary]}
      style={styles.container}
      locations={[0.2, 1]}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          padding: 30,
        }}
      >
        <Image
          style={styles.image}
          source={require("../assets/images/bus.png")}
          contentFit="contain"
          transition={1000}
        />
        <Text style={styles.title}>We're</Text>
        <Text style={styles.title}>going</Text>
        <Text style={styles.title}>on a trip</Text>
        <Text style={styles.subTitle}>Are you in?</Text>

        <Link href="/sign-in" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Get Started</Text>
          </Pressable>
        </Link>
      </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: "100%",
  },
  title: {
    fontSize: 45,
    color: COLORS.secondary,
    fontFamily: "Poppins-Bold",
    lineHeight: 60,
  },
  subTitle: {
    fontSize: 16,
    color: COLORS.secondary,
    marginBottom: 30,
    fontFamily: "Roboto-Regular",
  },
  button: {
    backgroundColor: COLORS.secondary,
    padding: 10,
    paddingVertical: Platform.OS === "ios" ? 15 : 10,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.primary,
    fontFamily: "Poppins-Bold",
    fontSize: 16,
  },
});
