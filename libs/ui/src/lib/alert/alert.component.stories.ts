import { Story } from "@storybook/angular/types-6-0";
import { AlertComponent } from "./alert.component";

export default {
    title: "atoms/AlertComponent",
    component: AlertComponent,
};

const Template: Story<AlertComponent> = (args) => ({
    props: args,
});

export const Example = Template.bind({});

Example.args = {
    item: {
        message: "Example error message",
        severity: "error",
    },
};
