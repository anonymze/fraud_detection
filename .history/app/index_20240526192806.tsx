import { StyleSheet, Text, TextInput, View, useColorScheme } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { i18nDefault } from "@/i18n/translations";
import Container from "@/components/layout/container";

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
					marginTop: 25,
					padding: 14,
					borderWidth: 1,
					borderColor: "gray",
					borderRadius: 99,
				}}
			>
				<Ionicons name="search" size={20} color="gray" />
				<TextInput
					style={{ flex: 1, marginLeft: 10 }}
					placeholderTextColor="gray"
					placeholder={i18nDefault("SEARCH_PRODUCT")}
				/>
			</View>
		</Container>
	);
}
