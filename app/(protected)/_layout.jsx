import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ticket"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="bus-list"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="bus-details"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="bus-seats"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
