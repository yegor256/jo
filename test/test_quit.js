/*
 * SPDX-FileCopyrightText: Copyright (c) 2019-2026 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

describe('quit', function() {
  it('stops all invaders', function() {
    const a = army(window);
    a.init();
    const i = div(window, 'invader0');
    i.move(vector(0, 10000));
    triggered = false;
    alert = function() {
      triggered = true;
    };
    quit(a).moved(i, vector(0, 0));
    assert.ok(triggered);
  });
});
