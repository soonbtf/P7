import express from 'express';
import postsRoutes from './routes/postsRoutes.js';
import usersRoutes from './routes/usersRoutes.js';
import reactionsRoutes from './routes/reactionsRoutes.js';
import helmet from 'helmet';
import 'dotenv/config';

const app = express();
app.use(express.json()); // pour parser les données json

app.use(helmet({
    crossOriginResourcePolicy : false
  }));

app.use((req, res, next) => { //middleware général sera appliqué à toutes les routes
    res.setHeader('Access-Control-Allow-Origin', '*'); // toutes les origines ont le droit d'accéder à notre API avec '*'
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use("/api/auth/", usersRoutes);
app.use("/api/posts/", postsRoutes);
app.use("/api/posts/", reactionsRoutes);

app.listen(process.env.PORT || 3000);