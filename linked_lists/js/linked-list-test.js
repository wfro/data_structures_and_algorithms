import { Node, LinkedList }from './linked-list';
import { expect } from 'chai';

describe('linked list', () => {
  let list;
  beforeEach(() => {
    list = new LinkedList();
  });

  it('nodes have data', () => {
    const node = new Node('pizza');
    expect(node.data).to.equal('pizza');
  });

  it('nodes have a next node', () => {
    const node = new Node('pizza');
    node.next = new Node('hello');
    expect(node.next.data).to.equal('hello');
    expect(node.next).to.be.an.instanceof(Node);
  });

  it('accepts next node on init', () => {
    const next = new Node('hello');
    const node = new Node('pizza', next);
    expect(node.next).to.equal(next);
  });

  it('starts with zero elements', () => {
    expect(list.count()).to.equal(0);
  });

  it('starts with a null head', () => {
    expect(list.head).to.be.null;
  });

  it('pushes a single element onto a list', () => {
    list.push('pizza');
    expect(list.head.data).to.equal('pizza');
    expect(list.count()).to.equal(1);
  });

  it('pushes two elements', () => {
    list.push('pizza');
    expect(list.head.data).to.equal('pizza');
    list.push('stromboli');
    expect(list.head.next.data).to.equal('stromboli');
  });

  it('pushes three elements', () => {
    list.push('pizza');
    expect(list.head.data).to.equal('pizza');
    list.push('stromboli');
    expect(list.head.next.data).to.equal('stromboli');
    list.push('burgers');
    expect(list.head.next.next.data).to.equal('burgers');
    expect(list.count()).to.equal(3);
  });

  it('deletes a last node', () => {
    list.push("hello");
    list.push("world");
    list.push("today");
    list.delete("today");
    expect(list.count(0)).to.equal(2);
  });

  it('deletes a middle node', () => {
    list.push("hello")
    list.push("world")
    list.push("today")
    list.delete("world")
    expect(list.count()).to.equal(2);
    expect(list.pop()).to.equal('today');
    expect(list.pop()).to.equal('hello');
  });

  it('deletes the head when then are more nodes', () => {
    list.push("hello")
    list.push("world")
    list.push("today")
    list.delete("hello")
    expect(list.count()).to.equal(2);
    expect(list.pop()).to.equal('today');
    expect(list.pop()).to.equal('world');
  });

  it('converts to an array when there are no elements', () => {
    expect(list.toArray()).to.deep.equal([]);
  });

  it('converts to an array with several elements', () => {
    list.push("hello")
    list.push("world")
    list.push("today")
    expect(list.toArray()).to.deep.equal(["hello", "world", "today"]);
  });

  it('finds the last node', () => {
    list.push("hello")
    list.push("world")
    const node = list.last();
    expect(node.data).to.equal('world');
  });

  it('a node links to its next element', () => {
    list.push("hello")
    list.push("world")
    expect(list.last().data).to.equal('world');
    expect(list.head.next.data).to.equal('world');
  });

  it('next node for last node is nil', () => {
    list.push("world")
    expect(list.last().next).to.be.undefined;
  });

  it('knows if an element is included in the list', () => {
    list.push('hello');
    expect(list.includes('hello')).to.be.true;
    expect(list.includes('bogus')).to.be.false;
  });

  it('finds a given node', () => {
    list.push("hello")
    list.push("world")
    list.push("today")
    expect(list.find('world').data).to.equal('world');
    expect(list.find('world').next.data).to.equal('today');
  });

  it('inserts a node at an arbitrary position', () => {
    list.push("hello")
    list.push("world")
    list.push("today")

    list.insert(1, "pizza")

    expect(list.index('pizza')).to.equal(1);
    expect(list.toArray()).to.deep.equal(["hello", "pizza", "world", "today"]);
  });

  it('inserted node is next node for previous node', () => {
    list.push("hello")
    list.push("world")
    list.push("today")

    list.insert(1, "pizza")

    expect(list.find('pizza').next.data).to.equal('world');
    expect(list.find('hello').next.data).to.equal('pizza');
  });

  it('insert after adds a node after a given node', () => {
    list.push("hello")
    list.push("world")
    list.push("today")

    list.insertAfter("hello", "pizza")

    expect(list.find('pizza').next.data).to.equal('world');
    expect(list.find('hello').next.data).to.equal('pizza');
  });
});

