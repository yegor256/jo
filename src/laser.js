/*
 * SPDX-FileCopyrightText: Copyright (c) 2019-2025 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
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
    bullet: bullet(w, 10, -5),
    loaded: true,
    move: function(dx) {
      patched(
        div(this.window, 'laser'),
        outside((d, v) => d.move(vector(-v.dx, v.dy))),
        trace()
      ).move(vector(dx, 0));
    },
    shoot: function(army) {
      if (this.loaded) {
        this.loaded = false;
        const div = this.window.document.getElementById('laser');
        const x = div.getBoundingClientRect().left;
        this.bullet.launch(this, army, x);
      }
    },
    missed: function() {
      this.loaded = true;
    },
    init: function(army) {
      this.window.addEventListener('keydown', function(evt) {
        if (evt.keyCode === 37) {
          this.move(-15);
        }
        if (evt.keyCode === 39) {
          this.move(+15);
        }
        if (evt.keyCode === 32) {
          this.shoot(army);
        }
      }.bind(this));
    },
  };
}
