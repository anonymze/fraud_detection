import enTranslations from "./en";
import frTranslations from "./fr"

// we use the lang en for the source of truth for typescript
const en : typeof enTranslations = enTranslations;
const fr : typeof enTranslations = frTranslations;

export default { en, fr }