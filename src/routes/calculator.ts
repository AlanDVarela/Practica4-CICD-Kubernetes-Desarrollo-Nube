import { Router, Request, Response } from 'express';

const router = Router();


interface CalculationResponse {
  operation: string;
  a: number;
  b: number;
  result: number;
}

const parseParams = (req: Request): { a: number; b: number; error?: string } => {
  const { a, b } = req.query;
  const numA = parseFloat(a as string);
  const numB = parseFloat(b as string);

  if (isNaN(numA) || isNaN(numB)) {
    return { a: 0, b: 0, error: 'Please provide valid numbers a and b' };
  }

  return { a: numA, b: numB };
};

// Operaciones

router.get('/sum', (req: Request, res: Response) => {
  const { a, b, error } = parseParams(req);
  if (error) return res.status(400).json({ error });

  const result = a + b;
  const response: CalculationResponse = { operation: 'sum', a, b, result };
  return res.json(response);
});

router.get('/sub', (req: Request, res: Response) => {
  const { a, b, error } = parseParams(req);
  if (error) return res.status(400).json({ error });

  const result = a - b;
  const response: CalculationResponse = { operation: 'sub', a, b, result };
  return res.json(response);
});

router.get('/mult', (req: Request, res: Response) => {
  const { a, b, error } = parseParams(req);
  if (error) return res.status(400).json({ error });

  const result = a * b;
  const response: CalculationResponse = { operation: 'mult', a, b, result };
  return res.json(response);
});

router.get('/div', (req: Request, res: Response) => {
  const { a, b, error } = parseParams(req);
  if (error) return res.status(400).json({ error });

  if (b === 0) {
    return res.status(400).json({ error: 'Division by zero is not allowed' });
  }

  const result = a / b;
  const response: CalculationResponse = { operation: 'div', a, b, result };
  return res.json(response);
});

// Health

router.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'UP', timestamp: new Date().toISOString() });
});

export default router;
