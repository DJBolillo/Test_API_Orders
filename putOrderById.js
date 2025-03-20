const axios = require('axios');

const updateOrder = async (orderId, updatedData) => {
    try {
        const response = await axios.put(`https://api-rest-ordenes-detalles-compra.onrender.com/apiV1/orders/${orderId}`, updatedData, {
            headers: { 'Content-Type': 'application/json' }
        });
        // En caso de exito mostrar codigos de estado y detalles
        console.log("Orden actualizada exitosamente:", response.data);
        console.log("Código de respuesta:", response.status);
    } catch (error) {
        // Errores que puedan llegar a ocurrir
        if (error.response) {
            console.error("Error en la API:", error.response.data);
            console.error("Código de estado:", error.response.status);
        } else if (error.request) {
            console.error("No se recibió respuesta del servidor.");
        } else {
            console.error("Error inesperado:", error.message);
        }
    }
};

// Ejemplo Completando una orden, necesitamos un ID Valido
updateOrder("OsnzhIweAhA8X59rQft4", {
    estado: "Completado",
    estadoEnvio: {
        estadoActual: "Entregado",
        fechaEstimacion: "2024-03-05T18:00:00Z"
    }
});
