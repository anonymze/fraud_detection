import { colors } from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View, useColorScheme } from "react-native";

type BreadcrumpProps = {
	title: string;
};

export default function Breadcrump({ title }: BreadcrumpProps) {
	let colorScheme = useColorScheme() ?? "light";

	return (
		<View style={styles.container}>
			<Link href="/" asChild>
				<Pressable>
					<Ionicons name="arrow-back" size={35} color={colors[colorScheme].tint} />
				</Pressable>
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
		gap: 10,
	},
	title : {
		fontSize: 20,
		fontWeight: "bold",
	}
});
