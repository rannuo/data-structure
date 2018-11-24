/**
 * 栈类
 */
export class Stack<T> {

  private items: T[] = [];

  /**
   * 添加一个元素到栈顶
   * @param element 元素
   */
  public push(element: T) {
    this.items.push(element);
  }

  /**
   * 取出栈顶的元素
   */
  public pop() {
    return this.items.pop();
  }

  /**
   * 查看栈顶的元素
   */
  public peek() {
    return this.items[this.items.length - 1];
  }

  /**
   * 检查栈是否为空
   */
  public get isEmpty() {
    return this.items.length === 0;
  }

  /**
   * 查看栈的长度
   */
  public get size() {
    return this.items.length;
  }

  /**
   * 清空栈
   */
  public clear() {
    this.items = [];
  }

  /**
   * 打印栈
   */
  public print() {
    console.log(this.items.toString());
  }
}
