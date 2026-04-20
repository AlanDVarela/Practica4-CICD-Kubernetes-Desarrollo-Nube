import { Router, Request, Response } from 'express';

const router = Router();

router.get('/sum', (req: Request, res: Response) => {
  const { a, b } = req.query;
  const numA = parseFloat(a as string);
  const numB = parseFloat(b as string);

  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ error: 'Please provide valid numbers a and b' });
  }

  const result = numA + numB;
  return res.json({ operation: 'sum', a: numA, b: numB, result });
});

router.get('/sub', (req: Request, res: Response) => {
  const { a, b } = req.query;
  const numA = parseFloat(a as string);
  const numB = parseFloat(b as string);

  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ error: 'Please provide valid numbers a and b' });
  }

  const result = numA - numB;
  return res.json({ operation: 'sub', a: numA, b: numB, result });
});

router.get('/mult', (req: Request, res: Response) => {
  const { a, b } = req.query;
  const numA = parseFloat(a as string);
  const numB = parseFloat(b as string);

  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ error: 'Please provide valid numbers a and b' });
  }

  const result = numA * numB;
  return res.json({ operation: 'mult', a: numA, b: numB, result });
});


router.get('/div', (req: Request, res: Response) => {
  const { a, b } = req.query;
  const numA = parseFloat(a as string);
  const numB = parseFloat(b as string);

  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ error: 'Please provide valid numbers a and b' });
  }

  if (numB === 0) {
    return res.status(400).json({ error: 'Division by zero is not allowed' });
  }

  const result = numA / numB;
  return res.json({ operation: 'div', a: numA, b: numB, result });
});

router.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'UP' });
});

export default router;
