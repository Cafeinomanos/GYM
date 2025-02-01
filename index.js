document.addEventListener("DOMContentLoaded", function () {
    const reservasForm = document.getElementById('reservas-form');
    const reservasLista = document.getElementById('reservas-lista');

    if (reservasForm) {
        reservasForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const formData = new FormData(reservasForm);
            const reserva = Object.fromEntries(formData.entries());

            try {
                const response = await fetch('http://localhost:3000/reservas', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(reserva)
                });

                const result = await response.json();
                alert(result.message);
                mostrarReservas();
            } catch (error) {
                console.error("Error al enviar la reserva:", error);
                alert("Hubo un error al enviar la reserva.");
            }
        });
    }

    async function mostrarReservas() {
        try {
            const response = await fetch('http://localhost:3000/reservas');
            const reservas = await response.json();
            reservasLista.innerHTML = '';

            reservas.forEach(reserva => {
                const item = document.createElement('li');
                item.textContent = `${reserva.nombre} - ${reserva.clase} - ${reserva.fecha} - ${reserva.hora}`;
                reservasLista.appendChild(item);
            });
        } catch (error) {
            console.error("Error al obtener las reservas:", error);
        }
    }

    mostrarReservas();
});
