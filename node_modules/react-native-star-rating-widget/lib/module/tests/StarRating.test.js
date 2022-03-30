import React from "react";
import StarRating from "../StarRating";
import { render } from "react-native-testing-library";
describe("StarRating", () => {
  it("renders StarRating", () => {
    function Component() {
      return /*#__PURE__*/React.createElement(StarRating, {
        rating: 3,
        onChange: () => undefined
      });
    }

    const {
      toJSON
    } = render( /*#__PURE__*/React.createElement(Component, null));
    expect(toJSON()).toMatchSnapshot();
  });
});
//# sourceMappingURL=StarRating.test.js.map