const swDev = () => {
    const swUrl = `${process.env.PUBLIC_URL}/sw.js`;
    navigator.serviceWorker.register(swUrl)
        .then((result) => {
            console.log('registered', process.env.PUBLIC_URL)
        })
        .catch((err) => {
            console.log('error', err)
        })
}

export default swDev
