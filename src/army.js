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

/* exported army */

/**
 * The constructor of the army.
 *
 * @constructor
 * @param {Document} w - The DOM window to encapsulate
 * @return {Army} The army object
 */
function army(w) {
  return {
    window: w,
    invaders: [],
    total: 0,
    init: function(v = 10000) {
      this.launch(v);
    },
    stop: function() {
      this.invaders.forEach((i) => i.stop());
      alert('Game over!');
    },
    kill: function(x, y) {
      this.invaders.forEach(function(i, idx, obj) {
        if (i.fire(x, y)) {
          obj.splice(idx, 1);
        }
      });
    },
    launch: function(v) {
      const i = invader(this.window, this.total++);
      this.invaders.push(i);
      i.launch(this);
      this.window.setTimeout(function() {
        this.launch(v - 50);
      }.bind(this), v);
    },
  };
}
