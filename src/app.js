import { pipeline } from '@xenova/transformers';

async function main() {
    const pipe = await pipeline("sentiment-analysis", "Xenova/distilbert-base-uncased-finetuned-sst-2-english");
    const out = await pipe("I love transformers!");
    console.log(out);
}
main();