var citizen, no_virus, patient, virus, Recovered, Fatal;


if ('Cases Nearby' == no_virus) {
  citizen = 'Monitor Situation';
  window.alert('Disseminate info to Health Care Providers');
}
if ('Monitor Situation' == virus) {
  patient = virus;
  virus = (typeof virus == 'number' ? virus : 0) + 1;
  window.alert('Follow Health Care Providers Instructions');
}
if ('Quarantine Test' == no_virus) {
  virus = 'Recovered';
  Recovered = (typeof Recovered == 'number' ? Recovered : 0) + 1;
  window.alert('Alert Recovery');
} else if ('Quarantine Test' == virus) {
  virus = 'Fatal';
  Fatal = (typeof Fatal == 'number' ? Fatal : 0) + 1;
  window.alert('Alert Fatality');
}
