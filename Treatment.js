class Treatment {
  patientId;
  appointmentId;
  teethNumbers;
  treatmentTooth;

  constructor(patientId, appointmentId, teethNumbers, treatmentTeeth) {
    this.patientId = patientId;
    this.appointmentId = appointmentId;
    this.teethNumbers = teethNumbers;
    this.treatmentTeeth = treatmentTeeth;
  }
}

module.exports = Treatment;
