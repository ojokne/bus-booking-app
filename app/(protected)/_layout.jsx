import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="ticket"
        options={{
          // headerTransparent: true,
          // headerTitle:"Your Ticket",
          // headerTintColor: "#fff",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
