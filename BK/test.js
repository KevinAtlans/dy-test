new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
        console.log(JSON.stringify(mutation))
    }
});