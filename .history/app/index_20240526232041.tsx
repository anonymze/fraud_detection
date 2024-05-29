import { Text, TextInput, View, useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { i18nDefault } from "@/i18n/translations";
import Container from "@/components/layout/container";
import Card from "@/components/layout/card";

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
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
					width: "100%",
					marginTop: 15,
					paddingLeft: 14,
					borderWidth: 1,
					borderColor: "gray",
					borderRadius: 99,
				}}
			>
				<Ionicons name="search" size={20} color="black" />
				<TextInput
					style={{ flex: 1, marginLeft: 10, padding: 14, paddingLeft: 0 }}
					placeholderTextColor="gray"
					placeholder={i18nDefault("SEARCH_PRODUCT")}
				/>
			</View>

			<View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", gap: 25, width: "100%", marginTop: 20 }}>
				<Card  title={i18nDefault("SEARCH_PRODUCT")} imageUrl={require("@/assets/images/logo-1.png")} background="#faeaeb" />
				<Card title={i18nDefault("SEARCH_PRODUCT")} imageUrl={require("@/assets/images/logo-1.png")} background="#f3faf2" />
				<Card title={i18nDefault("SEARCH_PRODUCT")} imageUrl={require("@/assets/images/logo-1.png")} background="#fdf8fd" />
				<Card title={i18nDefault("SEARCH_PRODUCT")} imageUrl={require("@/assets/images/logo-1.png")} background="#fef0e2" />
			</View>
		</Container>
	);
}