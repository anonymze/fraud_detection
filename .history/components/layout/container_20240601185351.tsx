import { LinearGradient } from 'expo-linear-gradient';
import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";

export default function Container({ children }: PropsWithChildren) {
	return (
		<View style={styles.container}>
			<LinearGradient
				// Background Linear Gradient
				colors={["rgba(0,0,0,0.8)", "transparent"]}
				style={styles.background}
			/>
			{children}
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
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
});
