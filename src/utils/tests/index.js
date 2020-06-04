
import CheckPropTypes from "check-prop-types";

export const findByTestAttr = (component, value) => {
    return component.find(`[data-test='${value}']`);
}

export const checkProps = (component, expectedProps) => {
    return CheckPropTypes(component.propTypes, expectedProps, "props", component.name);

}