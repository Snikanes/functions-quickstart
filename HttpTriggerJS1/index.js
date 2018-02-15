import { KeyVaultClient, KeyVaultCredentials } from 'azure-keyvault';
import { AuthenticationContext } from 'adal-node'
import * as azure from 'azure-storage'

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.bindings.outputBlob = context.bindings.inputBlob
    
    context.res = {
        body: "Moved blob successfully..."
    }
    context.done()
}