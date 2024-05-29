import SearchInput from "@/components/search-input";
import { i18nDefault } from "@/i18n/translations";

export default function HareCare() {
	return (
		<SearchInput placeholder={i18nDefault("SEARCH_PRODUCT")} onChangeText={(text) => {
			if (!text) return;

			console.log(text);
		}} />

	)
}