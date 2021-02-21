const url = 'https://jsonplaceholder.typicode.com';

promiseGet(`${url}/posts/1`)
.then(({userId}) => promiseGet(`${url}/users/${userId}`))
.then(userInfo=>console.log(userinfo))
.catch(err => console.error(err))