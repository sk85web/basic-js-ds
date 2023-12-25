const { NotImplementedError } = require('../extensions/index.js')

const { ListNode } = require('../extensions/list-node.js')

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.headQue = null
    this.tailQue = null
  }

  getUnderlyingList() {
    return this.headQue
  }

  enqueue(value) {
    const node = new ListNode(value)

    if (!this.headQue) {
      this.headQue = node
      this.tailQue = node
    } else {
      this.tailQue.next = node
      this.tailQue = node
    }
  }

  dequeue() {
    const headQueInProcess = this.headQue
    this.headQue = this.headQue.next
    return headQueInProcess.value
  }
}

module.exports = {
  Queue,
}
