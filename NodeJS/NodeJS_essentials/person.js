class Person {
   constructor(name) {
      this.name = name
   }

   sayMyName() {
      return `My name is ${this.name}, muito prazer!`
   }
}

module.exports = {
   Person,
};