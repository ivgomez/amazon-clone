import { StyledStack } from "@/components/navigation/stack";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import '../global.css';

const InitialLayout = () => {
  return (
    <StyledStack contentClassName="bg-gray-100 dark:bg-dark" headerClassName="bg-dark text-white">
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </StyledStack>
  )
};

const RootLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <InitialLayout />
    </ThemeProvider>
  )
};

export default RootLayout;
