import { Story } from "@storybook/angular/types-6-0";
import { PaperComponent } from "./paper.component";

export default {
    title: "atoms/Paper",
    component: PaperComponent,
    // template: 'lakjd',
};

const Template: Story<PaperComponent> = (args) => ({
    props: args,
    template: "<star-paper><h1>Some Title</h1><p>Some Content</p></star-paper>",
});

export const Example = Template.bind({});

Example.args = {};
