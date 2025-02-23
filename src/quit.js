/*
 * SPDX-FileCopyrightText: Copyright (c) 2019-2025 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

/* exported quit */

/**
 * The constructor of the quit.
 *
 * This patch checks the location of the invader (provided in the DIV argument),
 * and instructs the army to stop if the invader is too low (below the
 * lowest border of the screen).
 *
 * @constructor
 * @param {Army} a - The army
 * @return {Patch} The patch object
 */
function quit(a) {
  return {
    army: a,
    moved: function(div, vector) {
      const element = div.element();
      const box = element.parentElement.getBoundingClientRect();
      const rect = div.rect();
      if (rect.top > box.height - rect.height) {
        this.army.stop();
      }
      return vector;
    },
  };
}
