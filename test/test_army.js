/*
 * SPDX-FileCopyrightText: Copyright (c) 2019-2025 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

describe('army', function() {
  it('connects itself to the DOM', function(done) {
    const a = army(window);
    a.init(10);
    setTimeout(function() {
      assert.ok(div(window, 'invader0').rect().left > 0);
      done();
    }, 100);
  });
  it('can be stopped', function() {
    const a = army(window);
    a.init(10);
    a.stop();
  });
});
