const BetweenState = ($timeout) => {
  return {
    initController: initController,
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
    return this.page || 1;
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

  function initController(scope, container, pageModel = 'page'){
    $timeout(()=>{
      if(this.getSearch()){
        scope[container].methods.search(this.getSearch().field, this.getSearch().param, scope[container].pageSize, this.getPage());
      }else if(this.getAdvancedSearch()){
        scope[container].methods.advancedSearch(this.getAdvancedSearch(), this.getPage());
      }else if(this.getPage()){
        scope[container].methods.get(this.getPage());
      }
      scope[pageModel] = this.getPage();
      return {
        page: this.getPage(),
        search: this.getSearch(),
        advancedSearch: this.getAdvancedSearch(),
      };
    })
  }

}

BetweenState.$inject = ['$timeout'];

angular
  .module('gumga.betweenstate', [])
  .service('BetweenState', BetweenState)
