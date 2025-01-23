/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2019-2025 Yegor Bugayenko
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
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
