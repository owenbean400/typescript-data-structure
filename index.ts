import { AVLBinaryTree } from './trees/AVLBinaryTree';

AVLTreeDisplayExample();

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