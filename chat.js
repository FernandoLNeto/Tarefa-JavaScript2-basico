/**
 * Chatlab - Conceitos de array/object em Javascript.
 *
 * Implemente as funções a partir daqui.
 */

// Exemplo: function minhaFuncao() { ... }

// Arquivo chat.js

// Array para armazenar as mensagens


var listaMensagens=[];


function adicionarMensagem(apelido,mensagem)
{
    listaMensagens.push({
      apelido: apelido,
      mensagem: mensagem,
    });
  
}

function formatarMensagens() {
  var html = "";
  for (var i = 0; i < listaMensagens.length; i++) {
    var mensagem = listaMensagens[i];
    html += '<div class="chat-message">';
    html +=
      '<span class="chat-message-apelido">' + mensagem.apelido + "</span>";
    html += '<span class="chat-message-item">' + mensagem.mensagem + "</span>";
    html += "</div>";
  }
  return html;
}

function atualizarHTML() {
  var chatMessagesDiv = document.getElementById("chat-messages");
  chatMessagesDiv.innerHTML = formatarMensagens();
}

function commitMessageClickHandler() {
  let mensagem_input = document.getElementById("message-input");

  if (mensagem_input.value.trim().length == 0) {
    mensagem_input.focus();
    return;
  }

  adicionarMensagem("stackx", mensagem_input.value);
  atualizarHTML();
  document.getElementById("message-input").value = ``;
}


// --------------------------------
// Não remover estas linhas
// --------------------------------
module.exports =
{
  listaMensagens,
  adicionarMensagem,
  formatarMensagens,
  atualizarHTML,
  commitMessageClickHandler
};
// --------------------------------