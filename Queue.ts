/**
 * 队列类
 */
export class Queue<T> {
  private items: T[] = [];

  /**
   * 向队列添加元素
   * @param element 元素
   */
  public enqueue(element: T) {
    this.items.push(element);
  }

  /**
   * 从队首移除元素
   */
  public dequeue() {
    return this.items.shift();
  }

  /**
   * 查看队列的头部元素
   */
  public get front() {
    return this.items[0];
  }

  /**
   * 查看队列是否为空
   */
  public get isEmpty() {
    return this.items.length === 0;
  }

  /**
   * 查看队列的长度
   */
  public get size() {
    return this.items.length;
  }

  /**
   * 打印队列
   */
  public print() {
    console.log(this.items);
  }
}
