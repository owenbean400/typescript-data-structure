import { HashTable } from './HashTable';
import { Entry } from '../Entry';

/**
 * Hash Map Data Structure
 * 
 * @author Owen Bean
 */
class HashMap<K, V> {
    table: HashTable<Entry<K, V>>;

    /**
     * Constructor for hash map
     * 
     * @param hashCode function that computes the hash code number 
     * @param compare function that compares two objects and return a number for sorting
     */
    constructor(hashCode: (a: Entry<K, V>) => number, compare: (c: Entry<K, V>, s: Entry<K, V>) => number) {
        this.table = new HashTable(hashCode, compare);
    }

    /**
     * Get the value of the key
     * 
     * @param key key for searching within hash map
     * @returns value of the key
     */
    get(key: K): V {
        let mapEntry = new Entry(key, undefined);
        let found = this.table.find(mapEntry);
        return (found !== undefined) ? this.table.arr[found[0]][found[1]].value : undefined;
    }

    /**
     * Get all of the values within hash map
     * 
     * @returns all of the values within the hash map
     */
    getValues(): Array<V> {
        return this.table.getAll().map(((entry: Entry<K, V>) => {return entry.value}));
    }

    /**
     * Get all of the keys within hash map
     * 
     * @returns all of the keys within the hash map
     */
    getKeys(): Array<K> {
        return this.table.getAll().map(((entry: Entry<K, V>) => {return entry.key}));
    }

    /**
     * Get the size of the Hash Map
     * 
     * @returns Amount of entries
     */
    size(): number {
        return this.table.size;
    }

    /**
     * Add a new entry to hash map or update an entry
     * 
     * @param key key of the entry
     * @param value value of the entry
     */
    put(key: K, value: V) {
        let mapEntry = new Entry(key, value);
        let found = this.table.find(mapEntry);
        if (found === undefined) {
            this.table.add(mapEntry);
        } else {
            this.table.arr[found[0]][found[1]].value = value;
        }
    }

    /**
     * Removes the entry with same key
     * 
     * @param key key of the entry
     * @returns if true, key was remove, else the key doesn't exist
     */
    remove(key: K): boolean {
        let mapEntry = new Entry(key, undefined);
        return this.table.remove(mapEntry);
    }

    /**
     * Remove everything in the hash table
     */
    clear(): void {
        this.table.clear();
    }

    /**
     * print out the keys and values in the hash table
     */
    print() {
        console.log(this.table.getAll().map((entry: Entry<K, V>) => {return {key: entry.key, value: entry.value}}))
    }
}

export { HashMap };