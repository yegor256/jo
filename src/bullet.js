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

/* exported bullet, eslint-disable indent */

/**
 * The constructor of the bullet.
 *
 * @constructor
 * @param {Document} w - The DOM window to encapsulate
 * @param {Integer} v - The velocity to fly with
 * @param {Integer} d - The DY to apply on every step
 * @return {Bullet} The invader object
 */
function bullet(w, v, d) {
  return {
    window: w,
    velocity: v,
    dy: d,
    launch: function(laser, army, x) {
      const e = this.window.document.createElement('div');
      e.id = 'bullet';
      e.style.left = x + 'px';
      this.window.document.getElementById('field').appendChild(e);
      this.fly(laser, army);
    },
    fly: function(laser, army) {
      const v = patched(
        div(this.window, 'bullet'),
        kill(army),
        missed(laser),
        outside((div, vec) => vector(0, 0)),
        trace(),
        grave()
      ).move(vector(0, this.dy));
      if (v.dy != 0) {
        this.window.setTimeout(function() {
          this.fly(laser, army);
        }.bind(this), this.velocity);
      }
    },
  };
}
