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

/* exported bullet, eslint-disable indent */

/**
 * The constructor of the bullet.
 *
 * @constructor
 * @param {Document} w - The DOM window to encapsulate
 * @param {Integer} v - The velocity to fly with
 * @return {Bullet} The invader object
 */
function bullet(w, v = 10) {
  return {
    window: w,
    velocity: v,
    launch: function(laser, x, dy = -5) {
      const e = this.window.document.createElement('div');
      e.id = 'bullet';
      e.style.left = x + 'px';
      this.window.document.getElementById('field').appendChild(e);
      this.fly(laser, dy);
    },
    fly: function(laser, dy) {
      const v = patched(
        div(this.window, 'bullet'),
        missed(laser),
        outside((div, vector) => vec(0, 0)),
        trace(),
        grave()
      ).move(vec(0, dy));
      if (v.dy != 0) {
        this.window.setTimeout(function() {
          this.fly(laser, dy);
        }.bind(this), this.velocity);
      }
    },
  };
}
