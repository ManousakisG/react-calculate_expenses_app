//create mocking library for moment() function because it gives errors during testing
const moment = require.requireActual('moment'); // other safe way to import moment() function

export default (timestamp = 0) => {
    return moment(timestamp);
};