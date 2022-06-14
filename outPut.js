const prompt = require("prompt-sync")({ sigint: true });
const Patient = require("./Patient.js");
const Treatment = require("./Treatment.js");
const Appointment = require("./Appointment.js");
const emailq = require("./validation.js");
let patients = [];
let appointments = [];
let treatments = [];
function App() {
  let id;
  let name;
  let gender;
  let age;
  let email;
  let address;
  let mobileNnmber;
  let n;
  let number;
  let patientId;
  let time;
  let date;
  let patientId2;
  let teethNumber;
  let toothStr;
  let appointmentId;
  console.log(`Choose one to choices :
  1- Add patient
  2- Add appointment
  3- Add treatment
  4- List patients
  5- List appointments
  6- End `);
  n = prompt();
  console.log("___________________________");
  if (n == 1) {
    name = prompt("enter The name : ");
    if (name.length > 5) {
    } else {
      return console.log("The Name is Not Vaild");
    }
    gender = prompt("enter the age : ");
    age = prompt("enter the gender : ");
    typeof age === "number" && age > 5 && age < 90;
    email = prompt("enter the email : ");
    let x = emailq(email);
    if (x == 1) {
    } else if (x == 0) {
      return console.log("Invalid email");
    }

    address = prompt("enter The address : ");
    mobileNnmber = prompt("enter The mobileNnmber : ");
    // if (typeof mobileNnmber === "number" && mobileNnmber.length > 8) {
    // } else {
    //   return console.log("Invalid Number");
    // }
    // id = Patient.ids++;
    
    // console.log(Patient.ids);
    
    let patient = new Patient( name, gender, age, email, address, mobileNnmber);
    patients.push(patient);
  } else if (n == 2) {
    patientId = prompt("Enter patient Id : ");
    time = prompt("Enter appointment time : ");
    date = prompt("Enter appointment Date : ");
    let apoi = new Appointment(patientId, time, date);
    appointments.push(apoi);
  } else if (n == 3) {
    patientId2 = prompt("Enter patient Id : ");
    appointmentId = prompt("Enter appointment Id : ");
    teethNumber = prompt("enter Teeth Number : ");
    toothStr = prompt("Enter the Date : ");
    let ter = Treatment(patientId2, appointmentId, teethNumber, toothStr);
    appointments.push(ter);
  } else if (n == 4) {
    for (let patient of patients) {
      console.log(`Patient ID : ${patient.id}`);
      console.log(`Patient name : ${patient.name}`);
      console.log(`Patient age : ${patient.age}`);
      console.log(`Appointment id : ${patient.appointmentId}`);
      console.log(`Patient treatments : ${patient.treatments}`);
      console.log("----------------------------------");
    }
  } else if (n == 5) {
    for (let appointment of appointments) {
      console.log(`Appointment ID : ${appointment.appointmentId}`);
      console.log(`Appointment date : ${appointment.date}`);
      console.log(`Appointments time : ${appointment.time}`);
      console.log("----------------------------------");
    }
  }

  return n;
}

module.exports = App;

