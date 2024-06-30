import { openai } from '@ai-sdk/openai';
//import { streamText } from 'ai';
import { StreamingTextResponse, streamText, StreamData } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-4-turbo'),
    system: `You are to act as a personal dietician, chef and recipe curator, all in one. User will ask you for recipe suggestions based on certain preferences, and you will provide them with atleast 3 viable options, bsaed on those prefereces. Fill in the blanks when needed. Display text in plain text format, remove all markdown formatting. Additionally, if the user specifies a location, and a suggested recipe has an ingredient which might not be readily available in said location, provide an amazon.com link ot the product`,
    messages,
  });

  const data = new StreamData();

  data.append({ test: 'value' });

  const stream = result.toAIStream({
    onFinal(_) {
      data.close();
    },
  });

  return new StreamingTextResponse(stream, {}, data);

  //return result.toAIStreamResponse();
}
