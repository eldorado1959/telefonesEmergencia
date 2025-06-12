let numeroAtual = '';
let servicoAtual = '';

function confirmarLigacao(servico, numero) {
  numeroAtual = numero;
  servicoAtual = servico;
  document.getElementById('modal-text').innerText = `Deseja ligar para ${servico} no número ${numero}?`;
  document.getElementById('modal-overlay').style.display = 'flex';
}

function ligarAgora() {
  document.getElementById("saida").innerText = `📞 Ligando para ${servicoAtual}: ${numeroAtual}`;
  window.location.href = `tel:${numeroAtual}`;
  fecharModal();
}

function fecharModal() {
  document.getElementById('modal-overlay').style.display = 'none';
}

function ativarDisfarce() {
  document.getElementById('tela-principal').classList.add('hidden');
  document.getElementById('tela-disfarce').classList.remove('hidden');
}

function desativarDisfarce() {
  document.getElementById('tela-disfarce').classList.add('hidden');
  document.getElementById('tela-principal').classList.remove('hidden');
}
