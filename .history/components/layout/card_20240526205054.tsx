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
			<Image style={{height: 200}} resizeMode="contain" source={require("@/assets/images/logo-1.png")} />
		</View>
	)
}

const stylesCard = StyleSheet.create({
	container: {
		flex: 1,
		minWidth: 160,
		maxWidth: 280,
		gap: 20,
		padding: 20,
		borderRadius: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold"
	}
})