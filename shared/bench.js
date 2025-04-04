import { appendFile, mkdir } from 'fs/promises';

export async function bench(func, ...args) {
  try {
    const isAsync = func.constructor.name === 'AsyncFunction';

    performance.mark('start');

    if (isAsync) {
      await func(...args);
    } else {
      func(...args);
    }

    performance.mark('end');

    const measure = performance.measure('Measurement', 'start', 'end');

    await mkdir('results', { recursive: true });

    await appendFile(`results/${func.name}.csv`, measure.duration.toString() + '\r\n');

    console.log(`Результат сохранён: results/${func.name}.csv`);
  } catch (error) {
    console.error('Ошибка при выполнении бенчмарка:', error);
  }
}