
  document.addEventListener("DOMContentLoaded", function () {
    const selectTemporada = document.getElementById("temporadaSelect");
    const temporadas = document.querySelectorAll(".temporada");

    // Função que mostra apenas a temporada selecionada
    function mostrarTemporada(numero) {
      temporadas.forEach(temp => {
        if (temp.id === `stranger-temporada-${numero}`) {
          temp.classList.remove("d-none");
        } else {
          temp.classList.add("d-none");
        }
      });
    }

    // Evento de troca do select
    selectTemporada.addEventListener("change", function () {
      const temporadaSelecionada = this.value;
      mostrarTemporada(temporadaSelecionada);
    });

    // Mostrar a temporada inicial (1)
    mostrarTemporada(selectTemporada.value);
  });

