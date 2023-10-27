document.addEventListener('DOMContentLoaded', function () {
    const sendButton = document.getElementById('send-button');
    const matricula2Button = document.getElementById('matricula2-button');
    const matricula3Button = document.getElementById('matricula3-button');
    const countElement = document.getElementById('count');
    const matricula2CountElement = document.getElementById('matricula2-count');
    const matricula3CountElement = document.getElementById('matricula3-count');

    let submissionCount = 0;
    let matricula2Count = 0;
    let matricula3Count = 0;

    const submissionLimit = 12; // Defina o limite de envios desejado

    // Verifica se há um valor armazenado no localStorage para o botão de envio
    const storedSubmissionCount = localStorage.getItem('submissionCount');
    if (storedSubmissionCount) {
      submissionCount = parseInt(storedSubmissionCount);
      updateCountElement();
    }

    // Verifica se há um valor armazenado no localStorage para o botão "Matrícula 2"
    const storedMatricula2Count = localStorage.getItem('matricula2Count');
    if (storedMatricula2Count) {
      matricula2Count = parseInt(storedMatricula2Count);
      updateMatricula2CountElement();
    }

    const storedMatricula3Count = localStorage.getItem('matricula3Count');
    if (storedMatricula3Count) {
      matricula2Count = parseInt(storedMatricula3Count);
      updateMatricula3CountElement();
    }

    // Função para atualizar o elemento de contagem no front-end para o botão de envio
    function updateCountElement() {
      countElement.textContent = `${submissionCount}/${submissionLimit}`;
    }

    // Função para atualizar o elemento de contagem no front-end para o botão "Matrícula 2"
    function updateMatricula2CountElement() {
      matricula2CountElement.textContent = `${matricula2Count}/${submissionLimit}`;
    }

    function updateMatricula3CountElement() {
        matricula3CountElement.textContent = `${matricula3Count}/${submissionLimit}`;
      }

    // Adicione um ouvinte de evento para o botão de envio
    sendButton.addEventListener('click', function () {
      if (submissionCount < submissionLimit) {
        window.location.href = 'https://forms.gle/cHhtYxVWJMMiJBUQ9';
        submissionCount++;
        updateCountElement();
        localStorage.setItem('submissionCount', submissionCount);
      } else {
        alert('Limite de matrículas atingido (12/12) para o botão de envio.');
      }
    });

    // Adicione um ouvinte de evento para o botão "Matrícula 2"
    matricula2Button.addEventListener('click', function () {
      if (matricula2Count < submissionLimit) {
        window.location.href = 'https://forms.gle/cHhtYxVWJMMiJBUQ9';
        matricula2Count++;
        updateMatricula2CountElement();
        localStorage.setItem('matricula2Count', matricula2Count);
      } else {
        alert('Limite de matrículas atingido (12/12) para o botão "Matrícula 2".');
      }
    });

    matricula3Button.addEventListener('click', function () {
        if (matricula3Count < submissionLimit) {
          window.location.href = 'https://forms.gle/cHhtYxVWJMMiJBUQ9';
          matricula3Count++;
          updateMatricula3CountElement();
          localStorage.setItem('matricula3Count', matricula3Count);
        } else {
          alert('Limite de matrículas atingido (12/12) para o botão "Matrícula 2".');
        }
      });
  });