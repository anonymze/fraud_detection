import { i18nDefault } from "@/i18n/translations";
import { Ionicons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";

export default function SearchInput() {
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
			onChangeText={(text) => console.log(text)}
			style={{ flex: 1, marginLeft: 10, padding: 14, paddingLeft: 0 }}
			placeholderTextColor="gray"
			placeholder={i18nDefault("SEARCH_PRODUCT")}
		/>
	</View>;
}
