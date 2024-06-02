import { LinearGradient } from 'expo-linear-gradient';
import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Container({ children }: PropsWithChildren) {
	return (
		<View style={styles.container}>
			<LinearGradient
				// Background Linear Gradient
				colors={["rgba(0,0,0,0.8)", "transparent"]}
				style={styles.background}
			/>
			<LinearGradient
				// Button Linear Gradient
				colors={["#4c669f", "#3b5998", "#192f6a"]}
			>
				<Text>Sign in with Facebook</Text>
			</LinearGradient>
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
	background: {
  },
});
