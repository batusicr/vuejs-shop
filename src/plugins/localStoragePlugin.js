export default function createLocalStoragePlugin(storageKey) {
    return store => {
        const data = localStorage.getItem(storageKey);

        if (data) {
            store.replaceState(JSON.parse(data));
        }

        store.subscribe((mutation, state) => {
            localStorage.setItem(storageKey, JSON.stringify(state));
        });
    };
};