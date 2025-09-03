import app from './app.js';

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Admin API: http://localhost:${PORT}/api`);
});
