import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const { topic } = await req.json(); // Read the topic from the request body
    const API_KEY = process.env.OPENAI_API_KEY; // Server-side API key

    if (!API_KEY) {
        return NextResponse.json({ error: "API key is missing" }, { status: 500 });
    }

    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${API_KEY}`,
            },
            body: JSON.stringify({
                model: "gpt-4",
                messages: [{ role: "system", content: `Define '${topic}' in one sentence.` }],
                max_tokens: 50,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            return NextResponse.json({ error: errorText }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json({
            definition: data.choices?.[0]?.message?.content?.trim() || "No definition found.",
        });
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch definition" }, { status: 500 });
    }
}

// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     if (req.method !== "POST") {
//         return res.status(405).json({ error: "Method not allowed" });
//     }

//     const { topic } = req.body;
//     const API_KEY = process.env.OPENAI_API_KEY; // ✅ Secure - Only available on the server

//     if (!API_KEY) {
//         return res.status(500).json({ error: "API key is missing" });
//     }

//     try {
//         const response = await fetch("https://api.openai.com/v1/chat/completions", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${API_KEY}`,
//             },
//             body: JSON.stringify({
//                 model: "gpt-4",
//                 messages: [{ role: "system", content: `Define '${topic}' in one sentence.` }],
//                 max_tokens: 50,
//             }),
//         });

//         if (!response.ok) {
//             return res.status(response.status).json({ error: "API request failed" });
//         }

//         const data = await response.json();
//         res.status(200).json({ definition: data.choices?.[0]?.message?.content?.trim() || "No definition found." });
//     } catch (error) {
//         res.status(500).json({ error: "Failed to fetch definition" });
//     }
// }
