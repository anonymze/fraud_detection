import { Image, StyleSheet, Text, View } from "react-native";

type CardProps = {
	title: string,
	imageUrl: string,
	background: string
}

export default function Card({ title, imageUrl }: CardProps) {
	return (
		<View style={stylesCard.container}>
			<Text style={stylesCard.title}>{title}</Text>
			<Image resizeMode="contain" source={require("@/assets/images/logo-1.png")} />
		</View>
	)
}

export const stylesCard = StyleSheet.create({
	container: {
		flex: 1,
		minWidth: 160,
		maxWidth: 250,
		gap: 20,
		padding: 20,
		borderRadius: 20,
		backgroundColor: "red",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold"
	}
})