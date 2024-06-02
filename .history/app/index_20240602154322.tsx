import { Text, TextInput, View, useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { i18nDefault } from "@/i18n/translations";
import Container from "@/components/layout/container";
import { router } from "expo-router";
import Card from "@/components/card";
import SearchInput from "@/components/search-input";

export default function Index() {
	let colorScheme = useColorScheme() ?? "light";

	return (
		<Container>
			<View style={{ padding: 8, borderRadius: 99, backgroundColor: colors[colorScheme].backgroundHeader }}>
				<Ionicons name="finger-print" size={35} color={colors[colorScheme].tintHeader} />
			</View>
			<Text style={{ marginTop: 10, paddingHorizontal: 60, fontSize: 24, textAlign: "center" }}>
				{i18nDefault("CHECK_AUHENTICITY_PRODUCTS")}
			</Text>
			<Text style={{ marginTop: 30, fontSize: 26, fontWeight: "bold" }}>{i18nDefault("SELECT_YOUR_PRODUCT")}</Text>
			<SearchInput
				placeholder={i18nDefault("SEARCH_PRODUCT")}
				onChangeText={(text) => {
					if (!text) return;

					console.log(text);
				}}
			/>

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
				<Card
					onPress={() => router.push("/makeup")}
					title={i18nDefault("MAKEUP")}
					imageUrl={require("@/assets/images/logo-1.png")}
					background="#faeaeb"
				/>
				<Card
					onPress={() => router.push("/skin-care")}
					title={i18nDefault("SKIN_CARE")}
					imageUrl={require("@/assets/images/logo-1.png")}
					background="#f3faf2"
				/>
			</View>
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
				<Card
					onPress={() => router.push("/hair-care")}
					title={i18nDefault("HAIR_CARE")}
					imageUrl={require("@/assets/images/logo-1.png")}
					background="#fdf8fd"
				/>
				<Card
					onPress={() => router.push("/hair-color")}
					title={i18nDefault("HAIR_COLOR")}
					imageUrl={require("@/assets/images/logo-1.png")}
					background="#fef0e2"
				/>
			</View>
		</Container>
	);
}
