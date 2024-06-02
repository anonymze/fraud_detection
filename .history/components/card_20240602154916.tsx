import { Image, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type CardProps = {
	title: string;
	imageUrl: any;
	background: string;
};

export default function Card({ title, imageUrl, background, ...props }: CardProps & TouchableOpacity["props"]) {
	return (
		<TouchableOpacity
			style={[stylesCard.container, { backgroundColor: background, padding: 20 }]}
			accessibilityLabel={`Redirect to ${title} page`}
			containerStyle={stylesCard.container}
			{...props}
		>
			<>
				<Text lineBreakMode="head" numberOfLines={2} style={stylesCard.title}>{title}</Text>
				<Image  style={stylesCard.image} resizeMode="contain" source={imageUrl} />
			</>
		</TouchableOpacity>
	);
}

const stylesCard = StyleSheet.create({
	container: {
		flexGrow: 1,
		flexShrink: 0,
		height: 280,
		borderRadius: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
	},
	image: {
		width: "100%",
		marginTop: "auto",
	}
});
