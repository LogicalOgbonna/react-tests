import React from "react";
import { shallow } from 'enzyme';
import Header from "./header";
import { findByTestAttr } from "../../utils/tests";

const setUp = (props = {}) => {
    return shallow(<Header {...props} />);
}

describe('<Header /> Component', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    })
    it("Should Render Without Crashing", () => {
        const wrapper = findByTestAttr(component, "headerComponent");
        expect(wrapper.length).toBe(1);
        // console.log(component.debug())
    });

    it("Should Render a Logo", () => {
        const logo = findByTestAttr(component, "LogoImg");
        expect(logo.length).toBe(1);
    })
})
