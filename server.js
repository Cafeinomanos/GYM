const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Conectar a la base de datos SQLite
const db = new sqlite3.Database('./database.sqlite', (err) => {
    if (err) {
        console.error('Error al conectar a la base de datos:', err);
    } else {
        console.log('✅ Conectado a la base de datos SQLite.');
    }
});

// Endpoint para registrar usuarios
app.post('/usuarios', (req, res) => {
    const { nombre, apellidos, telefono, email, direccion = "No especificada"} = req.body;
    const sql = `INSERT INTO Usuarios (nombre, apellidos, telefono, email, direccion) VALUES (?, ?, ?, ?, ?)`;
    db.run(sql, [nombre, apellidos, telefono, email, direccion], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ id: this.lastID, message: '✅ Usuario registrado correctamente' });
        }
    });
});

// Endpoint para obtener todos los usuarios
app.get('/usuarios', (req, res) => {
    const sql = 'SELECT * FROM Usuarios';
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(rows);
        }
    });
});

// Endpoint para obtener un usuario por ID
app.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM Usuarios WHERE id = ?';
    db.get(sql, [id], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (!row) {
            res.status(404).json({ message: 'Usuario no encontrado' });
        } else {
            res.json(row);
        }
    });
});

// Endpoint para actualizar un usuario por ID
app.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, apellidos, telefono, email, direccion } = req.body;
    const sql = 'UPDATE Usuarios SET nombre = ?, apellidos = ?, telefono = ?, email = ?, direccion = ? WHERE id = ?';
    db.run(sql, [nombre, apellidos, telefono, email, direccion, id], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (this.changes === 0) {
            res.status(404).json({ message: 'Usuario no encontrado' });
        } else {
            res.json({ message: '✅ Usuario actualizado correctamente' });
        }
    });
});

//  eliminar un usuario por ID
app.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM Usuarios WHERE id = ?';
    db.run(sql, [id], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
        } else if (this.changes === 0) {
            res.status(404).json({ message: 'Usuario no encontrado' });
        } else {
            res.json({ message: '✅ Usuario eliminado correctamente' });
        }
    });
});

// Servidor  puerto 3000
app.listen(port, () => {
    console.log(`Servidor backend ejecutándose en: http://localhost:${port}`);
});

