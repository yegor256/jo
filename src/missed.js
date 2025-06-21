/*
 * SPDX-FileCopyrightText: Copyright (c) 2019-2025 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

/* exported missed */

/**
 * The constructor of the missed.
 *
 * This patch calls the method missed() in the encapsulated laser, if the
 * bullet (provided in the argument DIV) is already outside of the field.
 * The laser most probably will reload itself.
 *
 * @constructor
 * @param {Laser} lz - The laser to hit when missed
 * @return {Patch} The patch object
 */
function missed(lz) {
  return {
    laser: lz,
    moved: function(div, vec) {
      if (outside((d, v) => vector(0, 0)).moved(div, vec).dy == 0) {
        lz.missed();
      }
      return vec;
    },
  };
}
