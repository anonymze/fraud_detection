import { useIsFocused } from "@react-navigation/native";
import { useRef } from "react";
import { AppState, Text } from "react-native";
import { Camera, getCameraDevice, useCameraDevice } from "react-native-vision-camera"

export default function Detection() {
	const device = useCameraDevice('back', {physicalDevices: ["wide-angle-camera", "ultra-wide-angle-camera"]});
	const appState = useRef(AppState.currentState);
  const isActive = useIsFocused() && appState.current === 'active';

	if (device == null) return <Text>No camera device found</Text>;

	return (
			<Camera
				style={{ flex: 1 }}
				device={device}
				isActive={isActive}
			/>
	)
}