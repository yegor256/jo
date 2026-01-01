/*
 * SPDX-FileCopyrightText: Copyright (c) 2019-2026 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

describe('missed', function() {
  it('hits the laser when the div is outside of visible area', function() {
    const e = document.createElement('div');
    e.id = 'bullet';
    document.getElementById('field').appendChild(e);
    const d = div(window, 'bullet');
    d.move(vector(-1000, 0));
    let observed = false;
    const laser = {
      missed: function() {
        observed = true;
      },
    };
    missed(laser).moved(d, vector(0, 0));
    assert.ok(observed);
  });
});
