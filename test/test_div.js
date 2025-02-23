/*
 * The MIT License (MIT)
 *
 * SPDX-FileCopyrightText: Copyright (c) 2019-2025 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

describe('div', function() {
  it('moves left and right', function() {
    const d = div(window, 'laser');
    const rect = d.rect();
    const x = rect.left;
    const y = rect.top;
    d.move(vector(10, -20));
    const after = d.rect();
    assert.equal(x + 10, after.left);
    assert.equal(y - 20, after.top);
  });
});
