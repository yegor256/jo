/*
 * The MIT License (MIT)
 *
 * SPDX-FileCopyrightText: Copyright (c) 2019-2025 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

describe('patched', function() {
  it('patches the div after move', function() {
    const e = document.createElement('div');
    e.id = 'bullet';
    document.getElementById('field').appendChild(e);
    const d = div(window, 'bullet');
    let seen = false;
    const patch = {
      moved: function(div, vector) {
        seen = true;
        return vector;
      },
    };
    patched(d, patch).move(vector(1, 1));
    assert.ok(seen);
  });
});
