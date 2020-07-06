import React from "react";
import { App } from "./App";
import { shallow } from 'enzyme';
import { renderWithoutCrashing, findByTestAttr } from "./utils/tests";

describe('Renders Without Crashing', () => {
    let component;
    beforeEach(() => {
        component = shallow(<App />)
    });
    renderWithoutCrashing(component, "<App />");

    it('should initialize `state` with a empty array', () => {
        expect(component.state().value).toEqual([]);
    });

    it('should add a value to `state` array', () => {
        const button = findByTestAttr(component, "add-button");
        button.simulate("click");

        expect(component.state().value.length).toEqual(1);
    })


})
