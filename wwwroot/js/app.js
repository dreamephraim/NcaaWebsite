var app = angular.module('app', [
    'ngSanitize'
]);

function complaintController($scope, $http,$timeout) {
    $scope.model = {};
    $scope.submitting = false;
    $scope.submission = false;
    $scope.showGuildeline = false;
	 
	$scope.submit = function (form) {
        $scope.submissionMessage = '';
        var status = false;
        if (!form.$valid) {
            $scope.submissionMessage = "Input is not valid";
            $scope.showError=true;
            return;
        }

        $scope.submitting = true;
        $http({
                method: 'POST',
            url: '/umbraco/api/Complaint/Post',
                data: $scope.model,
                headers:
                {
                    'Content-Type': 'application/json'
                } // set the headers so angular passing info as form data (not request payload)
            })
            .then(function(data) {
                $scope.submitting = false; //shows the success message 
                $scope.showError = false; 
                $scope.showSuccess = true; 
                    $scope.submissionMessage =
                    "Thank You. \r\nYou message has been sent. You will receive a response as soon as possible.";
                $scope.model = {}; // form fields are emptied with this line
            }, function (error) {
                $scope.submitting = false; 
                $scope.showError = true; 

                $scope.submissionMessage = "Message Cannot be sent. Please try again or contact site administrator";
            }
   );
    };

}

app.controller('complaintController', ["$scope", "$http", "$timeout", complaintController]);

function incidentReportController($scope, $http,$timeout) {
    $scope.model = {};
    $scope.submitting = false;
    $scope.submission = false;
    $scope.showGuildeline = true;
	$scope.submit = function (form) {
		console.log(form);
        $scope.submissionMessage = '';
        var status = false;
        if (!form.$valid) {
            $scope.submissionMessage = "Input is not valid";
            $scope.showError=true;
            return;
        }

        $scope.submitting = true;
        $http({
                method: 'POST',
            url: '/umbraco/api/IncidentReport/Post',
                data: $scope.model,
                headers:
                {
                    'Content-Type': 'application/json'
                } // set the headers so angular passing info as form data (not request payload)
            })
            .then(function(data) {
                $scope.submitting = false; //shows the success message 
                $scope.showError = false; 
                $scope.showSuccess = true; 
                    $scope.submissionMessage =
                    "Thank You. \r\nYou message has been sent. You will receive a response as soon as possible.";
                $scope.model = {}; // form fields are emptied with this line
            }, function (error) {
                $scope.submitting = false; 
                $scope.showError = true; 

                $scope.submissionMessage = "Message Cannot be sent. Please try again or contact site administrator";
            }
   );
    };

}

app.controller('incidentReportController', ["$scope", "$http", "$timeout", incidentReportController]);


function contactController($scope, $http, $timeout ) {
    $scope.model = {};
    $scope.submitting = false;
    $scope.submission = false;

    $scope.submit = function (form) {
        $scope.submissionMessage = '';
        var status = false;
        if (!form.$valid) {
            $scope.submissionMessage = "Input is not valid";
            $scope.showError=true;
            return;
        }

        $scope.submitting = true;
        $http({
                method: 'POST',
            url: '/umbraco/api/NonPunitiveReport/ContactForm',
                data: $scope.model,
                headers:
                {
                    'Content-Type': 'application/json'
                } // set the headers so angular passing info as form data (not request payload)
            })
            .then(function(data) {
                $scope.submitting = false; //shows the success message 
                $scope.showError = false; 
                $scope.showSuccess = true; 
                    $scope.submissionMessage =
                    "Thank You. \r\nYou message has been sent. You will receive a response as soon as possible.";
                $scope.model = {}; // form fields are emptied with this line
            }, function (error) {
                $scope.submitting = false; 
                $scope.showError = true; 

                $scope.submissionMessage = "Message Cannot be sent. Please try again or contact site administrator";
            }
   );
    };
}

app.controller('contactController', ["$scope", "$http", "$timeout", contactController]);