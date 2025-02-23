/*
 * The MIT License (MIT)
 *
 * SPDX-FileCopyrightText: Copyright (c) 2019-2025 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

describe('outside', function() {
  it('catches when the div is outside of visible area', function() {
    const e = document.createElement('div');
    e.id = 'bullet';
    document.getElementById('field').appendChild(e);
    const d = div(window, 'bullet');
    d.move(vector(-1000, 0));
    let observed = false;
    outside(function(div, vector) {
      observed = true;
    }).moved(d, vector(0, 0));
    assert.ok(observed);
  });
});
