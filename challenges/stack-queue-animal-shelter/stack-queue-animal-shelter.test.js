const { AnimalShelter, Dog, Cat } = require("./stack-queue-animal-shelter");

describe("Animal shelter", () => {
  let shelter = new AnimalShelter();

  it("Should be able to enqueue a dog", () => {
    shelter.enqueue(new Dog("dog1"));
    expect(shelter.dog.length).toBe(1);
  });
  it("Should be able to enqueue a cat", () => {
    shelter.enqueue(new Cat("cat1"));
    expect(shelter.cat.length).toBe(1);
  });
  it("Should be able to dequeue a dog", () => {
    shelter.enqueue(new Dog("dog2"));
    expect(shelter.dequeue("dog").animal.name).toBe("dog1");
  });
  it("Should be able to dequeue a cat", () => {
    shelter.enqueue(new Cat("cat2"));
    expect(shelter.dequeue("cat").animal.name).toBe("cat1");
  });
});
