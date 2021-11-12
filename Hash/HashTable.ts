/**
 * Hash Table
 * 
 * @author Owen Bean
 */
class HashTable<T> {
    static MAX_SIZE: number = 16;
    hashCode: (a: T) => number;
    compare: (c: T, s: T) => number;
    arr: Array<Array<T>>;
    size: number;

    /**
     * Constructor for hash table
     * 
     * @param hashCode function that computes the hash code number 
     * @param compare function that compares two objects and return a number for sorting
     */
    constructor(hashCode: (a: T) => number, compare: (c: T, s: T) => number) {
        this.hashCode = hashCode;
        this.compare = compare;
        this.size = 0;
        this.arr = Array(HashTable.MAX_SIZE);
        for (let i = 0; i < this.arr.length; i++)
            this.arr[i] = [];
    }

    /**
     * Print out everything in arrays
     */
    print() {
        console.log(this.arr);
    }

    /**
     * gets all of the stuff in the hash table
     * 
     * @returns all of the stuff in hash table
     */
    getAll(): Array<T> {
        let arr: Array<T> = [];
        let i = 0;
        while (i < this.arr.length) {
            for (let j = 0; j < this.arr[i].length; j++)
                arr.push(this.arr[i][j]);
            i++;
        }
        return arr;
    }

    /**
     * Adds an item to the hash
     * 
     * @param item item to add to hash
     */
    add(item: T): void {
        let hash = this.hashCode(item) % this.arr.length;
        this.arr[hash].push(item);
        this.size++;
    }

    /**
     * gets where the item is at within the hash table
     * 
     * @param item item that is being searched
     * @returns return array with two values with location
     */
    find(item: T): Array<number> | undefined {
        let hash = this.hashCode(item) % this.arr.length;
        if (this.arr[hash] === undefined)
            return undefined;
        for (let i = 0; i < this.arr[hash].length; i++) {
            if (this.compare(this.arr[hash][i], item) === 0) {
                return [hash, i];
            }
        }
        return undefined;
    }

    /**
     * Remove the item from the table
     * 
     * @param item item to remove
     * @returns return true if item was removed for true or false if item does not exist
     */
    remove(item: T): boolean {
        let hash = this.hashCode(item) % this.arr.length;
        if (this.arr[hash] === undefined)
            return false;
        for (let i = 0; i < this.arr[hash].length; i++) {
            if (this.compare(this.arr[hash][i], item) === 0) {
                this.arr[hash].splice(i, 1);
                this.size--;
                return true;
            }
        }
        return false;
    }

    /**
     * Empty out the hash table
     */
    clear(): void {
        this.arr = Array(HashTable.MAX_SIZE);
        this.size = 0;
        for (let i = 0; i < this.arr.length; i++)
            this.arr[i] = [];
    }
}

export { HashTable }