import { Image, Pressable, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

type CardProps = {
	title: string;
	imageUrl: any;
	background: string;
};

export default function Card({ title, imageUrl, background, ...props }: CardProps & TouchableOpacity["props"]) {
	return (
		<Pressable
			style={[stylesCard.container, { backgroundColor: background }]}
			containerStyle={{flexGrow: 1, flexShrink: 1}}
			accessibilityLabel={`Redirect to ${title} page`}
			{...props}
		>
			<>
				<Text style={stylesCard.title}>{title}</Text>
				<Image style={stylesCard.image} resizeMode="contain" source={imageUrl} />
			</>
		</Pressable>
	);
}

const stylesCard = StyleSheet.create({
	container: {
		height: 280,
		padding: 20,
		borderRadius: 20,
	},
	title: {
		width: 130,
		fontSize: 24,
		fontWeight: "bold",
	},
	image: {
		width: "100%",
		marginTop: "auto",
	}
});
