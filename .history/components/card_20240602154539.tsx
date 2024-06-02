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
			style={[stylesCard.container, { backgroundColor: background }]}
			accessibilityLabel={`Redirect to ${title} page`}
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
		flexBasis: "auto",
		flexGrow: 1,
		flexShrink: 1,
		height: 280,
		padding: 20,
		borderRadius: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
	},
	image: {
		marginTop: "auto",
	}
});
