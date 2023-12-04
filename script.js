function setupPopup(buttonId, popupId, redirectUrl) {
  document.getElementById(buttonId).addEventListener('click', function() {
    // Exibe o pop-up associado ao botão clicado
    document.getElementById(popupId).style.display = 'block';
  });

  // Para cada pop-up, configure os eventos dos botões dentro dele
  document.getElementById(popupId).getElementsByClassName('cancel-button')[0].addEventListener('click', function() {
    // Oculta o pop-up ao clicar em Cancelar
    document.getElementById(popupId).style.display = 'none';
  });

  document.getElementById(popupId).getElementsByClassName('confirm-button')[0].addEventListener('click', function() {
    // Redireciona para o URL específico ao clicar em Confirmar
    window.location.href = redirectUrl;
  });
}

// Configure os pop-ups para os botões específicos com URLs distintos
setupPopup('send-button1', 'popup1', 'https://forms.gle/77ufVhELNFYSmXhN8');
setupPopup('send-button2', 'popup2', 'https://forms.gle/KJCrowFb17diJ5Et8');
setupPopup('send-button3', 'popup3', 'https://docs.google.com/forms/d/e/1FAIpQLSfJuXA9wdwmtmA8uvlonChY6okft64QHoGVjrkaxRukFlW8qQ/viewform'); 

function abrirWhatsApp() {
  // Substitua 'SEU_NUMERO_DE_TELEFONE' pelo número de telefone desejado, incluindo o código do país.
  var numeroTelefone = '+5511947389666';

  // Monta o link do WhatsApp
  var linkWhatsApp = 'https://wa.me/' + numeroTelefone;

  // Abre uma nova janela ou guia no navegador
  window.open(linkWhatsApp, '_blank');
}