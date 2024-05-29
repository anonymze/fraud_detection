import { Stack } from "expo-router";
import { StyleSheet, useColorScheme } from "react-native";

export default function RootLayout() {
	let colorScheme = useColorScheme() ?? "light";

	return (
		<Stack
			screenOptions={{
				title: "coucou",
			}}
		>
			<Stack.Screen name="detection" />
		</Stack>
	);
}

const styles = StyleSheet.create({
	
});
