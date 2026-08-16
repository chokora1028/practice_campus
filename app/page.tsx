import React from "react";

// バックエンドから届く予定の「仮の固定データ」
const mockBuildings = [
  { id: 1, name: "1号館（本部棟）", congestion: "空きあり", congestionLevel: "low" },
  { id: 2, name: "中央食堂", congestion: "やや混雑（70%）", congestionLevel: "medium" },
  { id: 3, name: "図書館・自習室", congestion: "満席に近い（90%）", congestionLevel: "high" },
];

const mockUserVisit = {
  currentSpot: "中央食堂 前マーカー",
  stampsCount: 2,
  totalStamps: 5,
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col p-4 max-w-md mx-auto relative font-sans">
      
      {/* 1. ヘッダー部分 */}
      <header className="py-2 border-b border-slate-700 flex justify-between items-center">
        <h1 className="text-lg font-bold text-emerald-400">キャンパス Web AR</h1>
        <span className="text-xs bg-slate-800 px-2 py-1 rounded border border-slate-600">
          📍 {mockUserVisit.currentSpot}
        </span>
      </header>

      {/* 2. ARカメラの描画エリア（仮のプレースホルダー） */}
      <section className="my-4 flex-1 min-h-[280px] bg-slate-950 border-2 border-dashed border-slate-700 rounded-2xl flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
        {/* カメラ枠の中の3Dオブジェクト（仮の四角形） */}
        <div className="w-20 h-20 bg-emerald-500/20 border-2 border-emerald-400 rounded-lg animate-pulse flex items-center justify-center mb-3">
          <span className="text-xs text-emerald-300 font-bold">3D Object</span>
        </div>
        <p className="text-sm font-semibold text-slate-300">AR カメラビュー</p>
        <p className="text-xs text-slate-500 mt-1">※ここに実際の3D空間やカメラ映像が描画されます</p>
      </section>

      {/* 3. リアルタイム混雑状況（APIデータ表示エリア） */}
      <section className="bg-slate-800 p-4 rounded-xl mb-4 border border-slate-700">
        <h2 className="text-sm font-bold text-slate-200 mb-3 flex items-center gap-1">
          📊 リアルタイム混雑状況
        </h2>
        <div className="space-y-2">
          {mockBuildings.map((building) => (
            <div key={building.id} className="flex justify-between items-center bg-slate-900/60 p-2 rounded text-xs">
              <span className="font-medium text-slate-200">{building.name}</span>
              <span className={`px-2 py-0.5 rounded font-bold ${
                building.congestionLevel === 'low' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' :
                building.congestionLevel === 'medium' ? 'bg-amber-950 text-amber-400 border border-amber-800' :
                'bg-rose-950 text-rose-400 border border-rose-800'
              }`}>
                {building.congestion}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 4. スタンプラリー・避難誘導のUIフッター */}
      <footer className="grid grid-cols-2 gap-3 mt-auto pt-2">
        <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 text-center">
          <p className="text-xs text-slate-400">スタンプラリー</p>
          <p className="text-base font-bold text-emerald-400 mt-0.5">
            {mockUserVisit.stampsCount} / {mockUserVisit.totalStamps} 個
          </p>
        </div>
        <button className="bg-rose-600 hover:bg-rose-700 active:scale-95 text-white font-bold rounded-xl flex flex-col items-center justify-center transition-all p-2">
          <span className="text-xs">緊急時誘導</span>
          <span className="text-sm">避難ルート表示</span>
        </button>
      </footer>

    </main>
  );
}