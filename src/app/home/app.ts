// Importar los módulos necesarios
import express, { Request, Response } from 'express';
import path from 'path';

// Crear la aplicación Express
const app = express();
const port = 3000;

// Ruta principal
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta de inicio de sesión
app.get('/login', (req: Request, res: Response) => {
  res.send('Página de inicio de sesión');
});

// Ruta de registro
app.get('/register', (req: Request, res: Response) => {
  res.send('Página de registro');
});

// Ruta de productos (link al ecommerce)
app.get('/products', (req: Request, res: Response) => {
  res.send('Página de productos (ecommerce)');
});

// Ruta del blog
app.get('/blog', (req: Request, res: Response) => {
  res.send('Página del blog');
});

// Ruta de la calculadora de huella de carbono
app.get('/carbon-footprint-calculator', (req: Request, res: Response) => {
  res.send('Página de la calculadora de huella de carbono');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
