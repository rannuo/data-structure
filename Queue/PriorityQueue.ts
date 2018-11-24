import { Queue } from "./Queue";
/**
 * 队列元素类
 */
interface IQueueElement<T> {
  element: T;
  priority: number; // priority 越小，优先级越大
}

/**
 * 优化队列类
 */
export class PriorityQueue<T> extends Queue<IQueueElement<T>> {

  /**
   * 排队方法
   */
  public enqueue(enqueueElement: IQueueElement<T>) {

    let added = false;
    // 从队首开始，找到第一个优先级比自己小的，然后排他前边
    for (let i = 0; i < this.items.length; i++) {
      if (enqueueElement.priority < this.items[i].priority) {
        this.items.splice(i, 0, enqueueElement);
        added = true;
        break;
      }
    }
    if (!added) {
      // 如果没找到优先级比自己小的，说明自己优先级最小，所以站到队尾
      this.items.push(enqueueElement);
    }
  }

}
