import { AVLBinaryTree } from './trees/AVLBinaryTree';
import { HashMap } from './Hash/HashMap';
import { Entry } from './Entry';
import { HashSet } from './Hash/HashSet';

//AVLTreeDisplayExample();
//hashMap();
hashSet();

function AVLTreeDisplayExample(): void {
    let tree = new AVLBinaryTree();
    let nums = [73, 32, 31, 30, 39, 12, 65, 9, 70];
    for (let num of nums) tree.root = tree.insertNode(tree.root, num);
    tree.printTree(tree.root, "", true);

    for (let num of nums) {
    console.log();
    console.log(tree.search(tree.root, num));
    console.log();
    }
}

function hashMap(): void {
    let arrNums: Array<number> = [3, 8, 21, 31974, 21, 702, 37];
    let arrString: Array<string> = ["a", "b", "c", "d", "e", "f", "g"];
    function hashInt(a: Entry<number, string>): number {
        return Math.round(Math.abs(a.key));
    }
    function hashCompare(a: Entry<number, string>, b: Entry<number, string>): number {
        return b.key - a.key;
    }
    let hashMap = new HashMap<number, string>(hashInt, hashCompare);
    for(let i = 0; i < (Math.min(arrNums.length, arrString.length)); i++) {
        hashMap.put(arrNums[i], arrString[i]);
    }
    hashMap.remove(3);
    console.log(hashMap.get(8));
    hashMap.print();
    console.log(hashMap.size());
    console.log(hashMap.getKeys());
}

function hashSet(): void {
    let arrNums: Array<number> = [3, 8, 21, 31974, 21, 702, 37];
    let arrNumsUnion: Array<number> = [3, 21, 31974, 19];
    let arrNumsAdd: Array<number> = [5, 3, 10, 16];
    let arrNumsRemove: Array<number> = [702, 10, 98, 3, 21];
    function hashInt(a: number): number {
        return Math.round(Math.abs(a));
    }
    function hashCompare(a: number, b: number): number {
        return b - a;
    }
    let hashSet1: HashSet<number> = new HashSet(hashInt, hashCompare);
    let hashSetUnion: HashSet<number>  = new HashSet(hashInt, hashCompare);
    let hashSetAdd: HashSet<number> = new HashSet(hashInt, hashCompare);
    let hashSetRemove: HashSet<number> = new HashSet(hashInt, hashCompare);
    for (let item of arrNums)
        hashSet1.add(item);
    for (let item of arrNumsUnion)
        hashSetUnion.add(item);
    for (let item of arrNumsAdd)
        hashSetAdd.add(item);
    for (let item of arrNumsRemove)
        hashSetRemove.add(item);
    console.log(hashSet1.getAll());
    hashSet1.addAll(hashSetAdd);
    console.log(hashSet1.getAll());
    hashSet1.retainAll(hashSetUnion);
    console.log(hashSet1.getAll());
    hashSet1.removeAll(hashSetRemove);
    console.log(hashSet1.getAll());
}

