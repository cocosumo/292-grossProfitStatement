
export const formatStores = (
	store: string,
	stores: Stores.SavedFields[] | undefined,
) => {
	const targetStore = stores?.find(({uuid}) => uuid.value === store);

	if (!targetStore) {
		return store;
	}

	return targetStore?.storeNameShort.value ?? '';
};
