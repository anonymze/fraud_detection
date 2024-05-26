import { stylesContainer } from "@/components/layout/container";
import { useWindowDimensions } from "react-native";

export const useGetMaxWidthScreen = () => {
	return 	useWindowDimensions().width - stylesContainer.container.paddingHorizontal;
}