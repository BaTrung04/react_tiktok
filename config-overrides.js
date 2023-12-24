
//do stuff with the webpack config...
const { override, useBabelRc } = require("customize-cra");

module.exports = override(
    useBabelRc()
);

