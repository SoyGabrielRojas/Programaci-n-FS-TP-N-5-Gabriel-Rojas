# Trabajo Práctico N°5 - Programación Web Full-Stack

### Curso: **Programación Web Full-Stack**
### Nivel: **2**
### Módulo: **5 – Backend**

---

## Bienvenida

¡Hola! 👋 Bienvenido al repositorio del **Trabajo Práctico N°5** del curso de **Programación Web Full-Stack**. Mi nombre es **Gabriel Andrés Rojas** y aquí presento el desarrollo del backend de una aplicación de gestión de una clínica, utilizando **Node.js**, **Express** y **MySQL**, estructurado bajo el patrón **MVC** (Modelo-Vista-Controlador). Este proyecto representa el progreso de lo trabajado en el TP4, añadiendo funcionalidades más avanzadas.

---

## Descripción del Proyecto

En este proyecto desarrollé un sistema de gestión clínica, enfocado en las entidades de **Médicos**, **Pacientes**, e **Ingresos**. El backend permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre médicos y pacientes, así como gestionar los ingresos de los pacientes en la clínica.

### Características principales:
1. **Estructura basada en el patrón MVC** para mantener el código modular y organizado.
2. **Operaciones CRUD** para las entidades de **Médico** y **Paciente**.
3. **Consultas específicas**:
   - `getByEspecialidad()` para buscar médicos por especialidad.
   - `getByNSS()` para obtener pacientes mediante su número de seguridad social (NSS).
4. **Gestión de Ingresos**:
   - Crear nuevos ingresos.
   - Listar los ingresos existentes.
   - Mejora en la operación de listar ingresos, añadiendo los campos `ApeNomPaciente` (Apellido y Nombre del paciente) y `ApeNomMedico` (Apellido y Nombre del médico).

---

## Mejora: Listar Ingresos con Campos Extras

En el desafío opcional, se mejoró la funcionalidad de **listar ingresos**. Ahora, la respuesta incluye dos nuevos campos:

- **ApeNomPaciente**: Combina el apellido y nombre del paciente.
- **ApeNomMedico**: Combina el apellido y nombre del médico.

Esto se logró mediante una consulta SQL que realiza un **JOIN** entre las tablas `paciente`, `medico` e `ingreso`.

---

## Pruebas con Postman

Todos los endpoints fueron probados y verificados con **Postman**. Las pruebas incluyeron:
- Creación, actualización y eliminación de médicos y pacientes.
- Creación de ingresos.
- Listado de ingresos con la mejora implementada.

---

## Conclusión

Este proyecto demuestra el uso práctico de Node.js, Express y MySQL, aplicando el patrón MVC para crear un backend eficiente y escalable. A través de este trabajo, logré implementar operaciones CRUD y consultas personalizadas, así como mejorar la funcionalidad del sistema de ingresos en una clínica.

¡Gracias por visitar este proyecto! 😊

