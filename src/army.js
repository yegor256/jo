/*
 * The MIT License (MIT)
 *
 * SPDX-FileCopyrightText: Copyright (c) 2019-2025 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
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
