import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { COLORS } from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Link } from "expo-router";

export default function Page() {
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
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
            Sign Up
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
              Start Your Journey with Us
            </Text>
            <Text
              style={{
                fontFamily: "Roboto-Regular",
                color: "#888",
                paddingVertical: 10,
              }}
            >
              Sign up with your personal info to get started with us.
            </Text>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              keyboardType="email-address"
              autoCapitalize="none"
              cursorColor={COLORS.primary}
            />
            <TextInput
              placeholder="Contact"
              value={contact}
              onChangeText={setContact}
              style={styles.input}
              keyboardType="phone-pad"
              autoCapitalize="none"
              cursorColor={COLORS.primary}
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              style={styles.input}
              secureTextEntry
              cursorColor={COLORS.primary}
            />
            <View style={styles.forgotPasswordContainer}>
              <Link href="/forgot-password">
                <Text style={styles.forgotPasswordText}>Forgot password?</Text>
              </Link>
            </View>

            <View style={{ width: "100%" }}>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </Pressable>
            </View>
            <View style={styles.linkContainer}>
              <Text style={{ fontFamily: "Roboto-Regular", color: "#888" }}>
                Already have an account?
              </Text>
              <Link href="/sign-in">
                <Text style={styles.linkText}> Sign In</Text>
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
    // justifyContent: "flex-end",
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
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    borderCurve: "continuous",
    backgroundColor: "#ddd",
  },
  forgotPasswordContainer: {
    alignSelf: "flex-end",
    paddingVertical: 20,
  },
  forgotPasswordText: {
    color: COLORS.primary,
    textAlign: "right",
    fontFamily: "Roboto-Regular",
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
    borderRadius: 10,
  },
  buttonText: {
    color: COLORS.secondary,
    fontFamily: "Poppins-Bold",
    textAlign: "center",
    fontSize: 16,
  },
});
