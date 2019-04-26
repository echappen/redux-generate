const fs = require('fs');

const generateRequest = function(action, name) {
    const nameAsAction = name.replace(/([a-z])([A-Z])/g, '$1 $2')
                             .toUpperCase()
                             .split(' ')
                             .join('_');
    const requestAction = action.toUpperCase() + '_' + nameAsAction;
    const successAction = 'SUCCESS_' + nameAsAction;
    const failAction = 'ERROR_' + nameAsAction;

    const actions = [requestAction, successAction, failAction];
    var stream = fs.createWriteStream("./testOutput.js", {flags:'a'});
    actions.forEach(function(actionType) {
        stream.write('export const ' + actionType + ' = ' + "'"+ actionType +"'" + ";\n");
    });
    stream.end();
}

module.exports = {
    generateRequest
}
