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
			<Image source={imageUrl} />
		</View>
	)
}

export const stylesCard = StyleSheet.create({
	container: {
		flex: 1,
		width: 200,
		gap: 20,
		padding: 20,
		borderRadius: 20,
		backgroundColor: "red",
	}
})