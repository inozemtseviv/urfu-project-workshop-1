from transformers import MBartTokenizer, MBartForConditionalGeneration


class SummarizerService:
    def __init__(self):
        model_name = "IlyaGusev/mbart_ru_sum_gazeta"
        self.tokenizer = MBartTokenizer.from_pretrained(model_name)
        self.model = MBartForConditionalGeneration.from_pretrained(model_name)

    def summarize(self, text):
        input_ids = self.tokenizer(
            [text],
            max_length=600,
            padding="max_length",
            truncation=True,
            return_tensors="pt",
        )["input_ids"]

        output_ids = self.model.generate(
            input_ids=input_ids,
            no_repeat_ngram_size=4
        )[0]

        summary = self.tokenizer.decode(output_ids, skip_special_tokens=True)
        return summary
