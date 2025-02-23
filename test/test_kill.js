/*
 * SPDX-FileCopyrightText: Copyright (c) 2019-2025 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

describe('kill', function() {
  it('destroys the invader', function(done) {
    const a = army(window);
    const e = document.createElement('div');
    e.id = 'bullet';
    a.className = 'bullet';
    document.getElementById('field').appendChild(e);
    const b = div(window, 'bullet');
    a.init();
    const i = div(window, 'invader0');
    const ri = i.rect();
    const rb = b.rect();
    b.move(vector(ri.left - rb.left, ri.top - rb.top));
    kill(a).moved(b, vector(0, 0));
    setTimeout(function() {
      assert.ok(document.getElementById('invader0') == null);
      done();
    }, 100);
  });
});
