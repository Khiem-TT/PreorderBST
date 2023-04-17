import {BinarySearchTree} from "./BinarySearchTree";

let tree = new BinarySearchTree<number>();
tree.insert(6);
tree.insert(5);
tree.insert(7);
tree.insert(3);
tree.insert(4);

console.log(`The numbers of nodes ${tree.totalNode}`);
tree.preorder(tree.root);