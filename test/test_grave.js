/*
 * The MIT License (MIT)
 *
 * SPDX-FileCopyrightText: Copyright (c) 2019-2025 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

describe('grave', function() {
  it('destroys the div', function() {
    const e = document.createElement('div');
    e.id = 'bullet';
    document.getElementById('field').appendChild(e);
    const d = div(window, 'bullet');
    grave().moved(d, vector(0, 0));
    assert.ok(document.getElementById('bullet') == null);
  });
});
