"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStars = getStars;

function getStars(rating, maxStars) {
  return [...Array(maxStars)].map((_, i) => {
    if (rating - i >= 1) {
      return "full";
    }

    return rating - i >= 0.5 ? "half" : "empty";
  });
}
//# sourceMappingURL=utils.js.map