// SPDX-FileCopyrightText: Copyright (c) 2019-2026 Yegor Bugayenko
// SPDX-License-Identifier: MIT

const js = require('@eslint/js');

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2015,
      sourceType: 'commonjs',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        module: 'readonly',
        require: 'readonly',
        process: 'readonly',
        alert: 'readonly',
        KeyboardEvent: 'readonly'
      }
    },
    rules: {
      'indent': 'off',
      'max-len': 'off',
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      'no-console': 'off'
    }
  },
  {
    files: ['src/**/*.js'],
    languageOptions: {
      globals: {
        army: 'readonly',
        bullet: 'readonly',
        div: 'readonly',
        field: 'readonly',
        grave: 'readonly',
        invader: 'readonly',
        kill: 'readonly',
        laser: 'readonly',
        missed: 'readonly',
        outside: 'readonly',
        patched: 'readonly',
        quit: 'readonly',
        trace: 'readonly',
        vector: 'readonly'
      }
    },
    rules: {
      'no-unused-vars': ['error', {
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^(army|bullet|div|field|grave|invader|kill|laser|missed|outside|patched|quit|trace|vector)$'
      }]
    }
  },
  {
    files: ['test/**/*.js'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        before: 'readonly',
        after: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        assert: 'readonly',
        done: 'readonly',
        fixture: 'readonly',
        army: 'readonly',
        bullet: 'readonly',
        div: 'readonly',
        field: 'readonly',
        grave: 'readonly',
        invader: 'readonly',
        kill: 'readonly',
        laser: 'readonly',
        missed: 'readonly',
        outside: 'readonly',
        patched: 'readonly',
        quit: 'readonly',
        trace: 'readonly',
        vector: 'readonly',
        triggered: 'writable',
        alert: 'writable'
      }
    }
  }
];
