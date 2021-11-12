import { AVLBinaryTree } from './trees/AVLBinaryTree';
import { HashMap } from './Hash/HashMap';
import { Entry } from './Entry';

//AVLTreeDisplayExample();
hashMap();

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

