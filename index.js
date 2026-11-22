const { prisma } = require('./db/config')

async function addUser(){
    return await prisma.test.create({
        data: {
            'name': 'Varad'
        }
    })
}
addUser()