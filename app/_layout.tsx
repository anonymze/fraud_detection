import { SplashScreen, Stack, router } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import { Button, Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import { colors } from "@/styles/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootSiblingParent } from "react-native-root-siblings";
import { Ionicons } from "@expo/vector-icons";

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
		<RootSiblingParent>
			<GestureHandlerRootView>
				<Stack
					screenOptions={{
						headerShown: true,
						headerShadowVisible: false,
						headerStyle: {
							backgroundColor: colors[colorScheme].backgroundHeader,
						},
						headerTintColor: colors[colorScheme].tintHeader,
						headerLeft: (_) => {
							return (
								<Image
									source={require("@/assets/images/logo-1.png")}
									style={[styles.headerImage, { left: spaceExterHeader }]}
								/>
							);
						},
						headerRight(_) {
							return (
								<View style={[styles.backgroundImage, { right: spaceExterHeader }]}>
									<Image source={require("@/assets/images/logo-2.png")} style={styles.headerImage} />
								</View>
							);
						},
						title: "",
						animation: "fade_from_bottom",
					}}
				>
					<Stack.Screen
						name="detection"
						options={{
							header: (props) => (
								<SafeAreaView
									style={{ backgroundColor: colors[colorScheme].light }}
									edges={["top"]}
								>
									<View style={styles.customTitleContainer} {...props}>
										<Text style={styles.customTitleText}>Take a picture</Text>
										<Text style={styles.customTitleText}>of your product</Text>
									</View>

									<TouchableOpacity
										style={styles.closeBtn}
										onPress={() => {
											router.back();
										}}
									>
										<Ionicons name="close" size={28} color={colors[colorScheme].dark} />
									</TouchableOpacity>
								</SafeAreaView>
							),
						}}
					/>
				</Stack>
			</GestureHandlerRootView>
		</RootSiblingParent>
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
		top: 0,
		backgroundColor: "#fff",
		borderRadius: 5,
		paddingHorizontal: 6,
		paddingVertical: 15,
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
	closeBtn: {
		position: "absolute",
		bottom: 80,
		right: 20
	},
});
