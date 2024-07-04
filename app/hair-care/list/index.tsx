import Card from "@/components/card";
import Container from "@/components/layout/container";
import Breadcrump from "@/components/breadcrump";
import SearchInput from "@/components/search-input";
import data from "@/utils/data";
import { i18nDefault } from "@/i18n/translations";
import { View } from "react-native";
import { Camera } from "react-native-vision-camera";
import { openSettings } from "expo-linking";
import { router } from "expo-router";

export default function HairCare() {
	return (
		<Container>
			<SearchInput
				placeholder={i18nDefault("HAIR_CARE")}
				onChangeText={(text) => {
					if (!text) return;

					console.log(text);
				}}
			/>

			<Breadcrump title={i18nDefault("HAIR_CARE")} />

			<View
				style={{
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "center",
					gap: 15,
					width: "100%",
					marginTop: 20,
				}}
			>
				{data.map((item) => (
					<Card
						key={item.id}
						onPress={async () => {
							const showCamera = await verifyCameraPermissionsAndAvailability();
							if (!showCamera) return;

							router.push("/detection");
						}}
						title={item.label}
						imageUrl={item.image}
						background={item.backgroundColor}
					/>
				))}
			</View>
		</Container>
	);
}

const verifyCameraPermissionsAndAvailability = async () => {
	const status = Camera.getCameraPermissionStatus();
	const freshStatus = await Camera.requestCameraPermission();

	if (status === "not-determined" && freshStatus === "denied") {
		console.log(
			"vous avez refusé l'accès à la caméra 2 fois, à partir de maintenant vous devez aller dans les paramètres de l'application pour activer l'accès à la caméra et poursuivre l'utilisation de l'application"
		);
		return false;
	}

	if (freshStatus === "denied") {
		console.log(
			"ACCES REFUSE"
		);
		await openSettings();
		return false;
	}

	return true;
};
