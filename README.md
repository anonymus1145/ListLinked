# Linked List

This project implements a basic linked list data structure in TypeScript. A linked list is a data structure consisting of a sequence of nodes, where each node stores a value and a reference to the next node in the list.

## Features

- `size()`: Returns the number of elements in the linked list.
- `head()`: Returns the first node in the linked list.
- `tail()`: Returns the last node in the linked list.
- `prepend(value)`: Adds a new node with the given value at the beginning of the linked list.
- `append(value)`: Adds a new node with the given value at the end of the linked list.
- `at(index)`: Returns the node at the specified index in the linked list.
- `pop()`: Removes the last node from the linked list.
- `contains(value)`: Checks if the linked list contains a node with the given value.
- `find(value)`: Returns the index of the first node with the given value in the linked list.
- `toString()`: Returns a string representation of the linked list.

## Usage

1. Install dependencies: `npm install`
2. Build the TypeScript code: `npm run build`
3. Run the example code: `npm run start`

```typescript
import { LinkList } from './linkList';

const myList = new LinkList();
myList.append(5);
myList.prepend(2);
console.log(myList.toString()); // Output: 2 -> 5
console.log(myList.size()); // Output: 2

## Contributions

Contributions are welcome! If you find any issues or want to add new features, feel free to submit a pull request.

## License

This project is licensed under the MIT License.
