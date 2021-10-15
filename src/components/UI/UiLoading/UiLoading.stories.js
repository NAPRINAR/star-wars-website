import UiLoading from "./UiLoading"

export default{
    title: "Ui-Kit/UiLoading",
    component: UiLoading,
}


const Template = (args) => <UiLoading {...args} />;

//👇 Each story then reuses that template
export const Black = Template.bind({});

const props = {
    theme:'black',
    isShadow:false,
    classes:''
}

Black.args = {
    ...props,
    theme:'black'
}

export const White = Template.bind({})
White.args = {
    ...props,
    theme:'white',
    isShadow:true
}

export const Blue = Template.bind({});

Blue.args = {
    ...props,
    theme:"blue"
}
