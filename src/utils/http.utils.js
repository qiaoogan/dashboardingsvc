const checkReturnResponseAndThrowErrorOnRequestFailed = async response => {
    if (response.ok) {
        return await response.json();
    } else if (response.status >= 400 && response.status <= 600) {
        const responseJson = await response.json();
        throw new Error(responseJson?.message);
    }
}

const put = async (url, payload) => {
    const response = await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    return await checkReturnResponseAndThrowErrorOnRequestFailed(response);
};

const post = async (url, payload) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    return await checkReturnResponseAndThrowErrorOnRequestFailed(response);
};

const get = async (url) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {}
    });

    return await checkReturnResponseAndThrowErrorOnRequestFailed(response);
};

const del = async (url) => {
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {}
    });

    return await checkReturnResponseAndThrowErrorOnRequestFailed(response);
};

module.exports = {
    get,
    post,
    put,
    del
}