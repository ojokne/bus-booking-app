import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
import { COLORS } from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Link } from "expo-router";

export default function Page() {
  const [email, setEmail] = useState("");

  const handlePasswordReset = () => {
    // Handle login logic
    console.log("Email:", email);
    console.log("Password:", password);
    router.replace("(drawer)/(tabs)");
  };
  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={styles.container}
    >
      <LinearGradient
        colors={[COLORS.accent, COLORS.primary]}
        style={styles.container}
        locations={[0.2, 1]}
      >
        <View style={{ flex: 2 / 9, justifyContent: "center" }}>
          <Text
            style={{
              fontSize: 25,
              color: COLORS.secondary,
              fontFamily: "Poppins-Bold",
              paddingHorizontal: 30,
            }}
          >
            Forgot password
          </Text>
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.bottomView}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Poppins-Bold",
              }}
            >
              Recover Your Account
            </Text>
            <Text
              style={{
                fontFamily: "Roboto-Regular",
                color: "#888",
                paddingVertical: 10,
              }}
            >
              To reset your password, we’ll send a recovery link to your email.
            </Text>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              cursorColor={COLORS.primary}
              placeholderTextColor="#888"
            />

            <View style={{ width: "100%" }}>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Reset Password</Text>
              </Pressable>
            </View>
            <View style={styles.linkContainer}>
              <Text style={{ fontFamily: "Roboto-Regular", color: "#888" }}>
                Don't have an account?
              </Text>
              <Link href="/sign-up">
                <Text style={styles.linkText}> Sign Up</Text>
              </Link>
            </View>
          </View>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 7 / 9,
    flexGrow: 1,
  },
  bottomView: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    padding: 30,
    paddingTop: 50,
  },
  inputContainer: {
    width: "75%",
    alignItems: "center",
    fontFamily: "Roboto-Regular",
  },

  input: {
    width: "100%",
    padding: 10,
    paddingVertical: Platform.OS === "ios" ? 15 : 10,

    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#ddd",
  },

  linkContainer: {
    marginTop: 20,
    justifyContent: "center",
    flexDirection: "row",
  },
  linkText: {
    color: COLORS.primary,
    fontFamily: "Roboto-Regular",
  },

  button: {
    backgroundColor: COLORS.primary,
    padding: 10,
    paddingVertical: Platform.OS === "ios" ? 12 : 8,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Poppins-Bold",
    textAlign: "center",
    fontSize: 16,
  },
});
