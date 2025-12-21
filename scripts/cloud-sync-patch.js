/**
 * Extensión para sincronización automática.
 * Instrucciones: Reemplazar la URL y llamar a esta función dentro de finalizarCicloLocal()
 */
const GOOGLE_SCRIPT_URL = "TU_URL_DE_DESPLIEGUE_AQUI";

async function syncToCloud(payload) {
    try {
        await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify(payload)
        });
        console.log("Sincronización exitosa");
    } catch (err) {
        console.error("Error al sincronizar:", err);
    }
}
