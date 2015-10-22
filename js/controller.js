var app = angular.module('reddit');

app.controller('PostsController', function($scope, FirebaseService) {
	$scope.getPosts = function() {
		FirebaseService.getPosts().then(function(response) {
			$scope.posts = response;
			console.log($scope.posts);
		})
	}
	$scope.getPosts();

	$scope.addPost = function() {
		console.log($scope.newPost)
		FirebaseService.addPost($scope.newPost)
			.then(function(response) {
				console.log(response)
				$scope.getPosts();
			})	
	}

}); //end