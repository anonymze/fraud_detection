import { styleContainer } from "@/styles/layout";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
import { getLocales } from "expo-localization";
import { i18nDefault } from "@/i18n/translations";

export default function Index() {
	const colorScheme = "light" as const;
	return (
		<View style={styles.container}>
			<View style={{padding: 8, borderRadius: 99, backgroundColor: colors[colorScheme].backgroundHeader}}>
			<Ionicons name="finger-print" size={35} color={colors[colorScheme].tintHeader} />
			</View>
			<Text style={{ marginTop: 10, paddingHorizontal: 60, fontSize: 24, textAlign: "center" }}>
				{i18nDefault("CHECK_AUHENTICITY_PRODUCTS")}
			</Text>
			<Text>{i18nDefault("SELECT_YOUR_PRODUCT")}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: styleContainer,
});