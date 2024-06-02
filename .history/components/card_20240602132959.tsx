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
				<Text style={stylesCard.title}>{title}</Text>
				<Image style={{ width: "100%", marginTop: "auto" }} resizeMode="contain" source={imageUrl} />
			</>
		</TouchableOpacity>
	);
}

const stylesCard = StyleSheet.create({
	container: {
		flex: 1,
		minWidth: 120,
		height: 280,
		gap: 20,
		padding: 20,
		borderRadius: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
	},
});
