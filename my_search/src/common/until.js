const Util = {
    searchApi(router, searchText) {
        if (searchText !== "") {
            router.push(`/search/${searchText}`)
        }
    }
}
export default Util;