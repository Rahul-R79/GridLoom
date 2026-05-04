import express from 'express';
import cors from 'cors';
import { IWorkspace } from '@repo/shared-types';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (_, res) => {
  res.json({ status: 'ok', message: 'API is running' });
});

app.get('/api/workspaces/example', (_, res) => {
  const exampleWorkspace: IWorkspace = {
    id: '1',
    name: 'GridLoom Default',
    createdAt: new Date(),
  };
  res.json(exampleWorkspace);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
