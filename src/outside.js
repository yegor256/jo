/*
 * The MIT License (MIT)
 *
 * SPDX-FileCopyrightText: Copyright (c) 2019-2025 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

/* exported outside */

/**
 * The constructor of the outside.
 *
 * This patch checks the location of the provided DIV and calls the
 * encapsulated function if the element is already outside the borders
 * of its parent element.
 *
 * @constructor
 * @param {Function} a - The action to call when hit
 * @return {Patch} The patch object
 */
function outside(a) {
  return {
    action: a,
    moved: function(div, vector) {
      const element = div.element();
      const box = element.parentElement.getBoundingClientRect();
      const rect = div.rect();
      let v = vector;
      if (rect.left > box.width - rect.width || rect.left < 0 ||
        rect.top > box.height - rect.height || rect.top < 0) {
        v = a(div, v);
      }
      return v;
    },
  };
}
