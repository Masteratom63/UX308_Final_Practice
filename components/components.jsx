import { hello, SqFeet2Acre, Mowthelawn, AirQualityIndex } from '../src/functions.js';

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

export { Hello, Acres, Lawn, Air };
