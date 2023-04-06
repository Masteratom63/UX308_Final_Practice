import {
  hello,
  SqFeet2Acre,
  Mowthelawn,
  AirQualityIndex,
  yee_ha, slopeofline,
} from '../src/functions.js';

function Hello() {
  return (
    <section>
      <h2>results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>
  );
}

function Acres() {
  return (
    <section>
      <h2>results</h2>
      <p>SqFeet2Acre(100000) == "{SqFeet2Acre(100000)}"</p>
      <p>SqFeet2Acre(200000) == "{SqFeet2Acre(200000)}"</p>
      <p>SqFeet2Acre(300000) == "{SqFeet2Acre(300000)}"</p>
    </section>
  );
}

function Lawn() {
  return (
    <section>
      <h2>results</h2>
      <p>Mowthelawn(10,10,2) == "{Mowthelawn(10, 10, 2)}"</p>
      <p>Mowthelawn(100,100,10) == "{Mowthelawn(100, 100, 10)}"</p>
      <p>Mowthelawn(80,90,25) == "{Mowthelawn(80, 90, 25)}"</p>
    </section>
  );
}

function Air() {
  return (
    <section>
      <h2>results</h2>
      <p>AirQualityIndex(10) == "{AirQualityIndex(10)}"</p>
      <p>AirQualityIndex(70) == "{AirQualityIndex(70)}"</p>
      <p>AirQualityIndex(120) == "{AirQualityIndex(120)}"</p>
      <p>AirQualityIndex(170) == "{AirQualityIndex(170)}"</p>
      <p>AirQualityIndex(270) == "{AirQualityIndex(270)}"</p>
      <p>AirQualityIndex(370) == "{AirQualityIndex(370)}"</p>
    </section>
  );
}

function Yee_Ha() {
  return (
    <section>
      <h2>results</h2>
      <p>yee_ha(21) == "{yee_ha(21)}"</p>
      <p>yee_ha(9) == "{yee_ha(9)}"</p>
      <p>yee_ha(14) == "{yee_ha(14)}"</p>
      <p>yee_ha(20) == "{yee_ha(20)}"</p>
    </section>
  );
}

function Slope() {
  return (
    <section>
      <h2>results</h2>
      <p>slopeofline(10,20,30,40) == "{slopeofline(10,20,30,40)}"</p>
      <p>slopeofline(100,200,300,400) == "{slopeofline(100,200,300,400)}"</p>
      <p>slopeofline(200,400,600,800) == "{slopeofline(200,400,600,800)}"</p>
    </section>
  );
}

export { Hello, Acres, Lawn, Air, Yee_Ha, Slope };
