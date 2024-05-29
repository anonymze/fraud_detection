import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { Image, StyleSheet, View, useColorScheme } from "react-native";
import { colors } from "@/styles/colors";

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	let colorScheme = useColorScheme() ?? "light";
	const [loaded] = useFonts({
		SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<Stack
			screenOptions={{
				title: "coucou",
			}}
		>
			<Stack.Screen name="index" />
			<Stack.Screen name="detection" options={
				{
					headerShown: false,
				}
			} />
		</Stack>
	);
}

const styles = StyleSheet.create({
	headerImage: {
		width: 120,
		maxHeight: 50,
		resizeMode: "contain",
	},
	backgroundImage: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		top: 10,
		backgroundColor: "white",
		borderRadius: 5,
		paddingHorizontal: 15,
		paddingVertical: 25,
	},
});
