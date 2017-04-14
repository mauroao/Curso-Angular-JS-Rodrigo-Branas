angular.module('listaTelefonica').controller('listaTelefonicaCtrl', function($scope, $filter, $http){
	$scope.app='Lista Telefônica';
	
	$scope.contatos = [];
	$scope.operadoras = [];

	var carregarContatos = function() {
		$http.get('http://localhost:3000/api/contatos').then(function(response) {

			$scope.contatos = response.data;

		}, function(responseError) {

			var errorMessage = 'Aconteceu um erro. Status: "' + responseError.status + '", mensagem: "' + (responseError.statusText || 'indefinido') + '"' ;
			$scope.message = errorMessage;

		});
	};
	
	var carregarOperadoras = function() {
		$http.get('http://localhost:3000/api/operadoras').then(function(response) {

			$scope.operadoras = response.data;

		}, function(responseError) {

			var errorMessage = 'Aconteceu um erro. Status: "' + responseError.status + '", mensagem: "' + (responseError.statusText || 'indefinido') + '"' ;
			$scope.message = errorMessage;

		});
	};
	
	$scope.adicionarContato = function(contato) {
		contato.data = new Date();

		$http.post('http://localhost:3000/api/contatos', contato).then(function(response) { 

			// $scope.contatos.push(angular.copy(contato)); // carregar lista
			delete($scope.contato);
			$scope.contatoForm.$setPristine();
			carregarContatos();
		});
	};


	$scope.apagarContatos = function(contatos) {
		$scope.contatos = contatos.filter(function(contato) {
			if (!contato.selecionado) {
				return contato;
			}
		});
	};


	$scope.isContatoSelecionado = function(contatos) {
		return contatos.some(function(contato) {
			return contato.selecionado;
		});
	};
	$scope.ordernarPor = function(campo) {
		$scope.criterioDeOrdenacao = campo;
	}; 

	carregarContatos();
	carregarOperadoras();
}) ;

