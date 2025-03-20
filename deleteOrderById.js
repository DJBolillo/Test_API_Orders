const axios = require('axios');

const deleteOrder = async (orderId) => {
    try {
        const response = await axios.delete(`https://api-rest-ordenes-detalles-compra.onrender.com/apiV1/orders/${orderId}`, {
            headers: { 'Content-Type': 'application/json' }
        });
        // Si el borrado fue exitoso nos aparecerá su código de estado
        console.log("Orden eliminada exitosamente.");
        console.log("Código de respuesta:", response.status);
    } catch (error) {
        // En caso de algun error mostrar los codigos de estado e informacion en base a estos
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

// Borramos la orden con la que hemos estado trabajando
deleteOrder("OsnzhIweAhA8X59rQft4");
