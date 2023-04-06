import { describe, it, expect } from 'vitest';
import {
  hello,
  SqFeet2Acre,
  Mowthelawn,
  AirQualityIndex,
  yee_ha,
  slopeofline,
} from '../src/functions.js';

describe('functions test', function () {
  it('tests for hello Rich', function () {
    const sResult = hello('Rich');
    expect(sResult).toBe('hello Rich');
  });
  it('tests for 100,000 SqFeet', function () {
    const nResult = SqFeet2Acre(100000);
    expect(nResult).toBe(2.3);
  });
  it('tests for minutes taken to cut the lawn', function () {
    const nResult = Mowthelawn(10, 10, 2);
    expect(nResult).toBe(50);
  });
  it('tests for Good AQI', function () {
    const nResult = AirQualityIndex(10);
    expect(nResult).toBe('Good');
  });
  it('tests for Moderate AQI', function () {
    const nResult = AirQualityIndex(70);
    expect(nResult).toBe('Moderate');
  });
  it('tests for Unhealthy for Sensitive Groups" AQI', function () {
    const nResult = AirQualityIndex(120);
    expect(nResult).toBe('Unhealthy for Sensitive Groups');
  });
  it('tests for Unhealthy AQI', function () {
    const nResult = AirQualityIndex(170);
    expect(nResult).toBe('Unhealthy');
  });
  it('tests for Very Unhealthy AQI', function () {
    const nResult = AirQualityIndex(270);
    expect(nResult).toBe('Very Unhealthy');
  });
  it('tests for Hazardous AQI', function () {
    const nResult = AirQualityIndex(370);
    expect(nResult).toBe('Hazardous');
  });
  it('tests for Yee Ha', function () {
    const nResult = yee_ha(21);
    expect(nResult).toBe('Yee Ha');
  });
  it('tests for Yee', function () {
    const nResult = yee_ha(9);
    expect(nResult).toBe('Yee');
  });
  it('tests for Ha', function () {
    const nResult = yee_ha(14);
    expect(nResult).toBe('Ha');
  });
  it('tests for Nada', function () {
    const nResult = yee_ha(20);
    expect(nResult).toBe('Nada');
  });
  it('tests for slope 1', function () {
    const nResult = slopeofline(10, 20, 30, 40);
    expect(nResult).toBe(1);
  });
  it('tests for slope 2', function () {
    const nResult = slopeofline(100, 200, 300, 400);
    expect(nResult).toBe(1);
  });
  it('tests for slope 3', function () {
    const nResult = slopeofline(200, 400, 600, 800);
    expect(nResult).toBe(1);
  });
});
