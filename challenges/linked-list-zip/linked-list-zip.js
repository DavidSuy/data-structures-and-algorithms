module.exports = function zipLists(l1, l2) {
  let l1Cur = l1.head;
  let l2Cur = l2.head;
  let l1Next;
  let l2Next;

  while (l1Cur != null && l2Cur != null) {
    l1Next = l1Cur.next;
    l2Next = l2Cur.next;

    l2Cur.next = l1Next;

    l1Cur.next = l2Cur;

    l1Cur = l1Next;
    l2Cur = l2Next;
  }
  return l1;
};
