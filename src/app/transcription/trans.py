import whisper

# モデルのロード
model = whisper.load_model("base")

input_file = r"src\app\transcription\sample.mp3"
output_file = r"src\app\transcription\text.txt"

# 音声ファイルをテキストに変換
result = model.transcribe(input_file,verbose=True, language='ja')

# 結果の表示
print(result["text"])
with open(output_file, "w",encoding="utf_8") as f:
    f.write(result["text"])
print("終わり")