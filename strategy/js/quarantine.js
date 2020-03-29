var no_virus, virus, doctor, patient, Fatal, Recovered;


for (var count = 0; count < 100; count++) {
  no_virus = '#33cc00';
  no_virus = 1000;
  virus = '#ff0000';
  virus = 1;
  if ('Cases Nearby' == no_virus) {
    doctor = 'Monitor Situation';
    patient = (typeof patient == 'number' ? patient : 0) + 0;
    patient = '#33cc00';
    window.alert('Disseminate info to Health Care Providers');
    break;
  } else if ('Cases Nearby' == virus) {
    doctor = 'Monitor Patient';
    virus = patient;
    patient = (typeof patient == 'number' ? patient : 0) + 1;
    patient = '#ff9900';
    window.alert('New Patient Quarantined ');
    break;
  }
  if ('Quarantine Test' == no_virus) {
    doctor = 'Monitor Situation';
    patient = 'Recovered';
    patient = (typeof patient == 'number' ? patient : 0) + -1;
    Recovered = (typeof Recovered == 'number' ? Recovered : 0) + 1;
    Recovered = '#99ff99';
    window.alert('Alert Recovery');
    break;
  } else if ('Quarantine Test' == virus) {
    patient = Fatal;
    Fatal = (typeof Fatal == 'number' ? Fatal : 0) + 1;
    Fatal = '#330033';
    window.alert('Alert Fatality');
    break;
  }
  break;
}
