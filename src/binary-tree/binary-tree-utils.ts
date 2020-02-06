import { BinaryTreeNode } from './BinaryTreeNode';

export const traverseInOrder = <T>(node: BinaryTreeNode<T>, arr: T[] = []): T[] => {
  if (node.leftNode) {
    traverseInOrder(node.leftNode, arr) ;
  }
  arr.push(node.value);
  if (node.rightNode) {
    traverseInOrder(node.rightNode, arr) ;
  }
  return arr;
}

export const traversePreOrder = <T>(node: BinaryTreeNode<T>, arr: T[] = []): T[] => {
  arr.push(node.value);
  if (node.leftNode) {
    traverseInOrder(node.leftNode, arr) ;
  }
  if (node.rightNode) {
    traverseInOrder(node.rightNode, arr) ;
  }
  return arr;
}

export const traversePostOrder = <T>(node: BinaryTreeNode<T>, arr: T[] = []): T[] => {
  if (node.leftNode) {
    traverseInOrder(node.leftNode, arr) ;
  }
  if (node.rightNode) {
    traverseInOrder(node.rightNode, arr) ;
  }
  arr.push(node.value);
  return arr;
}
