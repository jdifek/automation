import { NextResponse } from "next/server";
import openai from "@/lib/openaiConfig";
export async function GET() {
  return NextResponse.json({ message: "API works!" });
}

export async function POST(req: Request) {
  const { question } = await req.json();

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: question },
      ],
    });

    const answer = completion.choices[0].message.content;
    return NextResponse.json({ answer });
  } catch (error) {
    console.error("Error fetching from OpenAI", error);
    return NextResponse.json(
      { error: "Failed to fetch answer from OpenAI" },
      { status: 500 }
    );
  }
}
