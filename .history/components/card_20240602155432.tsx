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
			containerStyle={{flexGrow: 1, flexShrink: 1}}
			{...props}
		>
			<>
				<Text style={stylesCard.title}>{title}</Text>
				<Image  style={stylesCard.image} resizeMode="contain" source={imageUrl} />
			</>
		</TouchableOpacity>
	);
}

const stylesCard = StyleSheet.create({
	container: {
		height: 280,
		borderRadius: 20,
		padding: 20,
		minWidth: 0,
	},
	title: {
		minWidth: 0,
		fontSize: 24,
		fontWeight: "bold",
	},
	image: {
		width: "100%",
		marginTop: "auto",
	}
});
