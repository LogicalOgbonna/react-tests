import React from "react";
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr, renderWithoutCrashing } from '../../utils/tests';
import ListItem from "./list-item";
const expectedProps = {
    title: "soe",
    description: "descrip"
};

describe('<ListItem /> Component', () => {
    describe('Checking Proptypes', () => {
        it('should not throw a warning', () => {
            const errProps = checkProps(ListItem, expectedProps);
            expect(errProps).toBeUndefined();
        })

    })

    describe('Render <ListItem />', () => {
        let component;
        beforeEach(() => {
            component = shallow(<ListItem {...expectedProps} />)
        });
        renderWithoutCrashing(component, "<ListItem />");
        it('should Render title in <ListItem />', () => {
            const listItem = findByTestAttr(component, "title");
            expect(listItem.length).toBe(1)
        })
        it('should Render description in <ListItem />', () => {
            // console.log()
            const listItem = findByTestAttr(component, "description");
            console.log(listItem.props())
            // expect(listItem.props().title).toEqual("soe")
            expect(listItem.length).toBe(1)
        })
    })

    describe('Should Return null', () => {
        let component;
        beforeEach(() => {
            component = shallow(<ListItem />);
        });

        it('should return null if no title passed to <ListItem />', () => {
            const listItem = findByTestAttr(component, "listItemComponent");
            expect(listItem.length).toBe(0)
        })
    })


})
