import { Context, Hono } from 'hono';
import swaggerConfig from '../utils/swagger.config';

const docsRouter = new Hono();

docsRouter.get("/", async (c : Context) => {

    return c.json({
        success : true,
        config : swaggerConfig
    });
})

export default docsRouter;
