import { Link } from "expo-router";
import { View, Text } from "react-native";
export default function Page() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Explore</Text>
      <Link
        href="/(protected)/ticket"
        style={{
          padding: 20,
          color: "blue",
        }}
      >
        Check out receipts
      </Link>
    </View>
  );
}
