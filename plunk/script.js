angular.module('infiniteScrollTutorial', ['infinite-scroll'])
        .controller('infiniteScrollController', function ($scope, $http,$timeout) {
         
	var urlPlus = 2004;
	$scope.myData = [];
	$scope.loading = false;
	$scope.getMoreData = function () {
		
		$scope.movieYear = urlPlus;
		$scope.loading = true;
		$timeout(function(){
		
		$http.get("http://www.omdbapi.com/?s=all&y="+urlPlus ).then(function(response) {
		
		$scope.myData = $scope.myData.concat(response.data.Search);
console.log($scope.myData)
			
			
    		}).finally(function(){
			$scope.loading = false;
		});
		urlPlus++;
		
		},1500);
    		
	}
});