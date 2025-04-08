export async function getTopicDefinition(topic: string): Promise<string> {
  try {
      const response = await fetch("/api/getDefinition", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ topic }),
      });

      if (!response.ok) {
          return "Error: API request failed.";
      }

      const data = await response.json();
      return data.definition || "No definition found.";
  } catch (error) {
      return "Failed to load definition.";
  }
}

// export async function getTopicDefinition(topic: string): Promise<string> {
//     const API_KEY = process.env.OPENAI_API_KEY;
//     console.log("🔑 OpenAI API Key:", API_KEY ? "Loaded ✅" : "Missing ❌");

//     console.log("API Key:", process.env.OPENAI_API_KEY);
//     //console.log("Public API Key:", process.env.NEXT_PUBLIC_OPENAI_API_KEY);
    
    
//   const url = "https://api.openai.com/v1/chat/completions";


//   if (!API_KEY) {
//     console.error("❌ OpenAI API key is missing!");
//     return "Error: Missing API key.";
//   }

//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: "gpt-4",
//         messages: [
//           { role: "system", content: `Define '${topic}' in one sentence.` },
//         ],
//         max_tokens: 50,
//       }),
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error(`❌ API request failed: ${response.status} - ${errorText}`);
//       return "Error: API request failed.";
//     }
//     const data = await response.json();
//      return data.choices?.[0]?.message?.content?.trim() || "No definition found.";
//     } catch (error) {
//     console.error("Error fetching definition:", error);
//     return "Failed to load definition.";
//   }
// }
