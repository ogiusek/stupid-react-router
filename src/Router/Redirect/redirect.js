function redirect(path) {
    if (window.location.pathname !== path) {
        window.history.pushState(null, '', path);
        window.location.reload();
    }
}

export { redirect };