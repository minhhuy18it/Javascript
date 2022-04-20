async function waitAndMaybeReject() {
    await new Promise((r) => setTimeout(r, 5000))
    throw Error('This is Error')
}

//test1() đúng
async function test1() {
    try {
        return await waitAndMaybeReject()
    } catch (e) {
        return 'OH no'
    }
}

//test2() thừa try catch và async/await vì không có try catch và async/await thì throw vẫn ra lỗi theo function() gốc
async function test2() {
    try {
        return await waitAndMaybeReject()
    } catch (e) {
        throw e
    }
}

//test3() bị thừa async/await vì không có async/await thì throw vẫn ra lỗi theo function() gốc
async function test3() {
    return await waitAndMaybeReject()
}

//test4() đúng
function test4() {
    return waitAndMaybeReject()
}

const main = async () => {
    const value = await test2()
    console.log('value', value)
}
main()