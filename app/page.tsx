export default async function Home() {
  // 仕様書の形式を模した最小限のデータ
  const buildings = [
    { id: "1", name: "図書館", marker_count: 3 },
    { id: "2", name: "食堂", marker_count: 2 },
  ];

  return (
    <div>
      <h1>キャンパス Web AR</h1>
      
      <div>
        <h2>ARカメラエリア</h2>
        <p>※ここにカメラ映像が入ります</p>
      </div>

      <div>
        <h2>建物一覧</h2>
        <ul>
          {buildings.map((b) => (
            <li key={b.id}>
              {b.name}（マーカー: {b.marker_count}個）
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}