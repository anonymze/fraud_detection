import { colors } from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import { useRef, useState } from "react";
import { AppState, Image, StyleSheet, Text, View } from "react-native";
import { Camera, useCameraDevice } from "react-native-vision-camera";

export default function Detection() {
	const device = useCameraDevice("back", { physicalDevices: ["ultra-wide-angle-camera", "wide-angle-camera"] });
	const appState = useRef(AppState.currentState);
	const isActive = useIsFocused() && appState.current === "active";

	// camera native utilities
	const [torch, setTorch] = useState<"off" | "on">("off");

	if (device == null) return <Text>No camera device found</Text>;

	return (
		<View style={{ flex: 1 }}>
			<Camera style={{ flex: 1 }} device={device} isActive={isActive} torch={torch} />
			<View style={styles.overlay}>
				<View style={styles.bottomOverlay}>
					<Ionicons
						onPress={() => setTorch((prev) => (prev === "off" ? "on" : "off"))}
						name={torch === "off" ? "flash" : "flash-off"}
						size={25}
						style={styles.overlayIcons}
					/>
					<Ionicons name="ellipse-outline" size={80} style={styles.overlayIcons} />
					<Text style={styles.overlayIcons}></Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	overlay: {
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		paddingBottom: 30,
	},
	bottomOverlay: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		width: "100%",
	},
	overlayIcons: {
		width: 80,
		textAlign: "center",
		color: "#fff",
	},
});
