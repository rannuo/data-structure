/**
 * 链表的节点
 */
interface INode<T> {
  element: T;
  next: INode<T> | null;
}

/**
 * 链表类
 */
export class LinkedList<T> {

  private length = 0;

  private head: INode<T> | null = null;

  /**
   * 向链表尾部追加一个元素
   * @param element 要添加的元素
   */
  public append(element: T) {
    const node = { element, next: null };

    let current: INode<T>;

    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.length = this.length + 1;
  }

  /**
   * 移除一项
   * @param position 移除的项的位置
   */
  public removeAt(position: number) {
    if (this.head === null) { return null; }
    if (position < 0 || position >= this.length) {
      return null;
    }
    let current: INode<T> = this.head;
    let previous: INode<T>;
    let index = 0;
    if (position === 0) {
      if (this.head) {
        this.head = current.next;
      }
    } else {
      while (index < position) {
        previous = current;
        current = current.next!;
        index++;
      }
      previous!.next = current.next;
    }
    this.length--;
    return current.element;
  }

  /**
   * 插入一个元素到任意一个位置
   * @param element 要插入的元素
   * @param position 要插入的位置
   */
  public insert(element: T, position: number) {
    if (position < 0 || position >= this.length) {
      return false;
    }
    const node: INode<T> = {
      element,
      next: null,
    };
    let current = this.head;
    let previous: INode<T> | null;
    let index = 0;

    if (position === 0) {
      node.next = current;
      this.head = node;
    } else {
      while (index++ < position) {
        previous = current;
        current = current!.next;
      }

      node.next = current;
      previous!.next = node;
    }

    this.length++;
    return true;

  }

  public toString() {
    let current = this.head;
    let str = "";
    while (current) {
      str += current.element + (current.next ? "n" : "");
      current = current.next;
    }
    return str;
  }

  public indexOf(element: T) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (element === current.element) {
        return index;
      }
      current = current.next;
      index ++;
    }
    return -1;
  }

  public remove(element: T) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  get isEmpty() {
    return this.length === 0;
  }

  get size() {
    return this.length;
  }

  public getHead() {
    return this.head;
  }
}
