import { BinaryNode } from "./BinaryNodes";

class BinarySearchTree<T> {
  root: BinaryNode<T>;

  constructor() {}

  insertNode(node: BinaryNode<T>, item: T) {
    if (node === undefined) return new BinaryNode(item);
    if (item < node.item)
    node.leftChild = this.insertNode(node.leftChild, item);
    else if (item > node.item)
    node.rightChild = this.insertNode(node.rightChild, item);
    else return node;
  }

  printTree(currPtr: BinaryNode<T>, indent: string, last: boolean) {
    if (currPtr != undefined) {
      process.stdout.write(indent);
      if (last) {
        process.stdout.write("R----");
        indent += "   ";
      } else {
        process.stdout.write("L----");
        indent += "|   ";
      }
      process.stdout.write(currPtr.item.toString());
      this.printTree(currPtr.leftChild, indent, false);
      this.printTree(currPtr.rightChild, indent, true);
    }
  }

  search(node: BinaryNode<T>, item: T) {
    if (node == null) return null;
    else if (item == node.item) return node;
    else if (item < node.item) return this.search(node.leftChild, item);
    else return this.search(node.rightChild, item);
  }
}

export { BinarySearchTree }