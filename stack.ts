interface DataStructure<T> {
  push(newItem: T): void;
  pop(): T | undefined;
}

class Stack<T> implements DataStructure<T> {
  
  items: Array<T> = [];
  
  pop(): T | undefined {
    return  this.items.pop();
  }
  
  push(newItem: T): void {
    this.items.push(newItem);
  }
  
  peek(): T {
    return this.items[this.items.length - 1];
  }
}

let myNumberStack: Stack<number> = new Stack<number>();

myNumberStack.push(1);
myNumberStack.push(2);
myNumberStack.push(3);

console.log(myNumberStack.pop()); // 3
console.log(myNumberStack.peek()); // 2
console.log(myNumberStack.pop()); // 2
console.log(myNumberStack.pop()); // 1
