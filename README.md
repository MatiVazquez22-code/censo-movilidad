# Censo de Movilidad Urbana / Urban Mobility Census 🚗🚲

[Español](#español) | [English](#english)

---

## 🔗 Demo en vivo / Live Demo
👉 [https://mativazquez22-code.github.io/censo-movilidad/](https://mativazquez22-code.github.io/censo-movilidad/)

---

<a name="español"></a>
## 🇪🇸 Español

Herramienta web profesional diseñada para optimizar el relevamiento de datos de tránsito en campo. Esta aplicación permite a los censistas realizar conteos clasificados de manera digital, eliminando la burocracia del papel y el error humano en la transcripción de datos.

### ✨ Características Principales
* **Multitouch Real**: Capacidad de registrar múltiples vehículos simultáneamente (ideal para flujos intensos).
* **Smart Keyboard Focus**: Flujo de configuración fluido; usa la tecla 'Enter' para saltar entre campos automáticamente.
* **Gestión de Tiempos**: Cronómetro automático dividido en 4 ciclos de 15 minutos para un control preciso del operativo.
* **Privacidad y Autonomía**: No requiere base de datos externa; los datos se procesan localmente en el navegador.
* **Exportación Profesional**: Genera reportes inmediatos en **Excel (.xlsx)**, **CSV** y **PDF** con diseño limpio para impresión.

### 🚀 Escalabilidad Cloud (Opcional)
Aunque la app es autónoma, está preparada para centralizar datos en la nube:
1.  **Backend**: Script para Google Sheets en [`/scripts/google-apps-script.js`](./scripts/google-apps-script.js).
2.  **Frontend**: Parche de sincronización en [`/scripts/cloud-sync-patch.js`](./scripts/cloud-sync-patch.js).

---

<a name="english"></a>
## 🇺🇸 English

A professional web-based tool designed to streamline field traffic data collection. This application allows surveyors to perform classified counts digitally, eliminating paper bureaucracy and human error during data transcription.

### ✨ Key Features
* **True Multitouch**: Register multiple vehicles simultaneously, perfect for heavy traffic flows.
* **Smart Keyboard Focus**: Optimized setup flow; use the 'Enter' key to jump between fields automatically.
* **Time Management**: Automatic timer set for 4 official 15-minute cycles for precise survey control.
* **Privacy Focused**: No external database required; data is processed locally in the browser.
* **Professional Export**: Immediate report generation in **Excel (.xlsx)**, **CSV**, and **PDF** with a clean, print-ready layout.

### 🚀 Cloud Scalability (Optional)
While the app is standalone, it is ready to centralize data in the cloud:
1.  **Backend**: Google Sheets script in [`/scripts/google-apps-script.js`](./scripts/google-apps-script.js).
2.  **Frontend**: Synchronization patch in [`/scripts/cloud-sync-patch.js`](./scripts/cloud-sync-patch.js).

---

## 🛠️ Tech Stack
* **HTML5 / CSS3 (Responsive & Print Optimized)**
* **JavaScript (Vanilla / Touch Events)**
* **SheetJS**: Data export engine
* **NoJekyll**: Deployment optimization
