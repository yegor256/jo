/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2019-2020 Yegor Bugayenko
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

/* exported invader */

/**
 * The constructor of the invader.
 *
 * @constructor
 * @param {Document} w - The DOM window to encapsulate
 * @param {Integer} i - The ID
 * @param {Float} v - The velocity
 * @param {Float} a - The acceleration
 * @return {Invader} The invader object
 */
function invader(w, i) {
  return {
    window: w,
    id: 'invader' + i,
    launch: function() {
      const e = this.window.document.createElement('div');
      e.id = this.id;
      e.className = 'invader';
      this.window.document.getElementById('field').appendChild(e);
      this.attack(20, 2);
    },
    attack: function(v, dx) {
      const after = patched(
          div(this.window, this.id),
          outside(function(div, vector) {
            div.move(vec(0, 20));
            return vec(-vector.dx, vector.dy);
          }),
          trace()
      ).move(vec(dx, 0));
      this.window.setTimeout(function() {
        this.attack(v, after.dx);
      }.bind(this), v);
    },
  };
}
