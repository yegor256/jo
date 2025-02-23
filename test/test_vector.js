/*
 * The MIT License (MIT)
 *
 * SPDX-FileCopyrightText: Copyright (c) 2019-2025 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

describe('vector', function() {
  it('checks itself for zero', function() {
    const v1 = vector(0, 0);
    assert.ok(v1.dx === 0);
    const v2 = vector(1, 0);
    assert.ok(v2.dx === 1);
  });
});
