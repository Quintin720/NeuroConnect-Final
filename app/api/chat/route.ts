import qaData from '../../../data/NeuroConnect_QA_Full.json';

export async function POST(req: Request) {
  const { messages } = await req.json();
  const latestMessage = messages[messages.length - 1].content.toLowerCase();

  const match = qaData.find((qa: any) =>
    latestMessage.includes(qa.Question.toLowerCase())
  );

  const answer = match
    ? match["Free Answer"]
    : "I'm not sure how to answer that yet — please ask in another way or check back soon.";

  return new Response(answer);
}
