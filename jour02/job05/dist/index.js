"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Données fictives
const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
];
// Helper pour les réponses
function createResponse(data) {
    return {
        success: true,
        data,
        timestamp: new Date().toISOString(),
    };
}
// Routes
app.get("/", (req, res) => {
    res.json(createResponse({
        message: "🚀 API Multi-stage Build",
        version: "1.0.0",
        endpoints: ["/health", "/api/users", "/api/users/:id"],
    }));
});
app.get("/health", (req, res) => {
    res.json(createResponse({
        status: "healthy",
        uptime: process.uptime(),
        memory: process.memoryUsage(),
    }));
});
app.get("/api/users", (req, res) => {
    res.json(createResponse(users));
});
app.get("/api/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find((u) => u.id === id);
    if (!user) {
        res.status(404).json({
            success: false,
            error: "User not found",
            timestamp: new Date().toISOString(),
        });
        return;
    }
    res.json(createResponse(user));
});
app.post("/api/users", (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        res.status(400).json({
            success: false,
            error: "Name and email are required",
            timestamp: new Date().toISOString(),
        });
        return;
    }
    const newUser = {
        id: users.length + 1,
        name,
        email,
    };
    users.push(newUser);
    res.status(201).json(createResponse(newUser));
});
// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════╗
║  🚀 API Multi-stage Build                  ║
║  Server running on http://localhost:${PORT}   ║
║  Environment: ${process.env.NODE_ENV || "development"}              ║
╚════════════════════════════════════════════╝
  `);
});
//# sourceMappingURL=index.js.map