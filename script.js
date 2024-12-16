document.getElementById("pairButton").addEventListener("click", async function () {
    const top = document.getElementById("tops").value;
    const bottom = document.getElementById("bottoms").value;
    const shoes = document.getElementById("shoes").value;

    const result = await suggestOutfit(top, bottom, shoes);
    document.getElementById("output").innerText = result;
});

// Function to call OpenAI API
async function suggestOutfit(top, bottom, shoes) {
    const prompt = `Suggest a gym outfit pairing for these items: 
    - Top: ${top} 
    - Bottom: ${bottom} 
    - Shoes: ${shoes}`;

    const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer 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`
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 100
        })
    });

    const data = await response.json();
    return data.choices[0].text.trim();
}
