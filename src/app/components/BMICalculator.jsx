"use client";

import { useState } from "react";

export default function BMICalculator(){
  const [height,setHeight] = useState("");
  const [weight,setWeight] = useState("");
  const [bmi,setBmi] = useState(null);

  const [message,setMessage] = useState("");
  const [color,setColor] = useState("text-blue-500");

  const keisanBmi = () => {
    const h = parseFloat(height);//計算できるようにする
    const w = parseFloat(weight);
    if(h>0 && w>0){ //それぞれの値が０以上なら
      const hm = h/100;
      const result = w/(hm*hm);
      setBmi(result.toFixed(1));//小数点第一位まで文字列（String）に変換する
      
      // ここからがBMIのメッセージ
      if (result < 18.5) {
        setMessage("低体重（痩せ型）");
        setColor("text-yellow-500");
      } else if (result >= 18.5 && result < 25) {
        setMessage("普通体重");
        setColor("text-green-500");
      } else if (result >= 25 && result < 30) {
        setMessage("肥満（1度）");
        setColor("text-orange-500");
      } else {
        setMessage("肥満（2度以上）");
        setColor("text-red-500");
      }

    }else{
      alert("身長と体重を正しく入力して下さい");
    }
  };
  

  const handleKeyDown = (e) => {
    if(e.key === "Enter"){
      keisanBmi();
    }
  };

  return(
    <div className="flex flex-col items-center bg-slate-50 p-4 text-black">
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
        <h1 className="text-xl font-bold mb-6 text-center">BMI計算</h1>
        <div className="flex flex-col gap-4">
          <label>{/* 入力項目（フォーム）と、その説明テキストをひも付ける */}
            <span className="font-semibold">身長（cm）</span>
            <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="160"
            onKeyDown={handleKeyDown}
            className="w-full p-3 bg-slate-100 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <label>
            <span className="font-semibold">体重（kg）</span>
            <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="50"
            onKeyDown={handleKeyDown}
            className="w-full p-3 bg-slate-100 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <button className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-700" onClick={keisanBmi}>
            計算する
          </button>
        </div>
         {/* BMIが計算されたら表示 */}
      {bmi && ( 
        <div className="mt-8 text-center">
          <p className="text-slate-500">計算結果</p>
          <p className={`text-5xl font-black ${color}`}>{bmi}</p>
          <p className={`mt-2 font-bold ${color}`}>{message}</p>
        </div>
      )}
      </div>
    </div>
  )
}