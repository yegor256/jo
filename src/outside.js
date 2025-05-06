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

/* exported outside */

/**
 * The constructor of the outside.
 *
 * This patch checks the location of the provided DIV and calls the
 * encapsulated function if the element is already outside the borders
 * of its parent element.
 *
 * @constructor
 * @param {Function} a - The action to call when hit
 * @return {Patch} The patch object
 */
function outside(a) {
  return {
    action: a,
    moved: function(div, vector) {
      const element = div.element();
      const box = element.parentElement.getBoundingClientRect();
      const rect = div.rect();
      let v = vector;
      if (rect.left > box.width - rect.width || rect.left < 0 ||
        rect.top > box.height - rect.height || rect.top < 0) {
        v = a(div, v);
      }
      return v;
    },
  };
}
