const textoEntrada = document.getElementById("textoEntrada");
const btnEncriptar = document.getElementById("btnEncriptar");
const btnDesencriptar = document.getElementById("btnDesencriptar");
const textoFinal = document.getElementById("textoFinal");
const btnCopiar = document.getElementById("btnCopiar");

const munheco = document.getElementById("munheco");
const ingTexto = document.getElementById("ingTexto");
const resultados= document.getElementById("resultados");

let remplazos=[
    ["a","ai"],
    ["e","enter"],
    ["i","imes"],
    ["o","ober"],
    ["u","ufat"]
]

const reset = () => {
	textoEntrada.value = "";
    textoEntrada.style.height = "auto";
	textoFinal.innerHTML = "";
	resultados.classList.remove("ajuste")
	textoFinal.classList.remove("ajustar");
	textoFinal.placeholder = "Ningún mensaje fue encontrado";
	btnCopiar.display="none";
	textoEntrada.focus();
};

btnEncriptar.addEventListener("click", () =>{   

    const texto = textoEntrada.value.toLocaleLowerCase();

    function encriptar(newText) {
        for (let i = 0; i < remplazos.length; i++) {
            if (newText.includes(remplazos[i][0])) {
                newText = newText.replaceAll(remplazos[i][0], remplazos[i][1]);
            }
        }
        return newText;
    }

    const textoEncriptado = encriptar(texto);

    textoFinal.innerHTML = textoEncriptado;

    textoEntrada.value="";
    munheco.style.display="none";
    ingTexto.style.display="none";
    btnCopiar.style.display="block";

    resultados.classList.add("ajustes");
    textoFinal.classList.add("ajustes");
})

btnDesencriptar.addEventListener("click", () =>{
    
    const texto = textoEntrada.value.toLocaleLowerCase();
    
    function desencriptar(newText) {

        for (let i = 0; i < remplazos.length; i++) {
            if (newText.includes(remplazos[i][1])) {
                newText = newText.replaceAll(remplazos[i][1], remplazos[i][0]);
            }
        }
        return newText;
    }
    const textoDesencriptado= desencriptar(texto);

    textoFinal.innerHTML = textoDesencriptado;

    textoEntrada.value="";
    munheco.style.display="none";
    ingTexto.style.display="none";
    btnCopiar.style.display="block";

    resultados.classList.add("ajustes");
    textoFinal.classList.add("ajustes");
})

btnCopiar.addEventListener("click", () => {
	let texto = textoFinal;
	texto.select();
	document.execCommand('copy');
	alert("Texto Copiado");
	reset();
});