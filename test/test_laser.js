/*
 * The MIT License (MIT)
 *
 * SPDX-FileCopyrightText: Copyright (c) 2019-2025 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

describe('laser', function() {
  it('moves itself right', function() {
    const lz = laser(window);
    lz.move(+10);
    assert.equal(110, div(window, 'laser').rect().left);
  });
  it('moves itself left', function() {
    const lz = laser(window);
    lz.move(-1000);
    assert.equal(100, div(window, 'laser').rect().left);
  });
  it('fires a bullet', function() {
    const lz = laser(window);
    lz.init(army());
    window.dispatchEvent(new KeyboardEvent('keydown', {keyCode: 32}));
    setTimeout(function() {
      assert.equal(100, div(window, 'bullet').rect().left);
      done();
    }, 100);
  });
  it('connects itself to the DOM', function(done) {
    const lz = laser(window);
    lz.init(army());
    [39, 37, 37, 37].forEach(function(k) {
      window.dispatchEvent(new KeyboardEvent('keydown', {keyCode: k}));
    });
    setTimeout(function() {
      assert.equal(70, div(window, 'laser').rect().left);
      done();
    }, 100);
  });
});
