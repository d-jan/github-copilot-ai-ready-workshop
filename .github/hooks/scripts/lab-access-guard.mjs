#!/usr/bin/env node

import { readFileSync } from 'node:fs';

const LAB_PATH = /(^|[^A-Za-z0-9_.-])(?:\.\/)?lab(?:\/|$)/i;

function containsLabPath(value) {
  if (typeof value === 'string') {
    let decoded = value;
    try {
      decoded = decodeURIComponent(value);
    } catch {
      // Keep the original value when it is not URI encoded.
    }
    return LAB_PATH.test(decoded.replaceAll('\\', '/'));
  }

  if (Array.isArray(value)) {
    return value.some(containsLabPath);
  }

  if (value && typeof value === 'object') {
    return Object.values(value).some(containsLabPath);
  }

  return false;
}

const input = readFileSync(0, 'utf8');
const payload = JSON.parse(input);

if (containsLabPath(payload.toolArgs)) {
  process.stdout.write(
    JSON.stringify({
      permissionDecision: 'deny',
      permissionDecisionReason:
        'lab/** は受講者向け教材のため、実装コンテキストとして参照できません。',
    }),
  );
}
