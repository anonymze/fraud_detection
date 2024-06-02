import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

export default function Container({children}: PropsWithChildren) {
	return (
		<View style={stylesContainer.container}>
			{children}
		</View>
	)
}

export const stylesContainer = StyleSheet.create({
	container: {
		backgroundColor: "red",
		flex: 1,
		alignItems: "center",
		paddingHorizontal: 20,
		paddingVertical: 30,
	}
})