/*
 * SPDX-FileCopyrightText: Copyright (c) 2019-2025 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

before(function() {
  fixture.setBase('fixtures');
});

beforeEach(function() {
  document.body.outerHTML =
    fixture.load('context.html').map((f) => f.outerHTML).join('');
});

afterEach(function() {
  fixture.cleanup();
});
