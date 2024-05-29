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
					return <Image style={{paddingTop: 20}} source={require("@/assets/images/logo-1.png")} style={[styles.headerImage, {left: 25} ]} />;
				},
				headerRight(_) {
					return (
						<View style={{ ...styles.backgroundImage, right: 25 }}>
							<Image source={require("@/assets/images/logo-2.png")} style={styles.headerImage} />
						</View>
					);
				},
				title: "",
			}}
		>
			<Stack.Screen name="index" />
			<Stack.Screen name="detection" options={{
				header: (props) =>
					(
						<View style={{ height: 100 }} {...props}>
							<Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center", color: "red" }}>coucou</Text>
						</View>
					),
				headerTitle(props) {
					return (
						<View style={{paddingVertical: 30, marginVertical: 30}}>
							<Text  style={{paddingVertical: 30, marginVertical: 30, color: "red"}}>coucou</Text>
						</View>
					)
				},
			}} />
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
