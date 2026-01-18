"use client";

import { useState } from "react";

export default function BMICalculator(){
  const [height,setHeight] = useState("");
  const [weight,setWeight] = useState("");
  const [bmi,setBmi] = useState(null);

  const keisanBmi = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if(h>0 && w>0){
      const hm = h/100;
      const result = w/(hm*hm);
      setBmi(result.toFixed(1));
    }else{
      alert("身長と体重を正しく入力して下さい");
    }
  }

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
          <label>
            <span className="text-sm font-semibold">身長（cm）</span>
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
            <span className="text-sm font-semibold">体重（kg）</span>
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
      {bmi && (
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500">計算結果</p>
          <p className="text-4xl font-black text-blue-500">{bmi}</p>
        </div>
      )}
      </div>
    </div>
  )
}