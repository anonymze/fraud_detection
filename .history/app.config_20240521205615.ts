import type { ExpoConfig } from "@expo/config";

const nameApp = "Fraud Detection App";

export default {
	// for custom url scheme, url that starts with scheme name will open (draft://...) the app and it is needed for the routing of your app
	scheme: "fraud",
	name: nameApp,
	// slug is the URL-friendly name of your app, it is the name of the directory your app is in, and it is the name of your app on the App Store
	slug: "fraud-ano",
	version: "0.0.1",
	owner: "Ano",
	orientation: "portrait",
	// theme light or dark, depends on the user's system preference
	userInterfaceStyle: "automatic",
	description: "My app description",
	platforms: ["ios", "android"],
	// background color of the app behind the react view (need expo-system-ui)
	backgroundColor: "#999333",
	// an array of file glob strings which point to assets that will be bundled within your standalone app binary
	assetBundlePatterns: ["./assets/**/*"],
	// will change the color navigation bar for multitasking (only android right now)
	primaryColor: "#883322",
	splash: {
		backgroundColor: "#886666",
		image: "./assets/splash.png",
		resizeMode: "contain",
	},
	android: {
		// build number, you need to increment it if you want to submit another build to the stores
		versionCode: 1,
		config: {
			// you can config api keys for popular sdk like google maps...
			// googleMapsApiKey: 'YOUR_API_KEY'
		},
		// logo app, in iOs you have to use the icon property
		adaptiveIcon: {
			// foregroundImage: "./assets/adaptive-icon.png",
			backgroundColor: "#333999",
		},
		// intent filters are used to specify the type of intents that your app can handle, it's a messaging object you can use to request action from other apps
		// in this case we will open the app when the user clicks on a link with the host http://www.example.com ou https://www.example.com
		// intentFilters: [
		// 	{
		// 		action: "VIEW",
		// 		data: [
		// 			{
		// 				scheme: "http",
		// 				host: "www.example.com",
		// 			},
		// 			{
		// 				scheme: "https",
		// 				host: "www.example.com",
		// 			},
		// 		],
		// 		category: ["BROWSABLE", "DEFAULT"],
		// 	},
		// ],
	},
	ios: {
		// build number, you need to increment it if you want to submit another build to the stores
		buildNumber: "1",
		// icon: "./assets/icon.png",
		supportsTablet: true,
		config: {
			// you can config api keys for popular sdk like google maps...
			// googleMapsApiKey: 'YOUR_API_KEY'
		},
	},
	// All values in extra will be passed to your app.
	extra: {},
	plugins: ["expo-router"],
} satisfies ExpoConfig;
