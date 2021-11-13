import { HashTable } from "./HashTable";

/**
 * Hash Set from Hash Table
 * 
 * @author Owen Bean
 */
class HashSet<T> {
    table: HashTable<T>;

    /**
     * Constructor of Hash Set
     * 
     * @param hashCode function to get hash code from object type 
     * @param compare function that return number based on comparsion
     */
    constructor(hashCode: (a: T) => number, compare: (c: T, s: T) => number) {
        this.table = new HashTable(hashCode, compare);
    }

    /**
     * Get all of the stuff in the set
     * 
     * @returns array of all stuff in the set
     */
    getAll(): Array<T> {
        return this.table.getAll();
    }

    /**
     * Add object to the set
     * 
     * @param item object to add to set
     * @returns true if item is added, else false if item already exist
     */
    add(item: T): boolean {
        if (!this.contains(item)) {
            this.table.add(item);
            return true;
        }
        return false;
    }

    /**
     * Check an object is within the set
     * 
     * @param item object to look for in the set
     * @returns return whether the object is within the set
     */
    contains(item: T): boolean {
        return (this.table.find(item) !== undefined) ? true : false;
    }

    /**
     * Check if the set is empty
     * 
     * @returns whether the set is empty or not
     */
    isEmpty() {
        return this.table.size === 0;
    }

    /**
     * Remove an object from the set
     * 
     * @param item object that is to be removed from the set
     * @returns true if object was removed, false else if object not in set
     */
    remove(item: T): boolean {
        return this.table.remove(item);
    }

    /**
     * Intersect the two sets into one set
     * 
     * @param set set to intersect with
     */
    retainAll(set: HashSet<T>) {
        let values = set.getAll();
        let newSet: HashTable<T> = new HashTable(this.table.hashCode, this.table.compare);
        for (let item of values) {
            let found = this.table.find(item);
            if (found !== undefined)
                newSet.add(item);
        }
        this.table = newSet;
    }

    /**
     * Union the two sets into one set
     * 
     * @param set set to union with
     */
    addAll(set: HashSet<T>) {
        let values = set.getAll();
        for (let item of values)
            this.add(item);
    }

    /**
     * Subtract another set from this set
     * 
     * @param set set to subtract
     */
    removeAll(set: HashSet<T>) {
        let values = set.getAll();
        for (let item of values)
            this.remove(item);
    }
}

export { HashSet }