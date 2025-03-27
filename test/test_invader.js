// Copyright (c) 2019-2025 Yegor Bugayenko
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

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
