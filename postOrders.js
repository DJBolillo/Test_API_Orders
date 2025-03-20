const axios = require('axios');

const postOrders = async (id, clienteId, fechaPedido, total, estado, productos, descuentosAplicados, estadoEnvio) => {
    const nuevaOrden = { id, clienteId, fechaPedido, total, estado, productos, descuentosAplicados, estadoEnvio };

    try {
        const response = await axios.post('https://api-rest-ordenes-detalles-compra.onrender.com/apiV1/orders', nuevaOrden, {
            headers: { 'Content-Type': 'application/json' }
        });
        // Respuesta en base a codigos y muestra que fue creada la orden correctamente
        console.log("Orden creada exitosamente:", response.data);
        console.log("Código de respuesta:", response.status);
    } catch (error) {
        if (error.response) {
            // Error del servidor (respuesta con estado de error)
            console.error("Error en la API:", error.response.data);
            console.error("Código de estado:", error.response.status);
        } else if (error.request) {
            // La solicitud fue hecha pero no hubo respuesta
            console.error("No se recibió respuesta del servidor.");
        } else {
            // Otro tipo de error
            console.error("Error inesperado:", error.message);
        }
    }
};

// Ejemplo de llamada a la función ingresando una nueva orden
postOrders(
    "9876",
    "67890",
    "2024-03-02T14:30:00Z",
    530,
    "Pendiente",
    [
        {
            productoId: "A1B2C3",
            nombre: "Teclado NO Mecánico",
            cantidad: 1,
            precioUnitario: 600.00
        }
    ],
    [
        {
            codigo: "PROMO20",
            porcentaje: 20,
            valorDescuento: 30
        }
    ],
    {
        estadoActual: "En tránsito",
        fechaEstimacion: "2024-03-05T18:00:00Z"
    }
);
