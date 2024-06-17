import Card from "@/components/card";
import Container from "@/components/layout/container";
import Breadcrump from "@/components/breadcrump";
import SearchInput from "@/components/search-input";
import { i18nDefault } from "@/i18n/translations";
import data from "@/utils/data";
import { router } from "expo-router";
import { View } from "react-native";
import { Camera } from "react-native-vision-camera";

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
						onPress={() => {
							verifyCameraPermissionsAndAvailability();
							router.push("/hair-care/list");
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
	console.log(Camera.getCameraPermissionStatus());
};
