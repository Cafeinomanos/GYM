document.addEventListener("DOMContentLoaded", function () {
    const texts = {
        es: {
            titulo: "Polideportivo Jelzi",
            nombre_titulo:"POLIDEPORTIVO JELZI",
            informacionnav: "INFORMACIÓN",
            actividadesnav: "ACTIVIDADES",
            reservanav: "RESERVAS",
            nombre: "POLIDEPORTIVO JELZI",
            eslogan: "¡ANÍMATE A SENTIRTE MEJOR!",
            general: "GENERAL",
            descripcion_general: "El Polideportivo Jelzyi cuenta con 6000m² de espacio para actividades deportivas. Entre ellos ofrece un gran espacio para juegos deportivos, como el campo de fútbol, la piscina, y la pista de pádel. Además cuenta con un amplio gimnasio adaptado con las últimas máquinas para poner en forma tu cuerpo.",
            ubicacion: "UBICACIÓN",
            descripcion_ubicacion: "El espacio se encuentra en la Calle Uria, número 52, a las afueras de la ciudad de Zaragoza. Se puede llegar fácilmente con el transporte público, bien sea autobús o tranvía. Además cuenta con un amplio parking subterráneo a disposición de cualquier usuario.",
            monitores: "MONITORES",
            descripcion_monitores: "El Polideportivo Jelzi cuenta con personal capacitado para supervisar las distintas actividades impartidas. Estos monitores son los encargados de asegurar que todos los equipos funcionen de manera correcta y segura, así como de ayudar a que los ejercicios se realizan correctamente, con el fin de evitar lesiones.",
            gimnasio: "GIMNASIO",
            descripcion_gimnasio: "Cuenta con un gran espacio de máquinas para entrenamiento libre y con tres salas para clases guiadas, como por ejemplo Zumba, BodyPump y Spinning.",
            futbol: "FÚTBOL",
            descripcion_futbol: "Dispone de dos campos de fútbol. Uno para la práctica libre, reservable para jugar con amigos, y otro para los equipos entrenados por el polideportivo, de distintas edades y categorías.",
            natacion: "NATACIÓN",
            descripcion_natacion: "La gran piscina cubierta, además del estilo libre, ofrece actividades como AquaGym e HydroSpinning.",
            padel: "PÁDEL",
            descripcion_padel: "Cuenta con pistas de pádel para jugar libremente o en los torneos organizados por el polideportivo.",
            name: "Nombre",
            apellidos: "Apellidos",
            telefono: "Teléfono",
            email: "Email",
            fecha_reserva: "Fecha de reserva",
            hora_reserva: "Hora de reserva",
            seleccion_clase: "¿Qué clase quieres reservar?",
            yoga: "Yoga",
            pilates: "Pilates",
            natacion_opcion: "Natación",
            spinning: "Spinning",
            crossfit: "CrossFit",
            futbol_opcion: "Fútbol",
            padel_opcion: "Pádel",
            enviar: "Enviar",
            siguenos: "Síguenos en nuestras redes sociales:",
            horario: "Horario: Lunes a Domingo de 6:00 a 23:00 horas.",
            telefono_footer: "Teléfono:",
            number: "976 252 525",
            politica: "Política de privacidad y cookies: Este sitio web utiliza cookies para mejorar la experiencia del usuario. Para más información, consulta nuestra",
            enlace_politica: "política de privacidad"
        },
        en: {
            titulo: "Jelzi Sports Center",
            nombre_titulo: "JELZI SPORTS CENTER",
            informacionnav: "INFORMATION",
            actividadesnav: "ACTIVITIES",
            reservanav: "BOOKINGS",
            nombre: "JELZI SPORTS CENTER",
            eslogan: "GET READY TO FEEL BETTER!",
            general: "GENERAL INFORMATION",
            descripcion_general: "Jelzyi Sports Center has 6000m² of space for sports activities. Among them, it offers a large area for sports games, including a soccer field, a swimming pool, and a padel court. Additionally, it has a spacious gym equipped with the latest machines to keep your body in shape.",
            ubicacion: "LOCATION",
            descripcion_ubicacion: "The venue is located at Calle Uria, number 52, on the outskirts of Zaragoza. It is easily accessible by public transport, either by bus or tram. Additionally, it has a spacious underground parking lot available for any user.",
            monitores: "PERSONAL TRAINERS",
            descripcion_monitores: "Jelzi Sports Center has trained staff to supervise the various activities offered. These coaches are responsible for ensuring that all equipment works correctly and safely, as well as helping ensure that exercises are performed properly to prevent injuries.",
            gimnasio: "GYM",
            descripcion_gimnasio: "It has a large space with machines for free training and three rooms for guided classes, such as Zumba, BodyPump, and Spinning.",
            futbol: "SOCCER",
            descripcion_futbol: "It has two soccer fields: one for free practice, which can be reserved to play with friends, and another for teams trained by the sports center, catering to different ages and categories.",
            natacion: "SWIMMING",
            descripcion_natacion: "The large indoor swimming pool, in addition to free-style swimming, offers activities such as AquaGym and HydroSpinning.",
            padel: "PADEL",
            descripcion_padel: "It has padel courts available for free play or for tournaments organized by the sports center.",
            name: "Name",
            apellidos: "Surname",
            telefono: "Phone",
            email: "Email",
            fecha_reserva: "Booking date",
            hora_reserva: "Booking hour",
            seleccion_clase: "Which class do you want to book?",
            yoga: "Yoga",
            pilates: "Pilates",
            natacion_opcion: "Swimming",
            spinning: "Spinning",
            crossfit: "CrossFit",
            futbol_opcion: "Soccer",
            padel_opcion: "Padel",
            enviar: "Send",
            siguenos: "Follow us on our social media:",
            horario: "Schedule: Monday to Sunday from 6:00 AM to 11:00 PM.",
            telefono_footer: "Phone:",
            number: "976 252 525",
            politica: "Privacy policy and cookies: This website uses cookies to enhance the user experience. For more information, please check our",
            enlace_politica: "privacy policy"
        }
    };

    function changeLanguage(lang) {
        document.querySelectorAll("[data-translate]").forEach(el => {
            const key = el.getAttribute("data-translate");
            if (el.tagName === "INPUT" && el.type === "submit") {
                el.value = texts[lang][key];
            } else if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
                el.placeholder = texts[lang][key];
            } else if (el.tagName === "P" && el.querySelector("select")) {
                el.querySelectorAll("option[data-translate]").forEach(option => {
                    const optionKey = option.getAttribute("data-translate");
                    if (optionKey && texts[lang][optionKey]) {
                        option.textContent = texts[lang][optionKey];
                    }
                });
                el.childNodes[0].nodeValue = texts[lang][key] + " ";
            } else if (el.tagName === "A") {
                if (el.getAttribute("data-translate") === "enlace_politica") {
                    el.textContent = texts[lang]["enlace_politica"];
                } else {
                    el.innerHTML = texts[lang][key];
                }
            } else {
                el.textContent = texts[lang][key];
            }
        });
        localStorage.setItem("language", lang);
    }

    document.getElementById("es").addEventListener("click", function () {
        changeLanguage("es");
    });

    document.getElementById("en").addEventListener("click", function () {
        changeLanguage("en");
    });

    const savedLanguage = localStorage.getItem("language") || "es";
    changeLanguage(savedLanguage);
});
document.addEventListener("DOMContentLoaded", function () {
    const reservasForm = document.getElementById("reservas_form");

    reservasForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        // Obtener los datos del formulario
        const formData = {
            nombre: document.getElementById("name").value,
            apellidos: document.getElementById("apellidos").value,
            telefono: document.getElementById("telefono").value,
            email: document.getElementById("email").value,
            direccion: "No especificada" // Debes añadir este campo en la BD o modificarlo
        };

        try {
            const response = await fetch("http://localhost:3000/usuarios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            alert(data.message || "Reserva enviada con éxito");
        } catch (error) {
            console.error("Error al enviar la reserva:", error);
            alert("Hubo un error al enviar la reserva.");
        }
    });
});