import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{ 
          headerTitle: "Home",
          headerStyle: { backgroundColor: '#007AFF' },
          headerTintColor: '#fff',
        }} 
      />
      <Stack.Screen 
        name="scanner" 
        options={{ 
          headerTitle: "Scanner",
          headerStyle: { backgroundColor: '#007AFF' },
          headerTintColor: '#fff',
        }} 
      />
      
    </Stack>
  );
}