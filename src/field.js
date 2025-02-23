/*
 * The MIT License (MIT)
 *
 * SPDX-FileCopyrightText: Copyright (c) 2019-2025 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

/* exported field */

/**
 * The constructor of the field.
 *
 * @constructor
 * @param {Document} w - The DOM window to encapsulate
 * @return {Field} The field object
 */
function field(w) {
  return {
    window: w,
    laser: laser(w),
    army: army(w),
    init: function() {
      this.laser.init(this.army);
      this.army.init();
    },
  };
}
