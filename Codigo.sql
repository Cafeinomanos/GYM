CREATE TABLE Instalaciones (
id_instalacion INT AUTO_INCREMENT PRIMARY KEY,
tipo VARCHAR(255) NOT NULL,
capacidad INT NOT NULL,
estado VARCHAR(255) NOT NULL
);

CREATE TABLE Usuarios (
id_usuario INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
apellidos VARCHAR(255) NOT NULL,
telefono VARCHAR(15) NOT NULL,
email VARCHAR(255) NOT NULL,
direccion VARCHAR(255) NOT NULL
);

CREATE TABLE Reservas (
id_reserva INT AUTO_INCREMENT PRIMARY KEY,
id_usuario INT,
id_instalacion INT,
fecha DATE NOT NULL,
hora TIME NOT NULL,
duracion INT NOT NULL,
FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario),
FOREIGN KEY (id_instalacion) REFERENCES Instalaciones(id_instalacion)
);

CREATE TABLE Actividades (
id_actividad INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
nivel VARCHAR(255) NOT NULL,
horario VARCHAR(255) NOT NULL
);

CREATE TABLE Entrenadores (
id_entrenador INT AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(255) NOT NULL,
apellidos VARCHAR(255) NOT NULL,
fecha_alta DATE NOT NULL,
especialidad VARCHAR(255) NOT NULL,
horario VARCHAR(255) NOT NULL
);

CREATE TABLE Imparten (
id_entrenador INT,
id_actividad INT,
PRIMARY KEY (id_entrenador, id_actividad),
FOREIGN KEY (id_entrenador) REFERENCES Entrenadores(id_entrenador),
FOREIGN KEY (id_actividad) REFERENCES Actividades(id_actividad)
);

