/*
 * The MIT License (MIT)
 *
 * SPDX-FileCopyrightText: Copyright (c) 2019-2025 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

/* exported kill */

/**
 * The constructor of the kill.
 *
 * This patch checks the location of the bullet (provided in the DIV argument),
 * and asks the army to kill all invaders located under the bullet.
 *
 * @constructor
 * @param {Army} a - The army
 * @return {Patch} The patch object
 */
function kill(a) {
  return {
    army: a,
    moved: function(div, vector) {
      this.army.kill(div.rect().left, div.rect().top);
      return vector;
    },
  };
}
