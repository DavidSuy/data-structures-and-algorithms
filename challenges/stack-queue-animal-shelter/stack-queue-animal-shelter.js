class AnimalShelter {
  constructor() {
    this.dog = []; // dealt with as queue
    this.cat = []; // dealt with as queue
    this.order = 0;
  }

  enqueue(animal) {
    const order = ++this.order;
    if (animal instanceof Dog) {
      this.dog.unshift({ animal, order });
    } else {
      this.cat.unshift({ animal, order });
    }
  }
  dequeue(type) {
    const dog = this.dog;
    const cat = this.cat;

    if (!type) {
      if (!dog.length && !cat.length) {
        throw { Error: "Both queues are empty!" };
      }

      if (dog.length && !cat.length) {
        return dog.pop();
      }
      if (!dog.length && cat.length) {
        return cat.pop();
      }
      if (dog[dog.length - 1].order < cat[cat.length - 1].order) {
        return dog.pop();
      } else {
        return cat.pop();
      }
    }

    type = type.toLowerCase();
    if (type === Dog.type) {
      if (!dog.length) {
        throw { Error: "Dogs queue is empty!" };
      } else {
        return dog.pop();
      }
    }

    if (type === Cat.type) {
      if (!cat.length) {
        throw { Error: "Cats queue is empty!" };
      } else {
        return cat.pop();
      }
    }

    throw { Error: "This type of " + type + " is unsupported" };
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}
Dog.type = "dog";

class Cat {
  constructor(name) {
    this.name = name;
  }
}
Cat.type = "cat";

module.exports = {
  AnimalShelter,
  Dog,
  Cat,
};
