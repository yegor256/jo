/*
 * SPDX-FileCopyrightText: Copyright (c) 2019-2025 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

/* exported bullet */

/**
 * The constructor of the bullet.
 *
 * @constructor
 * @param {Document} w - The DOM window to encapsulate
 * @param {Integer} v - The velocity to fly with
 * @param {Integer} d - The DY to apply on every step
 * @return {Bullet} The bullet object
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
        outside((_div, _vec) => vector(0, 0)),
        trace(),
        grave()
      ).move(vector(0, this.dy));
      if (v.dy !== 0) {
        this.window.setTimeout(function() {
          this.fly(laser, army);
        }.bind(this), this.velocity);
      }
    },
  };
}
