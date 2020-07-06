import React from "react";
import { shallow } from 'enzyme';
import Header from "./header";
import { findByTestAttr, renderWithoutCrashing } from "../../utils/tests";

const setUp = (props = {}) => {
    return shallow(<Header {...props} />);
}

describe('<Header /> Component', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    })
    renderWithoutCrashing(component, "<Header />");
    it("Should Render a Logo", () => {
        const logo = findByTestAttr(component, "LogoImg");
        expect(logo.length).toBe(1);
    })
})
