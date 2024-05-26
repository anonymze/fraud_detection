/**
 * @description pause the thread for a given time
 */
export const sleep = (time: number) => {
	return new Promise((resolve) => {
		setTimeout(resolve, time);
	});
};

/**
 * @description exclude keys of an array of objects
 */
export const excludeEntryFromArrayOfObjects = (arrayOfObjects: any[], keys: string[]) => {
	return arrayOfObjects.map((object) => {
		for (const key of keys) {
			delete object[key];
		}

		return object;
	});
};


/**
 * @description a text replacer which return a string with %s replaced by your values in order
 */
export const sprintf = (str: string, ...args: string[]) => {
	return args.reduce((acc, curr) => acc.replace(/%s/, curr), str);
};

/**
 * @description flatten an array of objects with i18n entities
 * @todo i have to refacto that typing, ugly ? and make a generic for the key 
 */
export const flattenI18nEntities = <T extends Entity<K>[] = any[], K extends { [k: string]: string }[] = any[]>(
	arr: T
): FlattenEntity<T, K> => {
	// we spread the entity and get i18n outside of it
	return arr.map(({ i18n, ...entity }) => {
			return {
					...(entity as object),
					...(i18n[0] ?? {}),
			};
	}) as FlattenEntity<T, K>;
};

type Entity<K> = { uuid: string; i18n: K };
type FlattenEntity<T extends Entity<K>[], K extends { [k: string]: string }[]> = ({[key in keyof Omit<T[number], "i18n">]: string} & {[key in keyof T[number]["i18n"][number]]: string})[]