import { styleContainer } from "@/styles/layout";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";
// import { getLocales } from "expo-localization";

// const deviceLanguage = getLocales();

export default function Index() {
	const colorScheme = "light" as const;
	// console.log(deviceLanguage);
	return (
		<View style={styles.container}>
			<View style={{padding: 8, borderRadius: 99, backgroundColor: colors[colorScheme].backgroundHeader}}>
			<Ionicons name="finger-print" size={35} color={colors[colorScheme].tintHeader} />
			</View>
			<Text style={{ marginTop: 10, paddingHorizontal: 60, fontSize: 24, textAlign: "center" }}>
				Check the authenticity of your products
			</Text>
			<Text>Select your product</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: styleContainer,
});
