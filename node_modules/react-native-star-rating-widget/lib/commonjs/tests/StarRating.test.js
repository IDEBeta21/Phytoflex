"use strict";

var _react = _interopRequireDefault(require("react"));

var _StarRating = _interopRequireDefault(require("../StarRating"));

var _reactNativeTestingLibrary = require("react-native-testing-library");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("StarRating", () => {
  it("renders StarRating", () => {
    function Component() {
      return /*#__PURE__*/_react.default.createElement(_StarRating.default, {
        rating: 3,
        onChange: () => undefined
      });
    }

    const {
      toJSON
    } = (0, _reactNativeTestingLibrary.render)( /*#__PURE__*/_react.default.createElement(Component, null));
    expect(toJSON()).toMatchSnapshot();
  });
});
//# sourceMappingURL=StarRating.test.js.map