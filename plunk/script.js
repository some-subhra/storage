angular.module('infiniteScrollTutorial', ['infinite-scroll'])
        .controller('infiniteScrollController', function ($scope, $http) {
         
	var urlPlus = 1993;
	$scope.myData = [];
	$scope.loading = false;
	$scope.getMoreData = function () {
		
		$scope.movieYear = urlPlus;
    		$http.get("http://www.omdbapi.com/?s=all&y="+urlPlus ).then(function(response) {
			$scope.loading = true;
			$scope.myData = $scope.myData.concat(response.data.Search);
			
			
    		}).finally(function(){
			$scope.loading = false;
		});
		urlPlus++;
	}
});