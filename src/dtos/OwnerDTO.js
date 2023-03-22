class OwnerDTO {
  build(ownerData) {
    this.setName(ownerData.name)
      .setEmail(ownerData.email);
    return this;
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setEmail(email) {
    this.email = email;
    return this;
  }
}

module.exports = OwnerDTO;
