import { pipeline } from "@xenova/transformers";

async function main() {
  try {
    const pipe = await pipeline(
      "sentiment-analysis",
      "Xenova/distilbert-base-uncased-finetuned-sst-2-english"
    );
    const out = await pipe("I love transformers!");
    console.log(out);
  } catch (error) {
    console.error("Error:", error);
  }

  try {
    const generator = await pipeline("text-generation", "Xenova/gpt2");

    const prompt = "What is Artificial Intelligence?";

    console.log("Generating text...\n");

    const result = await generator(prompt, {
      max_length: 1000,
      num_return_sequences: 1,
      temperature: 0.7,
    });

    console.log(`Prompt: "${prompt}"`);
    console.log(`Generated: ${result[0].generated_text}\n`);
  } catch (error) {
    console.error("Error:", error);
  }
}
main();
