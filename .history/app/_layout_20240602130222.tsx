import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
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
				headerShown: true,
				headerShadowVisible: false,
				headerStyle: {
					backgroundColor: colors[colorScheme].backgroundHeader,
				},
				headerTintColor: colors[colorScheme].tintHeader,
				headerTitleStyle: {
					fontWeight: "bold",
				},
				headerLeft: (_) => {
					return <Image source={require("@/assets/images/logo-1.png")} style={[styles.headerImage, { left: 15 }]} />;
				},
				headerRight(_) {
					return (
						<View style={{ ...styles.backgroundImage, right: 15 }}>
							<Image source={require("@/assets/images/logo-2.png")} style={styles.headerImage} />
						</View>
					);
				},
				title: "",
			}}
		>
			<Stack.Screen name="index" />
			<Stack.Screen
				name="detection"
				options={{
					header: (props) => (
						<View
							style={styles.customTitleContainer}
							{...props}
						>
							<Text style={styles.customTitleText}>
								Take a picture
							</Text>
							<Text style={styles.customTitleText}>
								of your product
							</Text>
						</View>
					),
				}}
			/>
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
		width: 150,
		justifyContent: "center",
		alignItems: "center",
		top: 10,
		backgroundColor: "white",
		borderRadius: 5,
		paddingHorizontal: 15,
		paddingVertical: 25,
	},
	customTitleContainer: {
		height: 120,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
	},
	customTitleText: {
		fontSize: 26,
		fontWeight: "bold",
		textAlign: "center",
		color: "#000",
	},
});
