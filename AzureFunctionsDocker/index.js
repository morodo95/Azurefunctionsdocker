module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        if(req.query.age || (req.body && req.body.age)){
            context.res = {
                // status: 200, /* Defaults to 200 */
                body: "Hello " + (req.query.name || req.body.name) + ", your age is " + (req.query.age || req.body.age)
            };
           
        }
        else{
            context.res = {
                status: 400,
                body: "Please pass a age on the query string or in the request body"
            };
        }
       
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body "
        };
    }
};