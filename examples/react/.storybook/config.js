import { configure } from '@storybook/react';


const req = require.context('../', true, /\.stories\.(jsx?|tsx?)$/)
function loadStories() {
    req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);

