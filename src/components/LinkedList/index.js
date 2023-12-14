// LinkedListComponent.js
import React, { useEffect } from "react";

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  display() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }

  findSecondLargest() {
    let firstMax = Number.NEGATIVE_INFINITY;
    let secondMax = Number.NEGATIVE_INFINITY;

    let current = this.head;

    while (current !== null) {
      if (current.data > firstMax) {
        secondMax = firstMax;
        firstMax = current.data;
      } else if (current.data > secondMax && current.data !== firstMax) {
        secondMax = current.data;
      }

      current = current.next;
    }

    return secondMax;
  }
}

const LinkedListComponent = () => {
  useEffect(() => {
    // Taking numbers from the user
    const userInput = prompt("Enter numbers separated by spaces:");
    const numbers = userInput.split(" ").map(Number);

    // Adding numbers to the linked list
    const numList = new LinkedList();
    numbers.forEach((num) => {
      numList.addNode(num);
    });

    // Reversing the linked list
    numList.reverse();

    // Displaying the reversed linked list
    console.log("Reversed Linked List:");
    numList.display();

    // Finding the second largest number
    const secondLargest = numList.findSecondLargest();
    console.log("Second Largest Number:", secondLargest);
  }, []);

  return <div>Check the console for output.</div>;
};

export default LinkedListComponent;
