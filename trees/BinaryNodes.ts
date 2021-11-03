class BinaryNode<Element> {
  item: Element;
  leftChild: BinaryNode<Element> | undefined;
  rightChild: BinaryNode<Element> | undefined;
  constructor(item: Element) {
    this.leftChild = undefined;
    this.rightChild = undefined;
    this.item = item;
  }
}

class AVLBinaryNode<Element> extends BinaryNode<Element> {
  height: number;
  leftChild: AVLBinaryNode<Element> | undefined;
  rightChild:  AVLBinaryNode<Element> | undefined;
  constructor(item: Element) {
    super(item);
    this.height = 1;
    this.leftChild = undefined;
    this.rightChild = undefined;
  }
}

export { BinaryNode, AVLBinaryNode }