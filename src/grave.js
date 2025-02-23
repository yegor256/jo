/*
 * The MIT License (MIT)
 *
 * SPDX-FileCopyrightText: Copyright (c) 2019-2025 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

/* exported grave */

/**
 * The constructor of the grave.
 *
 * This patch kills the HTML element if the vector is zero (0,0).
 *
 * @constructor
 * @return {Patch} The patch object
 */
function grave() {
  return {
    moved: function(div, vector) {
      if (vector.dx == 0 && vector.dy == 0) {
        div.element().remove();
      }
      return vector;
    },
  };
}
