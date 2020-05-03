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

/* exported laser */

/**
 * The constructor of the laser.
 *
 * @constructor
 * @param {Document} w - The DOM window to encapsulate
 * @return {Laser} The laser object
 */
function laser(w) {
  return {
    window: w,
    bullet: bullet(w),
    loaded: true,
    div: function() {
      return this.window.document.getElementById('laser');
    },
    x: function() {
      return this.div().getBoundingClientRect().left;
    },
    move: function(dx) {
      this.div().style.left = this.x() + dx + 'px';
    },
    shoot: function() {
      if (this.loaded) {
        this.loaded = false;
        this.bullet.launch(this, this.x());
      }
    },
    hit: function() {
      this.loaded = true;
    },
    init: function() {
      this.window.addEventListener('keydown', function(evt) {
        if (evt.keyCode === 37) {
          this.move(-15);
        }
        if (evt.keyCode === 39) {
          this.move(+15);
        }
        if (evt.keyCode === 32) {
          this.shoot();
        }
      }.bind(this));
    },
  };
}
