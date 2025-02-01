INSERT INTO Instalaciones (tipo, capacidad, estado) VALUES ('Gimnasio', 83, 'Disponible');
INSERT INTO Instalaciones (tipo, capacidad, estado) VALUES ('Piscina', 19, 'Mantenimiento');
INSERT INTO Instalaciones (tipo, capacidad, estado) VALUES ('Cancha de tenis', 7, 'Disponible');
INSERT INTO Instalaciones (tipo, capacidad, estado) VALUES ('Sala de yoga', 28, 'Reservado');
INSERT INTO Instalaciones (tipo, capacidad, estado) VALUES ('Pista de atletismo', 192, 'Disponible');
INSERT INTO Usuarios (nombre, apellidos, telefono, email, direccion) VALUES ('Primitivo', 'Redondo', '+34 728636667', 'ovidio33@yahoo.com', 'Avenida Adora Ferreras 81
La Coruña, 56936');
INSERT INTO Usuarios (nombre, apellidos, telefono, email, direccion) VALUES ('Casandra', 'Quiroga', '+34 729143637', 'palomarsalud@yahoo.com', 'Plaza Humberto Nadal 737 Puerta 8 
Cantabria, 48986');
INSERT INTO Usuarios (nombre, apellidos, telefono, email, direccion) VALUES ('Isabel', 'Villena', '+34 705 59 65 09', 'fabianalmagro@amoros.com', 'Calle Crescencia Rius 51
Huelva, 49452');
INSERT INTO Usuarios (nombre, apellidos, telefono, email, direccion) VALUES ('Dulce', 'Jara', '+34743 79 92 19', 'vguzman@correa.org', 'Via Plinio Quirós 79 Piso 4 
Pontevedra, 82155');
INSERT INTO Usuarios (nombre, apellidos, telefono, email, direccion) VALUES ('Remigio', 'Álamo', '+34734 869 823', 'guadalupe66@gmail.com', 'Callejón Abril Morata 334
Guipúzcoa, 65378');
INSERT INTO Usuarios (nombre, apellidos, telefono, email, direccion) VALUES ('Germán', 'Elorza', '+34 887207755', 'doloresvila@gmail.com', 'Glorieta Beatriz Cazorla 883
Segovia, 51715');
INSERT INTO Usuarios (nombre, apellidos, telefono, email, direccion) VALUES ('Abraham', 'Valls', '+34 741 91 87 32', 'lupepaz@hotmail.com', 'Paseo de Máxima Giménez 26 Puerta 6 
Cáceres, 23088');
INSERT INTO Usuarios (nombre, apellidos, telefono, email, direccion) VALUES ('Isabela', 'Ariza', '+34 704885432', 'noa09@borja-santiago.org', 'Cañada Manuelita Alberola 306
Cantabria, 96412');
INSERT INTO Usuarios (nombre, apellidos, telefono, email, direccion) VALUES ('Noé', 'Valderrama', '+34 707 440 827', 'vidal79@yahoo.com', 'Rambla Merche Tello 4 Apt. 30 
Murcia, 01158');
INSERT INTO Usuarios (nombre, apellidos, telefono, email, direccion) VALUES ('Pastora', 'Zapata', '+34 707 15 09 23', 'tomasdesiderio@gmail.com', 'Alameda Selena Bejarano 78 Apt. 78 
Santa Cruz de Tenerife, 47652');
INSERT INTO Actividades (nombre, nivel, horario) VALUES ('Yoga', 'Principiante', '08:00 - 09:00');
INSERT INTO Actividades (nombre, nivel, horario) VALUES ('Pilates', 'Intermedio', '10:00 - 11:00');
INSERT INTO Actividades (nombre, nivel, horario) VALUES ('Natación', 'Avanzado', '12:00 - 13:00');
INSERT INTO Actividades (nombre, nivel, horario) VALUES ('Spinning', 'Intermedio', '17:00 - 18:00');
INSERT INTO Actividades (nombre, nivel, horario) VALUES ('CrossFit', 'Avanzado', '19:00 - 20:00');
INSERT INTO Actividades (nombre, nivel, horario) VALUES ('Fútbol', 'Intermedio', '16:00 - 17:30');
INSERT INTO Actividades (nombre, nivel, horario) VALUES ('Pádel', 'Principiante', '18:30 - 20:00');
INSERT INTO Entrenadores (nombre, apellidos, fecha_alta, especialidad, horario) VALUES ('Mayte', 'Larrañaga', '2023-12-31', 'Pilates', '08:00 - 12:00');
INSERT INTO Entrenadores (nombre, apellidos, fecha_alta, especialidad, horario) VALUES ('Federico', 'Blanco', '2021-01-06', 'Natación', '14:00 - 18:00');
INSERT INTO Entrenadores (nombre, apellidos, fecha_alta, especialidad, horario) VALUES ('Adora', 'Colomer', '2023-06-01', 'CrossFit', '18:00 - 22:00');
INSERT INTO Entrenadores (nombre, apellidos, fecha_alta, especialidad, horario) VALUES ('Sabina', 'Prat', '2022-04-26', 'Yoga', '18:00 - 22:00');
INSERT INTO Entrenadores (nombre, apellidos, fecha_alta, especialidad, horario) VALUES ('Ale', 'Ripoll', '2020-08-24', 'CrossFit', '14:00 - 18:00');
INSERT INTO Reservas (id_usuario, id_instalacion, fecha, hora, duracion) VALUES (6, 5, '2025-01-18', '06:58:20', 88);
INSERT INTO Reservas (id_usuario, id_instalacion, fecha, hora, duracion) VALUES (1, 2, '2025-01-11', '01:20:59', 50);
INSERT INTO Reservas (id_usuario, id_instalacion, fecha, hora, duracion) VALUES (4, 3, '2025-01-05', '02:49:46', 99);
INSERT INTO Reservas (id_usuario, id_instalacion, fecha, hora, duracion) VALUES (7, 2, '2025-01-11', '08:35:43', 97);
INSERT INTO Reservas (id_usuario, id_instalacion, fecha, hora, duracion) VALUES (5, 3, '2025-01-25', '01:41:23', 91);
INSERT INTO Reservas (id_usuario, id_instalacion, fecha, hora, duracion) VALUES (3, 4, '2025-01-16', '04:58:32', 45);
INSERT INTO Reservas (id_usuario, id_instalacion, fecha, hora, duracion) VALUES (1, 4, '2025-01-09', '11:44:25', 96);
INSERT INTO Reservas (id_usuario, id_instalacion, fecha, hora, duracion) VALUES (3, 2, '2025-01-02', '20:30:03', 71);
INSERT INTO Reservas (id_usuario, id_instalacion, fecha, hora, duracion) VALUES (4, 2, '2025-01-16', '17:18:23', 85);
INSERT INTO Reservas (id_usuario, id_instalacion, fecha, hora, duracion) VALUES (8, 1, '2025-01-07', '19:04:27', 118);
INSERT INTO Reservas (id_usuario, id_instalacion, fecha, hora, duracion) VALUES (4, 1, '2025-01-29', '05:39:53', 37);
INSERT INTO Reservas (id_usuario, id_instalacion, fecha, hora, duracion) VALUES (8, 2, '2025-01-22', '07:28:31', 47);
INSERT INTO Reservas (id_usuario, id_instalacion, fecha, hora, duracion) VALUES (1, 1, '2025-01-24', '17:05:29', 73);
INSERT INTO Reservas (id_usuario, id_instalacion, fecha, hora, duracion) VALUES (2, 5, '2025-01-30', '12:55:35', 98);
INSERT INTO Reservas (id_usuario, id_instalacion, fecha, hora, duracion) VALUES (5, 2, '2025-01-22', '21:44:22', 44);
INSERT INTO Imparten (id_entrenador, id_actividad) VALUES (3, 1);
INSERT INTO Imparten (id_entrenador, id_actividad) VALUES (2, 4);
INSERT INTO Imparten (id_entrenador, id_actividad) VALUES (3, 2);
INSERT INTO Imparten (id_entrenador, id_actividad) VALUES (5, 2);
INSERT INTO Imparten (id_entrenador, id_actividad) VALUES (3, 1);
INSERT INTO Imparten (id_entrenador, id_actividad) VALUES (5, 5);
INSERT INTO Imparten (id_entrenador, id_actividad) VALUES (2, 1);
INSERT INTO Imparten (id_entrenador, id_actividad) VALUES (4, 2);