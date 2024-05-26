import { Text, View } from "react-native";

type CardProps = {
	title: string
}

export default function Card({ title }: CardProps) {
	return (
		<View>
			<Text>{title}</Text>
		</View>
	)
}