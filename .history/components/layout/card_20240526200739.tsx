import { StyleSheet, Text, View } from "react-native";

type CardProps = {
	title: string,
	image: string,
	background: string
}

export default function Card({ title }: CardProps) {
	return (
		<View style={stylesCard.container}>
			<Text>{title}</Text>
		</View>
	)
}

export const stylesCard = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: "red"
	}
})