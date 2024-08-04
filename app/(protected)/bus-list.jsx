import { Stack, useLocalSearchParams } from "expo-router";
import { StyleSheet, View, Text } from "react-native";
import { COLORS } from "../../constants/colors";
import { EvilIcons, Feather } from "@expo/vector-icons";

export default function Page() {
  const params = useLocalSearchParams();
  return (
    <Stack.Screen
      options={{
        // title: `${params.origin} to ${params.destination}`,
        // header: () => (
        //   <View style={styles.header}>
        //     <Text>{params.origin}</Text>
        //     <Text>To</Text>
        //     <Text>{params.destination}</Text>
        //   </View>
        // ),
        headerTitle: ({ tintColor }) => (
          <View style={styles.header}>
            <Text style={styles.text}>{params.origin}</Text>
            {/* <Text style={styles.text}>to</Text> */}
            <EvilIcons
              name="arrow-right"
              color={tintColor}
              size={24}
              style={{
                padding: 10,
              }}
            />
            <Text style={styles.text}>{params.destination}</Text>
          </View>
        ),
        // headerTitleStyle: {
        //   color: COLORS.white,
        //   fontSize: 20,
        //   fontWeight: "bold",
        // },
        headerShown: true,
        headerShadowVisible: false,
        headerBackTitle: "Back",
        headerBackTitleVisible: true,
        headerTitleAlign: "center",
        headerTintColor: "#ffff",
        headerStyle: {
          backgroundColor: COLORS.accent,
        },
      }}
    >
      <View style={styles.container}>
        <Text>Bus list</Text>
      </View>
    </Stack.Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    // backgroundColor: COLORS.accent,
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
});
