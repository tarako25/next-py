"use client"

export default function Home() {
  const transcription = async() => {
    console.log("はじめ")
    const response = await fetch('/api/python');
    console.log("終わり")
  }
  return (
    <div className="flex justify-center items-center w-full flex-col">
      <p className="p-10 text-2xl bold mb-10">PythonApp</p>
      <input type="button"
        value="文字おこし開始"
        className="border-2 border-gray p-3 cursor-pointer"
        onClick={transcription}
        />
    </div>
  );
}
