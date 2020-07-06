import React from "react";
import { shallow } from 'enzyme';
import Headline from "./headline";
import { findByTestAttr, checkProps, renderWithoutCrashing } from "../../utils/tests";

const setUp = (props = {}, state = {}) => {
    return shallow(<Headline {...props} />)
}


describe('<Headline /> Component', () => {

    describe('Checking Proptypes', () => {
        it("Should not throw a warning", () => {
            const expectedProps = {
                header: "Hello",
                description: "Test Description",
                user: {
                    name: "Arinze",
                    email: "arinzeogbo@gmail.com",
                    routes: [{
                        name: "Home",
                        url: "/user/me",
                        loggedIn: true
                    }, {
                        name: "Home",
                        url: "/user/me",
                        loggedIn: false
                    }]
                }
            }

            const propsError = checkProps(Headline, expectedProps);
            expect(propsError).toBeUndefined();
        })
    })

    describe('Have Props', () => {
        let component;
        beforeEach(() => {
            const props = {
                header: "Test Header",
                description: "Test Description"
            };
            component = setUp(props)
        });
        renderWithoutCrashing(component, "<Headline />");
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
        renderWithoutCrashing(component, "<Headline />");
        it("Should Not Render <h1 />", () => {
            expect(findByTestAttr(component, "header").length).toBe(0)
        })
        it("Should Not Render <p />", () => {
            expect(findByTestAttr(component, "description").length).toBe(0)
        })
    })
});
