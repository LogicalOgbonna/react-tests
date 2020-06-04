import React from "react";
import { shallow } from 'enzyme';
import Headline from "./headline";
import { findByTestAttr } from "../../utils/tests";

const setUp = (props = {}, state = {}) => {
    return shallow(<Headline {...props} />)
}

describe('<Headline /> Component', () => {

    describe('Have Props', () => {
        let component;
        beforeEach(() => {
            const props = {
                header: "Test Header",
                description: "Test Description"
            };
            component = setUp(props)
        });
        it("Should Render Without Crashing", () => {
            expect(findByTestAttr(component, "headerlineComponent").length).toBe(1)
        })
        it("Should Render <h1 />", () => {
            expect(findByTestAttr(component, "header").length).toBe(1)
        })
        it("Should Render <p />", () => {
            expect(findByTestAttr(component, "description").length).toBe(1)
        })
    });

    describe('Have No Props', () => {
        let component;
        beforeEach(() => {
            component = setUp();
        });
        it("Should Render Without Crashing", () => {
            expect(findByTestAttr(component, "headerComponent").length).toBe(0)
        });
        it("Should Not Render <h1 />", () => {
            expect(findByTestAttr(component, "header").length).toBe(0)
        })
        it("Should Not Render <p />", () => {
            expect(findByTestAttr(component, "description").length).toBe(0)
        })
    })
});
