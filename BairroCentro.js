// Variável global para armazenar o ID do popup atualmente exibido
var popupAtual = null;

// Função para exibir um popup
function exibirPopup(id) {
	// Obtém o elemento do popup a partir do ID
	var popup = document.getElementById(id);

	// Se já houver um popup exibido, fecha o popup atual
	if (popupAtual != null) {
		fecharPopup(popupAtual);
	}

	// Exibe o novo popup
	popup.style.display = "block";

	// Atualiza a variável global com o ID do popup exibido
	popupAtual = id;
}

// Função para fechar um popup
function fecharPopup(id) {
	// Obtém o elemento do popup a partir do ID
	var popup = document.getElementById(id);

	// Oculta o popup
	popup.style.display = "none";

	// Se o popup fechado for o popup atual, limpa a variável global
	if (popupAtual == id) {
		popupAtual = null;
	}
}

