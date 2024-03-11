const {getHealth, createBook ,getBooks, deleteBook, getBook} = require('../clients/dashbackend.client')

const { book } = require('../configs/test.data')


test("test dashbackend application is ready", ()=>{
    return getHealth().then(data=>{
        expect(data).toEqual({ alive: true, version: expect.any()})
    })
})

test("test book created successfully", ()=>{
    return createBook(book).then(data=>{
        expect(data).toEqual(book)
    })
})

test("test: get books that created by previous test case", ()=>{
    return getBook('/' + book.name).then(data => {
        expect(data).toEqual(book)
    })
})

test("test get all books", ()=>{
    return getBooks().then(data=>{
        expect(data).toContainEqual(book)
  
    })
})

test("test: delete book",()=>{
    return deleteBook('/' + book.name).then(data=>{
        expect(data).toBe('deleted successfully')
    })
})