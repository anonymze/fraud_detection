import { colors } from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type BreadcrumpProps = {
	title: string;
};

export default function Breadcrump({ title }: BreadcrumpProps) {
	let colorScheme = useColorScheme() ?? "light";

	return (
		<View style={styles.container}>
			<Link href="/" asChild>
				<TouchableOpacity>
					<Ionicons name="arrow-back" size={35} color={colors[colorScheme].tint} />
				</TouchableOpacity>
			</Link>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		width: "100%",
		marginTop: 30,
	},
	title : {
		marginLeft: 30,
		fontSize: 24,
		fontWeight: "bold",
	}
});
