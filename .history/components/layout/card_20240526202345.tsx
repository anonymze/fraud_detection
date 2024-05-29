import { Image, StyleSheet, Text, View } from "react-native";

type CardProps = {
	title: string,
	imageUrl: string,
	background: string
}

export default function Card({ title, imageUrl }: CardProps) {
	return (
		<View style={stylesCard.container}>
			<Text>{title}</Text>
			<Image source={require("@/assets/images/logo-1.png")} />
		</View>
	)
}

export const stylesCard = StyleSheet.create({
	container: {
		flex: 1,
		width: 180,
		minWidth: 180,
		maxWidth: 250,
		gap: 20,
		padding: 20,
		borderRadius: 20,
		backgroundColor: "red",
	}
})