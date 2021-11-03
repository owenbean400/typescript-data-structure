import { AVLBinaryNode } from './BinaryNodes';
import { BinarySearchTree } from './BinarySearchTree';

class AVLBinaryTree<T> extends BinarySearchTree<T> {
  root: AVLBinaryNode<T>;

  constructor() {
      super();
  }

  add(node: AVLBinaryNode<T>) {}

  height = (node: AVLBinaryNode<T>) => {
    return node === undefined ? 0 : node.height;
  };
  max = (a: number, b: number): number => {
    return a > b ? a : b;
  };

  rightRotate(nodeY: AVLBinaryNode<T>) {
    let nodeX = nodeY.leftChild;
    let nodeT = nodeX.rightChild;
    nodeX.rightChild = nodeY;
    nodeY.leftChild = nodeT;
    nodeY.height =
      this.max(this.height(nodeY.leftChild), this.height(nodeY.rightChild)) + 1;
    nodeX.height =
      this.max(this.height(nodeX.leftChild), this.height(nodeX.rightChild)) + 1;
    return nodeX;
  }

  leftRotate(nodeX: AVLBinaryNode<T>) {
    let nodeY = nodeX.rightChild;
    let nodeT = nodeY.leftChild;
    nodeY.leftChild = nodeX;
    nodeX.rightChild = nodeT;
    nodeY.height =
      this.max(this.height(nodeY.leftChild), this.height(nodeY.rightChild)) + 1;
    nodeX.height =
      this.max(this.height(nodeX.leftChild), this.height(nodeX.rightChild)) + 1;
    return nodeY;
  }

  getBalanceFactor = (node: AVLBinaryNode<T>) => {
    return node === undefined
      ? 0
      : this.height(node.leftChild) - this.height(node.rightChild);
  };

  override insertNode(node: AVLBinaryNode<T>, item: T) {
    if (node === undefined) return new AVLBinaryNode(item);
    if (item < node.item)
      node.leftChild = this.insertNode(node.leftChild, item);
    else if (item > node.item)
      node.rightChild = this.insertNode(node.rightChild, item);
    else return node;

    node.height =
      1 + this.max(this.height(node.leftChild), this.height(node.rightChild));
    let balanceFactor = this.getBalanceFactor(node);
    console.log(balanceFactor);

    //left heavy
    if (balanceFactor > 1) {
      //child left heavy
      if (item < node.leftChild.item) {
        return this.rightRotate(node);
      }
      //child right heavy
      else if (item > node.leftChild.item) {
        node.leftChild = this.leftRotate(node.leftChild);
        return this.rightRotate(node);
      }
    }
    //right heavy
    if (balanceFactor < -1) {
      //child right heavy
      if (item > node.rightChild.item) {
        return this.rightRotate(node);
      }
      //child left heavy
      else if (item < node.rightChild.item) {
        node.rightChild = this.rightRotate(node.rightChild);
        return this.leftRotate(node);
      }
    }
    return node;
  }

  override printTree(currPtr: AVLBinaryNode<T>, indent: string, last: boolean) {
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

  override search(node: AVLBinaryNode<T>, item: T) {
    if (node == null) return null;
    else if (item == node.item) return node;
    else if (item < node.item) return this.search(node.leftChild, item);
    else return this.search(node.rightChild, item);
  }
}

export { AVLBinaryTree }