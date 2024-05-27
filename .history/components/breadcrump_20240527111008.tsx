import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View, useColorScheme } from "react-native";

type BreadcrumpProps = {
	title: string;
};

export default function Breadcrump({ title }: BreadcrumpProps) {
	let colorScheme = useColorScheme() ?? "light";

	return (
		<View style={{flexDirection: "row", marginTop: 30}}>
			<Link href={"/"} style={{color: "black"}}><Ionicons name="accessibility-sharp" size={35} color={colors[colorScheme].tintHeader}/></Link>
		</View>
	);
}