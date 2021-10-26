import { themes } from "@storybook/theming";
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../../../documentation.json";

setCompodocJson(docJson);

export const parameters = {
    docs: {
        theme: themes.dark,
    },
};
