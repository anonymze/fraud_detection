import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { View } from "react-native";

type BreadcrumpProps = {
	title: string;
};

export default function Breadcrump({ title }: BreadcrumpProps) {
	return (
		<View style={{flexDirection: "row", marginTop: 30}}>
			<Link to="/" style={{color: "black"}}><Ionicons name="accessibility-sharp" size={35}/></Link>
		</View>
	);
}