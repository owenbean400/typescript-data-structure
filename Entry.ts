class Entry<Key, Value> {
    value: Value;
    key: Key;

    constructor(key: Key, value: Value) {
        this.key = key;
        this.value = value;
    }
}

export { Entry }