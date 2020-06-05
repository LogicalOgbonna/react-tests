import React from "react";
import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../../utils/tests';
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
        it('should Render <ListItem /> Without Crashing', () => {
            const listItem = findByTestAttr(component, "listItemComponent");
            expect(listItem.length).toBe(1)
        })
        it('should Render title in <ListItem />', () => {
            const listItem = findByTestAttr(component, "title");
            expect(listItem.length).toBe(1)
        })
        it('should Render description in <ListItem />', () => {
            const listItem = findByTestAttr(component, "description");
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
