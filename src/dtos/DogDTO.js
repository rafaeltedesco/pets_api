class DogDTO {
  build(dogData) {
    this.setName(dogData.name)
      .setAge(dogData.age)
      .setBreed(dogData.breed)
      .setWeight(dogData.weight)
      .setOwnerId(dogData.ownerId);
    return this;
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setBreed(breed) {
    this.breed = breed;
    return this;
  }

  setAge(age) {
    this.age = age;
    return this;
  }

  setWeight(weight) {
    this.weight = weight;
    return this;
  }

  setOwnerId(ownerId) {
    this.ownerId = ownerId;
    return this;
  }
}

module.exports = DogDTO;
