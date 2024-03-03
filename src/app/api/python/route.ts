import { NextRequest, NextResponse } from "next/server";
import { exec } from 'child_process';

export async function GET(req: Request, res: NextResponse) {
    try {
        console.log("文字おこしを開始します")
        exec('python src/app/transcription/trans.py', () => {
            console.log("文字おこしが完了しました")
            console.log("文章の翻訳を開始します")
        })
        return NextResponse.json(
            { message: "Success" },
            { status: 200 },
            );
    } catch (err) {
        console.log("no")
        return NextResponse.json({ err, message: "Error" }, { status: 500 });
    } 
}