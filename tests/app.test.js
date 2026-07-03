import test from 'node:test';
import assert from 'node:assert/strict';
import { buildPlanSummary } from '../app.js';

test('buildPlanSummary recommends an emergency fund for smaller savings', () => {
  const summary = buildPlanSummary(60, 'en');

  assert.equal(summary.step, 'Build an emergency fund');
  assert.match(summary.message, /emergency fund/);
});

test('buildPlanSummary uses Spanish copy when requested', () => {
  const summary = buildPlanSummary(250, 'es');

  assert.equal(summary.step, 'Abre una Roth IRA');
  assert.match(summary.message, /Roth IRA/);
});
