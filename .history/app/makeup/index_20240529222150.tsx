import Breadcrump from "@/components/breadcrump";
import Card from "@/components/card";
import Container from "@/components/layout/container";
import SearchInput from "@/components/search-input";
import { i18nDefault } from "@/i18n/translations";
import { router } from "expo-router";
import { View } from "react-native";
import { Canvas, Circle, Group } from "@shopify/react-native-skia";

const width = 256;
const height = 256;
const r = width * 0.33;

export default function Makeup() {
	return (
		<Container>
			<SearchInput
				placeholder={i18nDefault("MAKEUP")}
				onChangeText={(text) => {
					if (!text) return;

					console.log(text);
				}}
			/>
			
			<Breadcrump title={i18nDefault("HAIR_CARE")} />

			<View
				style={{
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "center",
					gap: 25,
					width: "100%",
					marginTop: 20,
				}}
			>
				<Card
					onPress={() => router.push("/hair-care")}
					title={i18nDefault("SEARCH_PRODUCT")}
					imageUrl={require("@/assets/images/logo-1.png")}
					background="#faeaeb"
				/>
				<Card
					onPress={() => router.push("/hair-care")}
					title={i18nDefault("SEARCH_PRODUCT")}
					imageUrl={require("@/assets/images/logo-1.png")}
					background="#f3faf2"
				/>
				<Card
					onPress={() => router.push("/hair-care")}
					title={i18nDefault("SEARCH_PRODUCT")}
					imageUrl={require("@/assets/images/logo-1.png")}
					background="#fdf8fd"
				/>
				<Card
					onPress={() => router.push("/hair-care")}
					title={i18nDefault("SEARCH_PRODUCT")}
					imageUrl={require("@/assets/images/logo-1.png")}
					background="#fef0e2"
				/>
			</View>
			<Canvas style={{ width, height }}>
      <Group blendMode="multiply">
        <Circle cx={r} cy={r} r={r} color="cyan" />
        <Circle cx={width - r} cy={r} r={r} color="magenta" />
        <Circle cx={width / 2} cy={width - r} r={r} color="yellow" />
      </Group>
    </Canvas>
		</Container>
	);
}
