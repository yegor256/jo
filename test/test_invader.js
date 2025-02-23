/*
 * SPDX-FileCopyrightText: Copyright (c) 2019-2025 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

describe('invader', function() {
  it('connects itself to the DOM', function(done) {
    const i = invader(window, 0);
    i.launch();
    const d = div(window, 'invader0');
    const before = d.rect().left;
    setTimeout(function() {
      assert.notEqual(before, d.rect().left);
      done();
    }, 100);
  });
  it('destroys itself', function() {
    const i = invader(window, 55);
    i.launch();
    const d = div(window, 'invader55');
    const r = d.rect();
    assert.ok(!i.fire(r.left - 1, r.top - 1), 'ignores a missfire');
    assert.ok(i.fire(r.left + 1, r.top + 1), 'dies on fire');
  });
});
