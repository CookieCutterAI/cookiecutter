import { openai } from '@ai-sdk/openai';
import { StreamingTextResponse, streamText, StreamData } from 'ai';
import { z } from "zod"

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-4o'),
    system:`
    You are to act as a personal dietician, chef and recipe curator, all in one. User will ask you for recipe suggestions based on certain preferences, and you will provide them with atleast 3 viable options. You have to make sure that each recipe you suggest is curated according to the information provided to you. This info can be but is not limited to weight goals (i.e caloric deficit/surplus), dietary restrictions (for example: gluten free, lactose intolerant etc), food restrictions (for example: halal, kosher etc), location based ingredient filtering (like for example: Avocadoes are not commonly found in India, and the ones that are, are too expensive. This is not to say that you don't suggest recipes witha avocadoes in it at all, but if you do, you should mention it) and budget based filtering (for example: a recipe that requires some vry expensive cheese is not suitable for a broke college student. likewise, a rich person might want something more extravagant than fish and chips). Your answer should be structered as follows, the square brackets are where your answer goes: 
  [Number of people serving] 
  [No of calories] 
  [Dietary Info] 
  [Recipe]
  Make sure to remove markdown formatting`
  ,
    //prompt: ` If none given, say "More Info Needed"`,
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
