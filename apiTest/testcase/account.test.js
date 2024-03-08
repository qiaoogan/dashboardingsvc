const { getDefaultAccount, getDefaultAccountAid } = require('../clients/dashbackend.client')

const { defaultAccount, defaultAccountAid } = require('../configs/test.data')

test("test: get default account's aid", ()=>{
    return getDefaultAccountAid().then(data=>{
        expect(data).toEqual(defaultAccountAid)
    })
})

test("test: get account by account.aid", ()=>{
    return getDefaultAccount('?aid='+ defaultAccountAid.aid).then(data=>{
        expect(data).toEqual(expect.objectContaining(defaultAccount));
    })
})