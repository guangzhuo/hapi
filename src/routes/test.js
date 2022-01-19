const Joi = require('joi');
const Path = require('path');
const testRoute = [
    {
        method: 'post',
        path: '/person',
        options: {
            validate: {
                payload: Joi.object({
                    title: Joi.number().unsafe(false)
                })
            },
            cache: {
                expiresIn: 30 * 1000,
                privacy: 'private'
            }
        },
        handler: async (request, h) => {
            // const {data1, data2, dat3} = request.payload
            // const result = await getOrdes(request.payload)
            return {
                data:"success"
            }
        },
    },
    {
        method:["GET", "POST", "PUT"],
        path: '/{name}',
        handler:(request, h) => {
            // console.log('request', request);
            h.state('username', 'tom');
            return h.response(request.state.username);
        }
    },
    {
        method:"GET",
        path: '/',
        options:{
            log:{
                collect:true
            }
        },
        handler:(request, h) => {
            // console.log(request.state);
            const user = {
                firstName: 'John',
                lastName: 'Doe',
                userName: 'JohnDoe',
                id: 123
            }
            return h.response(user).state('data', '123', { encoding: "base64json" });
    
        }
    },
    {
        method:"GET",
        path:"/image",
        handler: (request, h) => {
            return h.file('avart.png');
        }
    }
]

module.exports = testRoute