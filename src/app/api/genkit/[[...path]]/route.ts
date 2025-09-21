import {genkit} from '@/ai/genkit';
import {defineNextjsHandler} from '@genkit-ai/next';

export const {GET, POST} = defineNextjsHandler({
  ai: genkit,
});
