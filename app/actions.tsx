'use server'
import { createStreamableValue } from 'ai/rsc';
import { CoreMessage, streamText } from 'ai';
import { openai } from '@ai-sdk/openai';

let prompText = `
    Act as a personal dietician, chef, and recipe curator. User will ask for recipe suggestions based on certain preferences, Ensure each recipe is tailored according to the provided information, including but not limited to:

    Weight goals (e.g., caloric deficit/surplus)
    Dietary restrictions (e.g., gluten-free, lactose intolerant)
    Food restrictions (e.g., halal, kosher)
    Location-based ingredient filtering (e.g., avocados in India)
    Budget-based filtering (e.g., expensive cheese vs. budget-friendly)

    Structure your answer as follows, in bullet points:

    Number of people serving: [ ]
    Number of calories: [ ]
    Nutritional info: [ ]
    Dietary Info: (only if asked) [ ]
    Recipe: [ ]


  ` 

export async function continueConversation(messages: CoreMessage[]) {
  'use server';
  const result = await streamText({
    model: openai('gpt-4o'),
    system: prompText,
    messages,
  });
  const data = { test: 'hello' };
  const stream = createStreamableValue(result.textStream);
  return { message: stream.value, data };
}
