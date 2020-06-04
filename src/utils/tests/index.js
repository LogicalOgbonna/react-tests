export const findByTestAttr = (component, value) => {
    return component.find(`[data-test='${value}']`);
}