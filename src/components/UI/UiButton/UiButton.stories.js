import UiButton from "./UiButton"

export default {
    title: "Ui-Kit/UiButton",
    component: UiButton,
}


const Template = (args) => <UiButton {...args} />;

//👇 Each story then reuses that template
export const Light = Template.bind({});

const props = {
    text: "hello",
    onClick: () => console.log("Button Click"),
    disabled: false,
    theme: 'dark',
    classes: ""
}

Light.args = {
    ...props,
    theme: "light"
}
export const Dark = Template.bind({});
Dark.args = {
    ...props,
    theme: "dark"
}

export const Disabled = Template.bind({});
Disabled.args = {
    ...props,
    disabled: true,
}