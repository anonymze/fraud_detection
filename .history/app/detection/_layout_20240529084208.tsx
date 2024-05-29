import { Stack } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native";


export default function RootLayout() {
	let colorScheme = useColorScheme() ?? "light";

	return (

			<Stack.Screen name="index" options={{
				headerShown: false,
			}} />
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
