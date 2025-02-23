/*
 * The MIT License (MIT)
 *
 * SPDX-FileCopyrightText: Copyright (c) 2019-2025 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

describe('bullet', function() {
  it('connects itself to the DOM', function(done) {
    const b = bullet(window, 1, -200);
    let observed = false;
    const laser = {
      missed: function() {
        observed = true;
      },
    };
    b.launch(laser, army(), 10);
    setTimeout(function() {
      assert.ok(observed, 'The bulled didn\'t fly out off the screen');
      done();
    }, 100);
  });
});
