const BetweenState = () => {
  return {
    setPage: setPage,
    getPage: getPage,
    setSearch: setSearch,
    getSearch: getSearch,
    setAdvancedSearch: setAdvancedSearch,
    getAdvancedSearch: getAdvancedSearch
  }
  function setPage(page) {
    this.page = page
  }
  function getPage() {
    return this.page
  }
  function setSearch(data) {
    this.search = data
  }
  function getSearch() {
    return this.search
  }
  function setAdvancedSearch(data) {
    this.advancedSearch = data
  }
  function getAdvancedSearch() {
    return this.advancedSearch
  }

}
angular
  .module('gumga.betweenstate', [])
  .service('BetweenState', BetweenState)