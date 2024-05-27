import { Image, StyleSheet, Text, View } from "react-native";

type CardProps = {
	title: string,
	imageUrl: any,
	background: string
}

export default function Card({ title, imageUrl, background }: CardProps) {
	return (
		<View style={{...stylesCard.container, backgroundColor: background}}>
			<Text style={stylesCard.title}>{title}</Text>
			<Image style={{width: "100%", marginTop: "auto"}} resizeMode="contain" source={imageUrl} />
		</View>
	)
}

const stylesCard = StyleSheet.create({
	container: {
		width: "100%",
		minWidth: 160,
		maxWidth: 260,
		height: 280,
		gap: 20,
		padding: 20,
		borderRadius: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold"
	}
})