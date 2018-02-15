const azure = require('azure-storage')

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const blobService = azure.createBlobService()

    // Download text file from storage
    blobService.getBlobToText('test-container', 'test.txt', function(error, result, response) {
        if(!error) {
            context.res = {
                body: "Hello " + result
            }
        }
        else {
            context.res = {
                status: 400,
                body: error.message
            }
        }
        context.done()
    })
}