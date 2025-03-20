const axios = require('axios');

const getOrderById = async (orderId) => {
    try {
        const response = await axios.get(`https://api-rest-ordenes-detalles-compra.onrender.com/apiV1/orders/${orderId}`, {
            headers: { 'Content-Type': 'application/json' }
        });
        // Muestra en caso de encontrar la orden con su codigo de respuesta
        console.log("Orden obtenida exitosamente:", response.data);
        console.log("Código de respuesta:", response.status);
    } catch (error) {
        // En caso de error nos mostrar los codigos de estado y detalles de este
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

// Utilizar un ID valido para poder ver sus detalles
getOrderById("wT3YX4J60CcdXnpRsx2D");
