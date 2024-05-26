import { StyleSheet, View } from "react-native";

export default function Container({chidlren}) {
	return (
		<View style={styles.container}>
			{chilren}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		paddingHorizontal: 20,
		paddingVertical: 30,
	}
})