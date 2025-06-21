/*
 * SPDX-FileCopyrightText: Copyright (c) 2019-2025 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

/* exported invader */

/**
 * The constructor of the invader.
 *
 * @constructor
 * @param {Document} w - The DOM window to encapsulate
 * @param {Integer} i - The ID
 * @return {Invader} The invader object
 */
function invader(w, i) {
  return {
    window: w,
    id: 'invader' + i,
    alive: true,
    launch: function(army) {
      const e = this.window.document.createElement('div');
      e.id = this.id;
      e.className = 'invader';
      this.window.document.getElementById('field').appendChild(e);
      this.attack(army, 20, 2);
    },
    stop: function() {
      this.alive = false;
    },
    fire: function(x, y) {
      const d = div(this.window, this.id);
      const r = d.rect();
      let killed = false;
      if (x < r.left + r.width && x >= r.left &&
        y < r.top + r.height && y >= r.top) {
        this.alive = false;
        killed = true;
      }
      return killed;
    },
    attack: function(army, v, dx) {
      const after = patched(
        div(this.window, this.id),
        outside((div, vec) => div.move(vector(vec.dx, 20))),
        outside((div, vec) => vector(-vec.dx, vec.dy)),
        quit(army),
        trace()
      ).move(vector(dx, 0));
      if (after.dx !== 0 && this.alive) {
        this.window.setTimeout(function() {
          this.attack(army, v, after.dx);
        }.bind(this), v);
      }
      if (!this.alive) {
        div(this.window, this.id).element().remove();
      }
    },
  };
}
