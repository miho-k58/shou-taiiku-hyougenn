import { useState, useEffect } from "react";

const UNIT = {
  title: "音楽に合わせて体を動かそう！～表現遊び～",
  grade: "特別支援学校 中学部 1段階",
  subject: "保健体育",
  periods: 4,
  minutesPerPeriod: 45,
  basis: "特別支援学校小学部・中学部学習指導要領（平成29年告示）知的障害 中学部 保健体育 1段階 内容(2) 表現遊び",
  goals: [
    {
      key: "知識・技能",
      icon: "🏃",
      color: "#2563eb",
      bg: "#eff6ff",
      text: "音楽に合わせて、歩く・ツーステップ・スキップ・両足ジャンプ・片足ジャンプ・ジグザグに走るなどの基本的な動きを、教師と一緒に楽しく行うことができる。"
    },
    {
      key: "思考・判断・表現",
      icon: "💭",
      color: "#7c3aed",
      bg: "#f5f3ff",
      text: "音楽のリズムに気付き、体の動かし方を選んだり、友達の動きを見て自分の動きに生かしたりすることができる。"
    },
    {
      key: "主体的に学習に取り組む態度",
      icon: "⭐",
      color: "#d97706",
      bg: "#fffbeb",
      text: "音楽や友達と一緒に体を動かす楽しさを感じながら、安全に気を付けて積極的に運動に取り組もうとしている。"
    }
  ],
  lessons: [
    {
      no: 1,
      title: "音楽に合わせて体を動かしてみよう",
      goal: "教師と一緒に、音楽に合わせて整列・集合・歩くことができる。",
      focus: "知識・技能",
      activities: [
        { time: "5分", phase: "準備運動", content: "「はじめのあいさつ」→ 名前を呼ばれたら手を挙げる（整列・集合の確認）", music: "明るいマーチ系BGM" },
        { time: "10分", phase: "導入", content: "音楽を聴いて体を動かす楽しさを知る。教師が見本を見せながら「♪ピタッ！」の合図で止まる活動", music: "テンポの速いポップス" },
        { time: "20分", phase: "主活動", content: "①整列・集合（音楽スタート/ストップに合わせて）②音楽に合わせてゆっくり歩く③音楽に合わせて速く歩く④方向転換しながら歩く", music: "「さんぽ」等の親しみやすい曲" },
        { time: "7分", phase: "まとめ", content: "今日できたことをルーブリックカードで自己評価。頑張ったことを発表する", music: "落ち着いたBGM" },
        { time: "3分", phase: "振り返り・整理運動", content: "「おわりのあいさつ」整理運動・次回の予告", music: "－" }
      ],
      rubric: [
        { level: "◎ よくできた", color: "#22c55e", criteria: "音楽が始まったら自分から歩き始め、止まる合図でピタッと止まれた。整列・集合が自分でできた。" },
        { level: "○ できた", color: "#3b82f6", criteria: "教師の声かけや手つなぎのサポートがあれば、音楽に合わせて歩くことができた。" },
        { level: "△ もう少し", color: "#f59e0b", criteria: "教師と一緒に活動に参加した。次回も挑戦しよう！" }
      ]
    },
    {
      no: 2,
      title: "リズムに乗って！ツーステップ＆スキップ",
      goal: "音楽のリズムに合わせて、ツーステップやスキップができる。",
      focus: "知識・技能",
      activities: [
        { time: "5分", phase: "準備運動", content: "前回の復習（整列・集合・歩く）。「先生と同じ動きをしよう」ゲーム", music: "マーチ系BGM" },
        { time: "10分", phase: "導入", content: "ツーステップの動き方を確認。「トン・トン・トン」のリズムで手拍子→足踏み→実際に動く", music: "2拍子の明るい曲" },
        { time: "20分", phase: "主活動", content: "①ツーステップ（まっすぐ進む）②スキップの基本（その場で）③スキップしながら前進④ツーステップ→スキップの組み合わせ", music: "「ハッピーチルドレン」等リズムが分かりやすい曲" },
        { time: "7分", phase: "まとめ", content: "ルーブリックカードで自己評価。「今日できたこと」を絵や言葉で記録", music: "落ち着いたBGM" },
        { time: "3分", phase: "振り返り・整理運動", content: "整理運動・次回の予告（ジャンプ！）", music: "－" }
      ],
      rubric: [
        { level: "◎ よくできた", color: "#22c55e", criteria: "音楽に合わせてツーステップとスキップが自分でできた。リズムに乗って楽しく動けた！" },
        { level: "○ できた", color: "#3b82f6", criteria: "教師や友達の動きを見ながら、ツーステップかスキップのどちらかができた。" },
        { level: "△ もう少し", color: "#f59e0b", criteria: "教師と手をつないで一緒に動くことができた。次回も挑戦しよう！" }
      ]
    },
    {
      no: 3,
      title: "ジャンプしよう！両足・片足",
      goal: "音楽に合わせて、両足ジャンプと片足ジャンプができる。",
      focus: "知識・技能",
      activities: [
        { time: "5分", phase: "準備運動", content: "前回の復習（スキップ）。体をほぐすストレッチ", music: "明るいBGM" },
        { time: "10分", phase: "導入", content: "「ジャンプってどんな動き？」 → 両足で小さくジャンプ体験。音楽の「ドン！」の音に合わせてジャンプ", music: "ビートのある曲" },
        { time: "20分", phase: "主活動", content: "①両足でその場ジャンプ（音楽に合わせて）②両足で前へジャンプ（フープや線を目印に）③片足ジャンプ（右足）④片足ジャンプ（左足）⑤両足→片足交互ジャンプ", music: "「ジングルベル」等ジャンプしやすい曲" },
        { time: "7分", phase: "まとめ", content: "ルーブリックカードで自己評価。「何回ジャンプできたか」をシールで記録", music: "落ち着いたBGM" },
        { time: "3分", phase: "振り返り・整理運動", content: "整理運動。次回（まとめ）の予告", music: "－" }
      ],
      rubric: [
        { level: "◎ よくできた", color: "#22c55e", criteria: "音楽に合わせて両足ジャンプと片足ジャンプの両方が自分でできた！" },
        { level: "○ できた", color: "#3b82f6", criteria: "教師の声かけで両足ジャンプか片足ジャンプのどちらかができた。" },
        { level: "△ もう少し", color: "#f59e0b", criteria: "教師と一緒にジャンプの動きに挑戦した。次回もやってみよう！" }
      ]
    },
    {
      no: 4,
      title: "全部つなげよう！リズム表現発表会",
      goal: "学習した動き（歩く・スキップ・ジャンプ・ジグザグ走）を音楽に合わせてつなげて表現できる。",
      focus: "主体的に学習に取り組む態度",
      activities: [
        { time: "5分", phase: "準備運動", content: "これまでの動きを全部確認（ウォーミングアップ）", music: "マーチ系BGM" },
        { time: "8分", phase: "導入・練習", content: "「今日は全部つなげよう！」コース設定：歩く→スキップ→両足ジャンプ→片足ジャンプ→ジグザグ走", music: "テンポの速い曲" },
        { time: "22分", phase: "主活動（発表会）", content: "①全体でコースを通して練習②グループ（ペア）で発表③友達の動きを見て良いところを伝える④全員で最後の通し（音楽に合わせて）", music: "「勇気100%」等発表にふさわしい明るい曲" },
        { time: "7分", phase: "まとめ・振り返り", content: "ルーブリックカードで自己評価。単元全体の振り返りシール貼り。友達へのメッセージカード記入", music: "落ち着いたBGM" },
        { time: "3分", phase: "修了式", content: "「がんばったで賞」カードの授与。次の学習への期待を伝える", music: "－" }
      ],
      rubric: [
        { level: "◎ よくできた", color: "#22c55e", criteria: "音楽に合わせて全ての動きを自分でつなげて表現できた。友達の発表も見て応援できた！" },
        { level: "○ できた", color: "#3b82f6", criteria: "教師や友達と一緒に、コースの動きを最後まで行うことができた。" },
        { level: "△ もう少し", color: "#f59e0b", criteria: "いくつかの動きに挑戦することができた。4時間よく頑張りました！" }
      ]
    }
  ]
};

const STUDENTS_KEY = "tokushi_students_v1";
const RECORDS_KEY = "tokushi_records_v1";

const defaultStudents = ["生徒①", "生徒②", "生徒③", "生徒④", "生徒⑤"];

const EVAL_OPTIONS = ["◎", "○", "△", "－"];
const EVAL_COLORS = { "◎": "#22c55e", "○": "#3b82f6", "△": "#f59e0b", "－": "#9ca3af" };

export default function App() {
  const [tab, setTab] = useState("plan");
  const [students, setStudents] = useState(defaultStudents);
  const [records, setRecords] = useState({});
  const [selectedLesson, setSelectedLesson] = useState(1);
  const [editingStudent, setEditingStudent] = useState(null);
  const [newStudentName, setNewStudentName] = useState("");
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [memo, setMemo] = useState({});

  // Load from storage
  useEffect(() => {
    try {
      window.storage && window.storage.get(STUDENTS_KEY).then(r => {
        if (r) setStudents(JSON.parse(r.value));
      }).catch(() => {});
      window.storage && window.storage.get(RECORDS_KEY).then(r => {
        if (r) setRecords(JSON.parse(r.value));
      }).catch(() => {});
    } catch (e) {}
  }, []);

  const save = (newStudents, newRecords) => {
    try {
      window.storage && window.storage.set(STUDENTS_KEY, JSON.stringify(newStudents || students)).catch(() => {});
      window.storage && window.storage.set(RECORDS_KEY, JSON.stringify(newRecords || records)).catch(() => {});
    } catch (e) {}
  };

  const setEval = (student, lesson, obs, evalKey, val) => {
    const key = `${student}_L${lesson}_${obs}`;
    const newR = { ...records, [key]: { ...(records[key] || {}), [evalKey]: val } };
    setRecords(newR);
    save(null, newR);
  };
  const getEval = (student, lesson, obs, evalKey) => {
    const key = `${student}_L${lesson}_${obs}`;
    return records[key]?.[evalKey] || "";
  };
  const setMemoVal = (student, lesson, val) => {
    const key = `memo_${student}_L${lesson}`;
    const newR = { ...records, [key]: val };
    setRecords(newR);
    save(null, newR);
  };
  const getMemoVal = (student, lesson) => records[`memo_${student}_L${lesson}`] || "";

  const lesson = UNIT.lessons[selectedLesson - 1];

  const tabs = [
    { id: "plan", label: "📋 学習指導案" },
    { id: "rubric", label: "📊 ルーブリック" },
    { id: "eval", label: "✏️ 評価記録" },
    { id: "summary", label: "📈 評価一覧" },
  ];

  return (
    <div style={{ fontFamily: "'Hiragino Kaku Gothic Pro', 'Meiryo', sans-serif", background: "#f0f4ff", minHeight: "100vh", padding: "0 0 40px" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #1e40af, #7c3aed)", color: "#fff", padding: "20px 24px 16px" }}>
        <div style={{ fontSize: 11, opacity: 0.8, marginBottom: 4 }}>{UNIT.grade} ／ {UNIT.subject}</div>
        <div style={{ fontSize: 18, fontWeight: "bold", lineHeight: 1.3 }}>🎵 {UNIT.title}</div>
        <div style={{ fontSize: 11, opacity: 0.75, marginTop: 4 }}>全{UNIT.periods}時間・1時間{UNIT.minutesPerPeriod}分</div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", background: "#1e3a8a", padding: "0 8px", overflowX: "auto" }}>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            padding: "10px 14px", border: "none", cursor: "pointer", fontSize: 12, fontWeight: "bold", whiteSpace: "nowrap",
            background: tab === t.id ? "#fff" : "transparent",
            color: tab === t.id ? "#1e40af" : "#93c5fd",
            borderRadius: tab === t.id ? "8px 8px 0 0" : "0",
            transition: "all 0.2s"
          }}>{t.label}</button>
        ))}
      </div>

      <div style={{ padding: "16px", maxWidth: 900, margin: "0 auto" }}>

        {/* ===== 学習指導案 ===== */}
        {tab === "plan" && (
          <div>
            {/* 単元目標 */}
            <div style={{ background: "#fff", borderRadius: 12, padding: 16, marginBottom: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
              <div style={{ fontSize: 14, fontWeight: "bold", color: "#1e40af", marginBottom: 12, borderBottom: "2px solid #bfdbfe", paddingBottom: 8 }}>
                📌 単元目標（3観点）
              </div>
              <div style={{ fontSize: 10, color: "#64748b", marginBottom: 10 }}>根拠：{UNIT.basis}</div>
              {UNIT.goals.map(g => (
                <div key={g.key} style={{ background: g.bg, border: `2px solid ${g.color}20`, borderLeft: `4px solid ${g.color}`, borderRadius: 8, padding: "10px 12px", marginBottom: 10 }}>
                  <div style={{ fontSize: 12, fontWeight: "bold", color: g.color, marginBottom: 4 }}>{g.icon} {g.key}</div>
                  <div style={{ fontSize: 13, color: "#374151", lineHeight: 1.6 }}>{g.text}</div>
                </div>
              ))}
            </div>

            {/* 時間選択 */}
            <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
              {UNIT.lessons.map(l => (
                <button key={l.no} onClick={() => setSelectedLesson(l.no)} style={{
                  padding: "8px 16px", borderRadius: 20, border: "none", cursor: "pointer", fontSize: 12, fontWeight: "bold",
                  background: selectedLesson === l.no ? "#1e40af" : "#e0e7ff",
                  color: selectedLesson === l.no ? "#fff" : "#3730a3"
                }}>第{l.no}時</button>
              ))}
            </div>

            {/* 選択した時間の詳細 */}
            <div style={{ background: "#fff", borderRadius: 12, padding: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                <span style={{ background: "#1e40af", color: "#fff", borderRadius: 20, padding: "2px 12px", fontSize: 12, fontWeight: "bold" }}>第{lesson.no}時</span>
                <span style={{ fontSize: 14, fontWeight: "bold", color: "#1e3a8a" }}>{lesson.title}</span>
              </div>
              <div style={{ fontSize: 12, color: "#6366f1", marginBottom: 12, padding: "4px 10px", background: "#eef2ff", borderRadius: 6, display: "inline-block" }}>
                🎯 本時の目標：{lesson.goal}
              </div>
              <div style={{ fontSize: 11, color: "#fff", background: UNIT.goals.find(g => g.key === lesson.focus)?.color, borderRadius: 20, padding: "2px 10px", display: "inline-block", marginBottom: 12, marginLeft: 8 }}>
                重点観点：{lesson.focus}
              </div>

              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                <thead>
                  <tr style={{ background: "#eff6ff" }}>
                    {["時間", "段階", "活動内容", "使用音楽"].map(h => (
                      <th key={h} style={{ padding: "8px 6px", textAlign: "left", borderBottom: "2px solid #bfdbfe", color: "#1e40af", fontWeight: "bold", fontSize: 11 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {lesson.activities.map((a, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #e0e7ff", background: i % 2 === 0 ? "#fff" : "#f8faff" }}>
                      <td style={{ padding: "8px 6px", whiteSpace: "nowrap", fontWeight: "bold", color: "#6366f1" }}>{a.time}</td>
                      <td style={{ padding: "8px 6px", whiteSpace: "nowrap" }}>
                        <span style={{ background: "#6366f1", color: "#fff", borderRadius: 4, padding: "2px 6px", fontSize: 10 }}>{a.phase}</span>
                      </td>
                      <td style={{ padding: "8px 6px", lineHeight: 1.5 }}>{a.content}</td>
                      <td style={{ padding: "8px 6px", color: "#7c3aed", fontSize: 11 }}>🎵 {a.music}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ===== ルーブリック ===== */}
        {tab === "rubric" && (
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
              {UNIT.lessons.map(l => (
                <button key={l.no} onClick={() => setSelectedLesson(l.no)} style={{
                  padding: "8px 16px", borderRadius: 20, border: "none", cursor: "pointer", fontSize: 12, fontWeight: "bold",
                  background: selectedLesson === l.no ? "#1e40af" : "#e0e7ff",
                  color: selectedLesson === l.no ? "#fff" : "#3730a3"
                }}>第{l.no}時</button>
              ))}
            </div>

            <div style={{ background: "#fff", borderRadius: 12, padding: 16, boxShadow: "0 2px 8px rgba(0,0,0,0.08)", marginBottom: 16 }}>
              <div style={{ fontSize: 14, fontWeight: "bold", color: "#1e40af", marginBottom: 12, borderBottom: "2px solid #bfdbfe", paddingBottom: 8 }}>
                📊 第{lesson.no}時 ルーブリック ―「{lesson.title}」
              </div>

              {/* 子どもが使う自己評価カード */}
              <div style={{ background: "#fef9c3", border: "2px dashed #fbbf24", borderRadius: 10, padding: 14, marginBottom: 16 }}>
                <div style={{ fontSize: 13, fontWeight: "bold", color: "#92400e", marginBottom: 8 }}>🌟 じぶんでひょうか しよう！（子ども用カード）</div>
                <div style={{ fontSize: 12, color: "#78350f", marginBottom: 10 }}>きょうのじゅぎょう、どうだったかな？</div>
                {lesson.rubric.map((r, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 8, padding: "10px 12px", background: "#fff", borderRadius: 8, border: `2px solid ${r.color}40` }}>
                    <span style={{ fontSize: 22, minWidth: 36, textAlign: "center", background: r.color + "20", borderRadius: 8, padding: "4px 6px", border: `2px solid ${r.color}` }}>
                      {r.level.split(" ")[0]}
                    </span>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: "bold", color: r.color }}>{r.level}</div>
                      <div style={{ fontSize: 12, color: "#374151", lineHeight: 1.5 }}>{r.criteria}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 教師用評価規準 */}
              <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 10, padding: 14 }}>
                <div style={{ fontSize: 12, fontWeight: "bold", color: "#166534", marginBottom: 8 }}>👩‍🏫 教師用 評価規準（3観点）</div>
                {UNIT.goals.map(g => (
                  <div key={g.key} style={{ background: g.bg, borderLeft: `4px solid ${g.color}`, borderRadius: 6, padding: "8px 12px", marginBottom: 8 }}>
                    <div style={{ fontSize: 11, fontWeight: "bold", color: g.color }}>{g.icon} {g.key}</div>
                    <div style={{ fontSize: 11, color: "#374151", marginTop: 2 }}>
                      ◎…{lesson.rubric[0].criteria.substring(0, 30)}…　○…{lesson.rubric[1].criteria.substring(0, 30)}…　△…活動に参加することができた
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===== 評価記録 ===== */}
        {tab === "eval" && (
          <div>
            {/* 時間選択 */}
            <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap", alignItems: "center" }}>
              {UNIT.lessons.map(l => (
                <button key={l.no} onClick={() => setSelectedLesson(l.no)} style={{
                  padding: "8px 16px", borderRadius: 20, border: "none", cursor: "pointer", fontSize: 12, fontWeight: "bold",
                  background: selectedLesson === l.no ? "#1e40af" : "#e0e7ff",
                  color: selectedLesson === l.no ? "#fff" : "#3730a3"
                }}>第{l.no}時</button>
              ))}
              <button onClick={() => setShowAddStudent(!showAddStudent)} style={{ marginLeft: "auto", padding: "6px 12px", borderRadius: 20, border: "none", cursor: "pointer", fontSize: 11, fontWeight: "bold", background: "#f0fdf4", color: "#166534" }}>
                ＋ 生徒追加
              </button>
            </div>

            {showAddStudent && (
              <div style={{ background: "#fff", borderRadius: 10, padding: 12, marginBottom: 12, display: "flex", gap: 8, alignItems: "center" }}>
                <input value={newStudentName} onChange={e => setNewStudentName(e.target.value)}
                  placeholder="生徒名を入力" style={{ flex: 1, padding: "8px 12px", borderRadius: 8, border: "1px solid #d1d5db", fontSize: 13 }} />
                <button onClick={() => {
                  if (newStudentName.trim()) {
                    const ns = [...students, newStudentName.trim()];
                    setStudents(ns); save(ns, null); setNewStudentName(""); setShowAddStudent(false);
                  }
                }} style={{ padding: "8px 16px", borderRadius: 8, border: "none", cursor: "pointer", background: "#1e40af", color: "#fff", fontSize: 13 }}>追加</button>
              </div>
            )}

            <div style={{ fontSize: 13, fontWeight: "bold", color: "#1e3a8a", marginBottom: 8 }}>
              📝 第{selectedLesson}時「{lesson.title}」評価記録
            </div>

            {students.map((student, si) => (
              <div key={si} style={{ background: "#fff", borderRadius: 12, padding: 14, marginBottom: 12, boxShadow: "0 2px 6px rgba(0,0,0,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <span style={{ fontSize: 18 }}>👤</span>
                  <span style={{ fontWeight: "bold", fontSize: 14, color: "#1e3a8a" }}>{student}</span>
                  <button onClick={() => {
                    if (window.confirm(`「${student}」を削除しますか？`)) {
                      const ns = students.filter((_, i) => i !== si);
                      setStudents(ns); save(ns, null);
                    }
                  }} style={{ marginLeft: "auto", padding: "2px 8px", borderRadius: 6, border: "1px solid #fca5a5", background: "#fef2f2", color: "#dc2626", fontSize: 10, cursor: "pointer" }}>削除</button>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginBottom: 10 }}>
                  {UNIT.goals.map(g => (
                    <div key={g.key} style={{ background: g.bg, border: `1px solid ${g.color}30`, borderRadius: 8, padding: 8 }}>
                      <div style={{ fontSize: 10, fontWeight: "bold", color: g.color, marginBottom: 6 }}>{g.icon} {g.key}</div>
                      <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                        {EVAL_OPTIONS.map(opt => {
                          const cur = getEval(student, selectedLesson, "obs", g.key);
                          return (
                            <button key={opt} onClick={() => setEval(student, selectedLesson, "obs", g.key, opt)} style={{
                              width: 32, height: 32, borderRadius: 8, border: "none", cursor: "pointer", fontSize: 14, fontWeight: "bold",
                              background: cur === opt ? EVAL_COLORS[opt] : "#f3f4f6",
                              color: cur === opt ? "#fff" : "#9ca3af",
                              transition: "all 0.15s"
                            }}>{opt}</button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 子ども自己評価 */}
                <div style={{ background: "#fef9c3", borderRadius: 8, padding: 8, marginBottom: 8 }}>
                  <div style={{ fontSize: 10, fontWeight: "bold", color: "#92400e", marginBottom: 6 }}>🌟 子ども自己評価</div>
                  <div style={{ display: "flex", gap: 6 }}>
                    {lesson.rubric.map((r, i) => {
                      const cur = getEval(student, selectedLesson, "self", "level");
                      return (
                        <button key={i} onClick={() => setEval(student, selectedLesson, "self", "level", r.level.split(" ")[0])} style={{
                          padding: "4px 12px", borderRadius: 20, border: "none", cursor: "pointer", fontSize: 13, fontWeight: "bold",
                          background: cur === r.level.split(" ")[0] ? r.color : "#f3f4f6",
                          color: cur === r.level.split(" ")[0] ? "#fff" : "#9ca3af",
                        }}>{r.level.split(" ")[0]}</button>
                      );
                    })}
                  </div>
                </div>

                {/* メモ欄 */}
                <textarea
                  placeholder="メモ・気付き・支援内容など..."
                  value={getMemoVal(student, selectedLesson)}
                  onChange={e => setMemoVal(student, selectedLesson, e.target.value)}
                  style={{ width: "100%", minHeight: 50, padding: "8px 10px", borderRadius: 8, border: "1px solid #e0e7ff", fontSize: 12, resize: "vertical", boxSizing: "border-box", color: "#374151" }}
                />
              </div>
            ))}
          </div>
        )}

        {/* ===== 評価一覧 ===== */}
        {tab === "summary" && (
          <div>
            <div style={{ fontSize: 14, fontWeight: "bold", color: "#1e3a8a", marginBottom: 12 }}>📈 評価一覧表（全{UNIT.periods}時間）</div>
            <div style={{ overflowX: "auto" }}>
              <table style={{ borderCollapse: "collapse", fontSize: 11, width: "100%", background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
                <thead>
                  <tr style={{ background: "#1e40af", color: "#fff" }}>
                    <th style={{ padding: "10px 8px", textAlign: "left", minWidth: 70 }}>生徒名</th>
                    {UNIT.lessons.map(l => (
                      UNIT.goals.map(g => (
                        <th key={`${l.no}-${g.key}`} style={{ padding: "6px 4px", textAlign: "center", minWidth: 40 }}>
                          <div style={{ fontSize: 10 }}>第{l.no}時</div>
                          <div style={{ fontSize: 9, opacity: 0.85 }}>{g.key.slice(0, 4)}</div>
                        </th>
                      ))
                    ))}
                    <th style={{ padding: "10px 8px", textAlign: "center", minWidth: 40 }}>備考</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, si) => (
                    <tr key={si} style={{ borderBottom: "1px solid #e0e7ff", background: si % 2 === 0 ? "#fff" : "#f8faff" }}>
                      <td style={{ padding: "8px 8px", fontWeight: "bold", color: "#1e3a8a" }}>{student}</td>
                      {UNIT.lessons.map(l =>
                        UNIT.goals.map(g => {
                          const val = getEval(student, l.no, "obs", g.key);
                          return (
                            <td key={`${l.no}-${g.key}`} style={{ padding: "6px 4px", textAlign: "center" }}>
                              {val ? (
                                <span style={{
                                  display: "inline-block", width: 28, height: 28, lineHeight: "28px", borderRadius: 8,
                                  background: EVAL_COLORS[val] || "#f3f4f6",
                                  color: "#fff", fontWeight: "bold", fontSize: 13
                                }}>{val}</span>
                              ) : (
                                <span style={{ color: "#d1d5db", fontSize: 11 }}>－</span>
                              )}
                            </td>
                          );
                        })
                      )}
                      <td style={{ padding: "6px 8px", fontSize: 10, color: "#6b7280", maxWidth: 100 }}>
                        {UNIT.lessons.map(l => getMemoVal(student, l.no)).filter(Boolean).join(" / ").slice(0, 30) || "－"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 凡例 */}
            <div style={{ background: "#fff", borderRadius: 10, padding: 12, marginTop: 12 }}>
              <div style={{ fontSize: 11, fontWeight: "bold", color: "#374151", marginBottom: 8 }}>評価の凡例</div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                {Object.entries(EVAL_COLORS).map(([k, v]) => (
                  <div key={k} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ width: 24, height: 24, background: v, borderRadius: 6, display: "inline-block", textAlign: "center", color: "#fff", fontWeight: "bold", lineHeight: "24px", fontSize: 12 }}>{k}</span>
                    <span style={{ fontSize: 11, color: "#374151" }}>{k === "◎" ? "十分満足できる" : k === "○" ? "概ね満足できる" : k === "△" ? "努力を要する" : "未評価"}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 10, fontSize: 10, color: "#6b7280" }}>
                ※ 観点略：知技＝知識・技能　思判＝思考・判断・表現　主体＝主体的に学習に取り組む態度
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
