const url = 'https://api.adviceslip.com/advice';
const btn = document.querySelector('.btn');
const titleID = document.querySelector('.title-id');
const textAdvice = document.querySelector('.text');

// mostrar el primer consejo al cargar la pagina
document,addEventListener('DOMContentLoaded', showAdvice)

// Evento click en el boton
btn.addEventListener('click', showAdvice)

// funcion para mostrar el consejo actual
function showAdvice() {
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(data => {
            const advice = data.slip.advice;
            const id = data.slip.id;

            titleID.textContent = `Advice #${id}`;
            textAdvice.textContent = `"${advice}"`;            
        })

        .catch(error => {
            textAdvice.textContent = "Error"
        })
}


