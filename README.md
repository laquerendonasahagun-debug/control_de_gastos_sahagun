# Control de gastos · La Querendona Ciudad Sahagún

Aplicación web para registrar y consultar los gastos de La Querendona Ciudad Sahagún.

## Incluye

- Inicio de sesión con perfiles de administrador y empleado.
- Resumen de gastos reales por día, semana, mes y concepto.
- Captura individual y masiva de gastos con fecha, semana, concepto, responsable, monto, forma de pago y nota.
- Registro de gastos operativos y fijos con acumulados diarios, semanales y mensuales.
- Edición y eliminación de movimientos para administradores.
- Gráficas generales, operativas y fijas vinculadas a los filtros de fecha.
- Descarga de movimientos para Excel.
- Persistencia compartida en Neon Postgres para consultar los mismos gastos desde varios dispositivos.

## Uso

La interfaz se publica en Vercel y usa las funciones `/api/auth` y `/api/expenses` sin exponer credenciales en el navegador. El proyecto requiere las variables `DATABASE_URL`, `AUTH_SECRET`, `APP_ADMIN_USERNAME`, `APP_ADMIN_PASSWORD`, `APP_EMPLOYEE_USERNAME` y `APP_EMPLOYEE_PASSWORD`.

Los registros existentes en `localStorage` se migran automáticamente a la tabla independiente `sahagun_expenses` en Neon y luego se eliminan del almacenamiento local.
