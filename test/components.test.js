import React from 'react';
import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import {
  Hello,
  Acres,
  Lawn,
  Air,
  Yee_Ha,
  Slope,
} from '../components/components.jsx';
import { load } from 'cheerio';

describe('components test', function () {
  it('tests for 3 results of hello', function () {
    const sHtml = renderToString(React.createElement(Hello));
    const $ = load(sHtml);
    expect($('p').length).toBe(3);
  });
  it('tests for 3 results of Acres', function () {
    const sHtml = renderToString(React.createElement(Acres));
    const $ = load(sHtml);
    expect($('p').length).toBe(3);
  });
  it('tests for 3 results of Lawn', function () {
    const sHtml = renderToString(React.createElement(Lawn));
    const $ = load(sHtml);
    expect($('p').length).toBe(3);
  });
  it('tests for 6 results of Air', function () {
    const sHtml = renderToString(React.createElement(Air));
    const $ = load(sHtml);
    expect($('p').length).toBe(6);
  });
  it('tests for 4 results of Air', function () {
    const sHtml = renderToString(React.createElement(Yee_Ha));
    const $ = load(sHtml);
    expect($('p').length).toBe(4);
  });
  it('tests for 3 results of Slope', function () {
    const sHtml = renderToString(React.createElement(Slope));
    const $ = load(sHtml);
    expect($('p').length).toBe(3);
  });
});
