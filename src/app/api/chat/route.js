import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { message } = await req.json();

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'HTTP-Referer': 'https://localhost:3000', // Optional, for OpenRouter tracking
        'X-Title': 'Silver Gradient Search', // Optional
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'openai/gpt-3.5-turbo', // Or any preferred model
        messages: [{ role: 'user', content: message }],
      }),
    });

    const data = await response.json();
    return NextResponse.json({ reply: data.choices[0].message.content });
  } catch (error) {
    console.error('OpenRouter Error:', error);
    return NextResponse.json({ error: 'Failed to fetch from OpenRouter' }, { status: 500 });
  }
}
