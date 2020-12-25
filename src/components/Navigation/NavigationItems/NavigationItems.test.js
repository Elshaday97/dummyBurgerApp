import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavigationItems from "./NavigationItems";
configure({ adapter: new Adapter() }); //connect enzyme

describe("<Navigation Items/>", () => {
  it("should render two <NavigationItem /> elements if not authenticated", () => {
    //testing logic goes here
    const wrapper = shallow(<NavigationItems />);
    expect(wrapper.find(NavigationItems)).toHaveLength(2);
  });
});
