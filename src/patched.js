/*
 * The MIT License (MIT)
 *
 * SPDX-FileCopyrightText: Copyright (c) 2019-2025 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

/* exported patched */

/**
 * The constructor of the patched div.
 *
 * @constructor
 * @param {Div} d - The div to patch
 * @param {Array} ps - List of patches
 * @return {Div} The DIV object
 */
function patched(d, ...ps) {
  return {
    div: d,
    patches: ps,
    move: function(v) {
      return this.patches.reduce(
          (a, p) => p.moved(this.div, a),
          this.div.move(v)
      );
    },
  };
}
