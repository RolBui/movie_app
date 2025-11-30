// file: app/(auth)/_layout.tsx

import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ title: "Index", headerShown: false }}
      />
      <Stack.Screen
        name="sign_in"
        options={{ title: "Login", headerShown: false, presentation: "modal" }}
      />

      <Stack.Screen
        name="sign_up"
        options={{
          title: "Sign Up",
          headerShown: false,
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
