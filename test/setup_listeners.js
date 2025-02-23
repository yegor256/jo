/*
 * The MIT License (MIT)
 *
 * SPDX-FileCopyrightText: Copyright (c) 2019-2025 Yegor Bugayenko
 * SPDX-License-Identifier: MIT
 */

beforeEach(function() {
  this.listeners = [];
  this.before = window.addEventListener;
  window.addEventListener = function(...args) {
    this.listeners.push(args);
    this.before.apply(null, args);
  }.bind(this);
});

afterEach(function() {
  let id = window.setTimeout(function() {}, 0);
  while (id--) {
    window.clearTimeout(id);
  }
  this.listeners.forEach(function(listener) {
    window.removeEventListener.apply(null, listener);
  });
  window.addEventListener = this.before;
});
