import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
	return (
		<View
			style={styles.container}
		>
			<Image source={require("@/assets/images/logo-1.png")} />
      <Text style={{ marginTop: 10, paddingHorizontal: 60, fontSize: 24, textAlign: "center" }}>Check the authenticity of your products</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		paddingHorizontal: 20,
    paddingVertical: 30,
	},

});
