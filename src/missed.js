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

/* exported missed */

/**
 * The constructor of the missed.
 *
 * This patch calls the method missed() in the encapsulated laser, if the
 * bullet (provided in the argument DIV) is already outside of the field.
 * The laser most probably will reload itself.
 *
 * @constructor
 * @param {Lazer} lz - The lazer to hit when missed
 * @return {Patch} The patch object
 */
function missed(lz) {
  return {
    laser: lz,
    moved: function(div, vec) {
      if (outside((d, v) => vector(0, 0)).moved(div, vec).dy == 0) {
        lz.missed();
      }
      return vec;
    },
  };
}
