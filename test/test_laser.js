/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2019 Yegor Bugayenko
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
  beforeEach(function() {
    document.body.innerHTML =
      '<div style="left:100px;position:absolute;" id="laser">x</div>';
  });
  it('moves itself left', function() {
    laser(document).move(+10);
    const div = document.getElementById('laser');
    const rect = div.getBoundingClientRect();
    expect(rect.left).to.equal(110);
  });
  it('connects itself to the DOM', function() {
    laser(document).init();
    document.dispatchEvent(new Event('keydown', {keyCode: 39}));
    document.dispatchEvent(new Event('keydown', {keyCode: 37}));
    document.dispatchEvent(new Event('keydown', {keyCode: 37}));
    setTimeout(function() {
      const div = document.getElementById('laser');
      const rect = div.getBoundingClientRect();
      expect(rect.left).to.equal(85);
      done();
    }, 1000);
  });
});
