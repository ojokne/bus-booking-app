import { View, StyleSheet, Text, Pressable } from "react-native";
import { COLORS } from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";

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
          //   placeholder={{ blurhash }}
          contentFit="contain"
          transition={1000}
        />
        <Text style={[styles.title, { fontFamily: "MontserratRegular" }]}>
          We're
        </Text>
        <Text style={styles.title}>going</Text>
        <Text style={styles.title}>on a trip</Text>
        <Text style={styles.subTitle}>Are you in?</Text>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </Pressable>
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
    fontSize: 50,
    color: COLORS.secondary,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
    color: COLORS.secondary,
    marginVertical: 30,
  },
  button: {
    backgroundColor: COLORS.secondary,
    padding: 10,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.primary,
    fontWeight: "bold",
  },
});
