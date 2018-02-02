angular.module('pokemon').service('characterSvc', function($http){
    this.getCharacter = function (id) {
        return $http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(resp=> {
            // $scope.character = resp.data    
            return {
                name:resp.data.name,
                weight: resp.data.weight,
                pictureUrl: resp.data.sprites.front_default
            };
        });
    }
})