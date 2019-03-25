import React from "react";
import { shallow } from "enzyme";

import App from "./App";
import NavigationBar from "../components/NavigationBar";

describe("App", () => {
  it("should render NavigationBar component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<NavigationBar />)).toBe(true);
  });
});
