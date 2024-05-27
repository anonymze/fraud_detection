import { View } from "react-native";

export default function Breadcrump({ links }: BreadcrumpProps) {
	return (
		<View style={{flexDirection: "row", marginTop: 30}}>
			{links.map((link, index) => (
				<Text key={index} style={styles.link}>
					{link}
				</Text>
			))}
		</View>
	);
}