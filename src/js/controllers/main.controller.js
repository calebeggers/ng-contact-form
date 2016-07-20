function MainController ($scope, SERVER, $http) {
	$scope.buttonStatus = "button-alert"
	$scope.nameCheck = function () {
		if ($scope.form.name || $scope.form.name === undefined) {
			$scope.nameNotice = ""
			$scope.buttonStatus = "button"
		} else {
			$scope.nameNotice = "Name cannot be left empty"
			$scope.buttonStatus = "button-alert"
		}
	}

	$scope.emailCheck = function () {
		if ($scope.form.email.includes("@")) {
			$scope.emailNotice = ""
			$scope.buttonStatus = "button"
		} else {
			$scope.emailNotice = "Email must contain '@'"
			$scope.buttonStatus = "button-alert"
		}
	}

	$scope.websiteCheck = function () {
		if ($scope.form.website.includes("http://")) {
			$scope.websiteNotice = ""
			$scope.buttonStatus = "button"
		} else if ($scope.form.website.includes("https://")) {
			$scope.websiteNotice = ""
			$scope.buttonStatus = "button"
		} else {
			$scope.websiteNotice = "Website must start with 'http://' or 'https://'"
			$scope.buttonStatus = "button-alert"
		}
	}

	$scope.messageCheck = function () {
		if ($scope.form.message || $scope.form.message === undefined) {
			$scope.messageNotice = ""
			$scope.buttonStatus = "button"
		} else {
			$scope.messageNotice = "Message cannot be left empty"
			$scope.buttonStatus = "button-alert"
		}
	}

	$scope.submit = function (form) {
		if ($scope.messageNotice !== "" ||
			$scope.websiteNotice !== "" ||
			$scope.emailNotice !== "" ||
			$scope.nameNotice !== "") {
			console.log("Not submitted")
		} else {
			console.log("submitted")
			$http.post(SERVER.URL, form).then(function (res) {
				console.log(res)
			})
		}

		
	}
}

MainController.$inject = ['$scope', 'SERVER', '$http'];
export { MainController };