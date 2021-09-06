function toPromise() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('nicky大大')
        }, 500);
    })
}

toPromise().then(res => {
    console.log(res)
})