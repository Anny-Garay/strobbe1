document.addEventListener("DOMContentLoaded", function () {
// Conectores Prearmados
const tipoManguera = document.getElementById("tipoManguera");
const tipoConector = document.getElementById("tipoConector");
const tamaño = document.getElementById("tamaño");

// Conectores 2 Piezas
const tipoManguera2 = document.getElementById("tipoManguera2");
const tipoFerula = document.getElementById("tipoFerula");
const tamaño2 = document.getElementById("tamaño2");

// Cargar Tipo Manguera (Conectores Prearmados)
  for (let manguera in data) {
    tipoManguera.innerHTML += `<option value="${manguera}">${manguera}</option>`;
  }

  tipoManguera.addEventListener("change", () => {
    tipoConector.innerHTML = '<option value="">Tipo Conector</option>';
    tamaño.innerHTML = '<option value="">Tamaño</option>';
    tamaño.disabled = true;

    const conectores = data[tipoManguera.value];
    if (conectores) {
      tipoConector.disabled = false;
      for (let conector in conectores) {
        tipoConector.innerHTML += `<option value="${conector}">${conector}</option>`;
      }
    } else {
      tipoConector.disabled = true;
    }
  });

  tipoConector.addEventListener("change", () => {
    tamaño.innerHTML = '<option value="">Tamaño</option>';

    const medidas = data[tipoManguera.value][tipoConector.value];
    if (medidas) {
      tamaño.disabled = false;
      for (let medida in medidas) {
        tamaño.innerHTML += `<option value="${medida}">${medida}</option>`;
      }
    } else {
      tamaño.disabled = true;
    }
  });

  // Cargar Tipo Manguera (Conectores 2 Piezas)
  for (let manguera2 in data2) {
    tipoManguera2.innerHTML += `<option value="${manguera2}">${manguera2}</option>`;
  }

  tipoManguera2.addEventListener("change", () => {
    tipoFerula.innerHTML = '<option value="">Tipo Ferula</option>';
    tamaño2.innerHTML = '<option value="">Tamaño</option>';
    tamaño2.disabled = true;

    const ferulas = data2[tipoManguera2.value];
    if (ferulas) {
      tipoFerula.disabled = false;
      for (let ferula in ferulas) {
        tipoFerula.innerHTML += `<option value="${ferula}">${ferula}</option>`;
      }
    } else {
      tipoFerula.disabled = true;
    }
  });

  tipoFerula.addEventListener("change", () => {
    tamaño2.innerHTML = '<option value="">Tamaño</option>';

    const medidas = data2[tipoManguera2.value][tipoFerula.value];
    if (medidas) {
      tamaño2.disabled = false;
      for (let medida in medidas) {
        tamaño2.innerHTML += `<option value="${medida}">${medida}</option>`;
      }
    } else {
      tamaño.disabled = true;
    }
  });

// Mostrar el valor correspondiente cuando se selecciona el tamaño (Conectores Prearmados)
tamaño.addEventListener("change", () => {
  const tipo = tipoManguera.value;
  const conector = tipoConector.value;
  const medida = tamaño.value;

  const resultadoEl = document.getElementById("resultado");
  const mensajeEspecial = document.getElementById("mensajeEspecial");
  const extraEl = document.getElementById("extra");

  if (data[tipo] && data[tipo][conector] && data[tipo][conector][medida]) {
    const resultado = data[tipo][conector][medida];
    resultadoEl.textContent = resultado.valor || resultado;
      extraEl.textContent = resultado.extra || ""; 
      // Mostrar el mensaje especial si existe
    if (resultado.especial) {
      mensajeEspecial.textContent = resultado.especial;
      mensajeEspecial.style.display = "block";
    } else {
      mensajeEspecial.textContent = "";
      mensajeEspecial.style.display = "none";
    }
    } else {
      resultadoEl.textContent = "–";
      extraEl.textContent = "";
      mensajeEspecial.textContent = "";
      mensajeEspecial.style.display = "none";
  }
});

// Mostrar el valor correspondiente cuando se selecciona el tamaño (Conectores 2 Piezas)
tamaño2.addEventListener("change", () => {
  const tipo = tipoManguera2.value;
  const ferula = tipoFerula.value;
  const medida = tamaño2.value;

  if (data2[tipo] && data2[tipo][ferula] && data2[tipo][ferula][medida]) {
    const resultado = data2[tipo][ferula][medida];
    document.getElementById("resultado2").textContent = resultado;
  } else {
    document.getElementById("resultado2").textContent = "–";
  }
});




})
