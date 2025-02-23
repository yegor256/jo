/*
 * The MIT License (MIT)
 *
 * SPDX-FileCopyrightText: Copyright (c) 2019-2025 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

/* exported trace */

/**
 * The constructor of the trace.
 *
 * This is a supplementary patch, which logs every move of the element
 * to the console.
 *
 * @constructor
 * @return {Patch} The patch object
 */
function trace() {
  return {
    moved: function(div, vector) {
      const rect = div.rect();
      console.log(
        'The div #' + div.id + ' moved to ' + rect.left +
        'x' + rect.top +
        ' with (' + vector.dx + ', ' + vector.dy + ')'
      );
      return vector;
    },
  };
}
