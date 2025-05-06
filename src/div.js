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

/* exported div */

/**
 * The constructor of the div.
 *
 * @constructor
 * @param {Document} w - The DOM window to encapsulate
 * @param {Integer} i - The ID of the DIV
 * @return {Div} The DIV object
 */
function div(w, i) {
  return {
    window: w,
    id: i,
    rect: function() {
      return this.element().getBoundingClientRect();
    },
    element: function() {
      const e = this.window.document.getElementById(this.id);
      if (e == null) {
        throw new Error('The element #' + this.id + ' not found in DOM');
      }
      return e;
    },
    move: function(v) {
      const rect = this.rect();
      const x = rect.left + v.dx;
      const y = rect.top + v.dy;
      const div = this.element();
      div.style.left = x + 'px';
      div.style.top = y + 'px';
      return v;
    },
  };
}
