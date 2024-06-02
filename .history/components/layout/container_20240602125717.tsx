import { LinearGradient } from "expo-linear-gradient";
import { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";

export default function Container({ children }: PropsWithChildren) {
	return (
		<GestureHandlerRootView>
			<ScrollView
				style={styles.container}
				contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 30, alignItems: "center" }}
			>
				<LinearGradient
					// Background Linear Gradient
					colors={["rgba(0,0,0,0.8)", "transparent"]}
					style={styles.background}
				/>
				{children}
			</ScrollView>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	background: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
	},
});
