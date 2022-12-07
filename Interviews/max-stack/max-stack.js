let maxEle;

// Prints maximum element of MyStack
function getMax() {
  if (s.length == 0) document.write("Stack is empty" + "</br>");
  // variable maxEle stores the maximum element
  // in the stack.
  else
    document.write("Maximum Element in " + "the stack is: " + maxEle + "</br>");
}

// Prints top element of MyStack
function peek() {
  if (s.length == 0) {
    document.write("Stack is empty ");
    return;
  }

  let t = s[s.length - 1]; // Top element.

  document.write("Top Most Element is: ");

  // If t < maxEle means maxEle stores
  // value of t.
  if (t > maxEle) document.write(maxEle);
  else document.write(t);
}

// Remove the top element from MyStack
function pop() {
  if (s.length == 0) {
    document.write("Stack is empty" + "</br>");
    return;
  }

  document.write("Top Most Element Removed: ");
  let t = s[s.length - 1];
  s.pop();

  // Maximum will change as the maximum element
  // of the stack is being removed.
  if (t > maxEle) {
    document.write(maxEle + "</br>");
    maxEle = 2 * maxEle - t;
  } else document.write(t + "</br>");
}

// Removes top element from MyStack
function push(x) {
  // Insert new number into the stack
  if (s.length == 0) {
    maxEle = x;
    s.push(x);
    document.write("Number Inserted: " + x + "</br>");
    return;
  }

  // If new number is less than maxEle
  if (x > maxEle) {
    s.push(2 * x - maxEle);
    maxEle = x;
  } else s.push(x);

  document.write("Number Inserted: " + x + "</br>");
}
