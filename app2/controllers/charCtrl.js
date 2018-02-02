angular.module('pokemon').controller('charCtrl', function($scope, $stateParams, characterSvc){
    // HARDCODED EXAMPLE
    // $scope.char = {
    //     id: 1,
    //     name: 'One-a-saur',
    //     weight: 5,
    //     pictureUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png'
    // } 
    const id=$stateParams.id;
    // MOVING AXIOS TO SERVICE
    // $http.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(resp=> {
    // // $scope.character = resp.data    
    //     $scope.character = {
    //         name:resp.data.name,
    //         weight: resp.data.weight,
    //         pictureUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png'
    //     }
    // })
    characterSvc.getCharacter(id).then(data=>{
        $scope.character = data;

    })
    

})