const App = require("./outPut.js");

class Patient {
  static ids = 1;
  id;
  name;
  gender;
  age;
  email;
  address;
  mobileNnmber;

  constructor(name, gender, age, email, address, mobileNnmber) {
    
    this.id = Patient.ids;
    this.name = name;
    this.gender = gender;
    this.address = address;
    this.email = email;
    this.age = age;
    this.mobileNnmber = mobileNnmber;
    Patient.ids++;
  }

  setName(name) {
    this.name = name;
  }
  setGender(gender) {
    this.gender = gender;
  }
  setAge(age) {
    this.age = age;
  }
  setEmail(email) {
    this.email = email;
  }
  setAdress(adress) {
    this.address = adress;
  }
  setmobileNumber(mobile) {
    this.mobile = mobile;
  }
}
module.exports = Patient;
