import express, { Application } from 'express';
import cors from 'cors';
import { loggerMiddleware } from './middlewares/logger.middleware';
import { connectDB } from './services/accessdb';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './swagger';
import businessRouter from './routers/business.router';
import meetingRouter from './routers/meeting.router';
import serviceRouter from './routers/service.router';
import userRouter from './routers/user.router';

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '3000', 10);

app.use(cors());
app.use(express.json());
(async () => {
    await connectDB();
})();

app.use(loggerMiddleware);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(businessRouter);
app.use(meetingRouter);
app.use(serviceRouter);
app.use(userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`)
});
