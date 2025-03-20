const axios = require('axios');

const getOrderProducts = async (orderId) => {
    try {
        const response = await axios.get(`https://api-rest-ordenes-detalles-compra.onrender.com/apiV1/orders/${orderId}/productos`, {
            headers: { 'Content-Type': 'application/json' }
        });
        // Mostrar los productos que fueron encontrados y codigo de respuesta
        console.log("Productos de la orden obtenidos exitosamente:", response.data);
        console.log("Código de respuesta:", response.status);
    } catch (error) {
        // Mostrar diversos errores que pueden llegar a ocurrir
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

// Utilizar una ID de orden valida para este ejemplo
getOrderProducts("5nwGN5JdZ5UwtXuLCiME");
