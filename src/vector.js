/*
 * SPDX-FileCopyrightText: Copyright (c) 2019-2026 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

/* exported vector */

/**
 * The constructor of the vector.
 *
 * @constructor
 * @param {Integer} x - The DX
 * @param {Integer} y - The DY
 * @return {Vector} The vector object
 */
function vector(x, y) {
  return {
    dx: x,
    dy: y,
  };
}
