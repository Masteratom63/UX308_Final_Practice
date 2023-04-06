import exp from 'constants';

function hello(name) {
  return `hello ${name}`;
}

function SqFeet2Acre(SqFeet) {
  var Acres;

  Acres = SqFeet / 43560;

  return Number(Acres.toFixed(2));
}

function Mowthelawn(width, length, cut) {
  var minutes;
  minutes = (width * length) / cut;

  return Number(minutes.toFixed(2));
}

function AirQualityIndex(AQI) {
  if (AQI >= 0 && AQI <= 50) {
    return 'Good';
  } else if (AQI >= 51 && AQI <= 100) {
    return 'Moderate';
  } else if (AQI >= 101 && AQI <= 150) {
    return 'Unhealthy for Sensitive Groups';
  } else if (AQI >= 151 && AQI <= 200) {
    return 'Unhealthy';
  } else if (AQI >= 201 && AQI <= 300) {
    return 'Very Unhealthy';
  } else {
    return 'Hazardous';
  }
}

function yee_ha(number) {
  if (number % 3 == 0 && number % 7 == 0) {
    return 'Yee Ha';
  } else if (number % 3 == 0) {
    return 'Yee';
  } else if (number % 7 == 0) {
    return 'Ha';
  } else {
    return 'Nada';
  }
}

export { hello, SqFeet2Acre, Mowthelawn, AirQualityIndex, yee_ha };
