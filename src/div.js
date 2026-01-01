/*
 * SPDX-FileCopyrightText: Copyright (c) 2019-2026 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

/* exported div */

/**
 * The constructor of the div.
 *
 * @constructor
 * @param {Document} w - The DOM window to encapsulate
 * @param {Integer} i - The ID of the div
 * @return {Div} The div object
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
      if (e === null) {
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
