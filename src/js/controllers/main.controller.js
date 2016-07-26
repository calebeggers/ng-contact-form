function MainController ($scope, SERVER, $http) {
	$scope.buttonStatus = "button-alert"

	$scope.nameFieldStatus = "form-field"
	$scope.emailFieldStatus = "form-field"
	$scope.websiteFieldStatus = "form-field"
	$scope.messageFieldStatus = "form-field"

	init();

	function init () {
		$http.get(SERVER.URL).then( (res) => {
			$scope.contacts = res.data;
		});
	}

	$scope.nameCheck = function () {
		if ($scope.form.name || $scope.form.name === undefined) {
			$scope.nameNotice = ""
			$scope.nameFieldStatus = "field-valid"
		} else {
			$scope.nameNotice = "Name cannot be left empty"
			$scope.buttonStatus = "button-alert"
			$scope.nameFieldStatus = "field-invalid"
		}
	}

	$scope.emailCheck = function () {
		if ($scope.form.email.includes("@")) {
			$scope.emailNotice = ""
			$scope.emailFieldStatus = "field-valid"
		} else {
			$scope.emailNotice = "Email must contain '@'"
			$scope.buttonStatus = "button-alert"
			$scope.emailFieldStatus = "field-invalid"
		}
	}

	$scope.websiteCheck = function () {
		if ($scope.form.website.includes("http://")) {
			$scope.websiteNotice = ""
			$scope.websiteFieldStatus = "field-valid"
		} else if ($scope.form.website.includes("https://")) {
			$scope.websiteNotice = ""
			$scope.websiteFieldStatus = "field-valid"
		} else {
			$scope.websiteNotice = "Website must start with 'http://' or 'https://'"
			$scope.websiteFieldStatus = "field-invalid"
		}
	}

	$scope.messageCheck = function () {
		if ($scope.form.message || $scope.form.message === undefined) {
			$scope.messageNotice = ""
			$scope.messageFieldStatus = "field-valid"
		} else {
			$scope.messageNotice = "Message cannot be left empty"
			$scope.buttonStatus = "button-alert"
			$scope.messageFieldStatus = "field-invalid"
		}
	}

	$scope.buttonCheck = function () {
		if ($scope.messageNotice !== "" ||
			$scope.websiteNotice !== "" ||
			$scope.emailNotice !== "" ||
			$scope.nameNotice !== "") {
			$scope.buttonStatus = "button-alert"
		} else {
			$scope.buttonStatus = "button"
		}
	}

	$scope.submit = function (form) {
		if ($scope.messageNotice !== "" ||
			$scope.websiteNotice !== "" ||
			$scope.emailNotice !== ""   ||
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