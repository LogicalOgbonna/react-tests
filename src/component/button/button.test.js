import React from "react";
import { checkProps, findByTestAttr } from "../../utils/tests";
import { shallow } from 'enzyme';
import Button from "./button";
const expredProps = {
    text: "Fetch",
    emitEvent: () => { }
}
describe('<Button /> Component', () => {
    describe('Checking propTypes', () => {
        it("Should Not throw Errors", () => {
            const propsErrors = checkProps(Button, expredProps);
            expect(propsErrors).toBeUndefined();
        })
    });

    describe('Renders a button', () => {
        let component;
        beforeEach(() => {
            component = shallow(<Button />);

        })
        it("Should Render the button", () => {
            const button = findByTestAttr(component, "buttonComponent");
            expect(button.length).toBe(1)
        })
    })


})
