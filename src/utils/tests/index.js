
import CheckPropTypes from "check-prop-types";

export const findByTestAttr = (component, value) => {
    return component.find(`[data-test='${value}']`);
}

export const checkProps = (component, expectedProps) => {
    // eslint-disable-next-line react/forbid-foreign-prop-types
    return CheckPropTypes(component.propTypes, expectedProps, "props", component.name);
}

export const renderWithoutCrashing = (component, name) => {
    it(`should render ${name} Without Crashing`, () => {
        expect(component).toMatchSnapshot();
    })

}