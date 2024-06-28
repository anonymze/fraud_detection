import { useIsFocused } from "@react-navigation/native";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { AppState, Text } from "react-native";
import { Camera, getCameraDevice, useCameraDevice } from "react-native-vision-camera"

export default function Detection() {
	const device = useCameraDevice('back', {physicalDevices: ["ultra-wide-angle-camera", "wide-angle-camera"]});
	const appState = useRef(AppState.currentState);
  const isActive = useIsFocused() && appState.current === 'active';

	if (device == null) return <Text>No camera device found</Text>;


	return (
			<Camera
				style={{ flex: 1 }}
				onTouchStart={() => {
					router.back();
				}}
				device={device}
				isActive={isActive}
			/>
	)
}