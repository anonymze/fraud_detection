import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import { colors } from "@/styles/colors";

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();
const spaceExterHeader = 15;

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
				headerLeft: (_) => {
					return <Image source={require("@/assets/images/logo-1.png")} style={[styles.headerImage, { left: spaceExterHeader }]} />;
				},
				headerRight(_) {
					return (
						<View style={[styles.backgroundImage, {right: spaceExterHeader}]}>
							<Image source={require("@/assets/images/logo-2.png")} style={styles.headerImage} />
						</View>
					);
				},
				title: undefined,
				animation: "fade_from_bottom",
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
		maxWidth: 120,
		height: 30,
		resizeMode: "contain",
		zIndex: 100,
	},
	backgroundImage: {
		justifyContent: "center",
		alignItems: "center",
		top: 10,
		backgroundColor: "#fff",
		borderRadius: 5,
		paddingHorizontal: 6,
		paddingVertical: 15,
		zIndex: 100,
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
