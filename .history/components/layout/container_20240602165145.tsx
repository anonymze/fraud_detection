import { LinearGradient } from "expo-linear-gradient";
import { PropsWithChildren } from "react";
import { StyleSheet, View } from "react-native";
import { GestureHandlerRootView, ScrollView } from "react-native-gesture-handler";

export default function Container({ children }: PropsWithChildren) {
	return (
		<GestureHandlerRootView>
			<ScrollView
				style={styles.container}
				contentContainerStyle={styles.containerContent}
			>
				<LinearGradient
					// Background Linear Gradient
					colors={["#f1fefe", "#fff"]}
					style={styles.background}
				/>
				<View style={styles.bottomLogo}></View>
				{children}
			</ScrollView>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	containerContent: {
		paddingHorizontal: 15,
		paddingVertical: 30,
		alignItems: "center",
	},
	background: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
	},
	bottomLogo : {
		position: "absolute",
		top: 0,
		right: 10,
		width: 200,
		height: 10,
		backgroundColor: "#fff",
		borderBottomEndRadius: 5,
		borderBottomStartRadius: 5
	}
});
