// Original illustrations of the kind of interfaces built for each project.
// They use invented sample data, not real client screens.

const W = 640;
const H = 440;

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <svg
      className="mock"
      viewBox={`0 0 ${W} ${H}`}
      role="img"
      aria-label={label}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={W} height={H} rx="18" className="m-bg" />
      {children}
    </svg>
  );
}

function Card(props: { x: number; y: number; w: number; h: number }) {
  return <rect {...props} width={props.w} height={props.h} rx="12" className="m-card" />;
}

function AdminShell({ brand, menu, id }: { brand: string; menu: string[]; id: string }) {
  return (
    <>
      <defs>
        <clipPath id={`${id}-clip`}>
          <rect x={28} y={28} width={584} height={384} rx={14} />
        </clipPath>
      </defs>
      <rect x={28} y={28} width={584} height={384} className="f-page" />
      <rect x={28} y={28} width={112} height={384} className="f-side" />
      <text x={42} y={60} className="f-side-brand">{brand}</text>
      {menu.map((m, i) => (
        <g key={m} transform={`translate(40 ${88 + i * 26})`}>
          <rect width={8} height={8} rx={2} className={i === 0 ? "f-side-on" : "f-side-icon"} y={-7} />
          <text x={15} y={0} className={i === 0 ? "f-side-text f-side-active" : "f-side-text"}>{m}</text>
        </g>
      ))}
      <rect x={140} y={28} width={472} height={30} className="f-top" />
      <rect x={152} y={39} width={12} height={2} className="f-bars" />
      <rect x={152} y={43} width={12} height={2} className="f-bars" />
      <rect x={152} y={47} width={12} height={2} className="f-bars" />
      <circle cx={566} cy={43} r={7} className="m-soft" />
      <text x={578} y={47} className="f-xs">Admin</text>
      <text x={152} y={78} className="f-h">DASHBOARD</text>
    </>
  );
}

export function CountMock() {
  const stats = [
    ["People in", "12,480"],
    ["People out", "11,926"],
    ["Occupancy", "554"],
    ["Busiest day", "Friday"],
    ["Busiest hour", "7–8 PM"],
  ];
  const bars = [32, 40, 36, 48, 56, 64, 92];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const line = [8, 10, 14, 22, 30, 38, 44, 50, 58, 66, 74, 70, 60, 46];
  const linePts = line.map((v, i) => `${394 + i * 15.2},${252 - v * 1.15}`).join(" ");
  const zones = ["Entrance A", "Entrance B", "Food court", "Parking"];
  const matrix = [
    [120, 340, 410, 380],
    [90, 260, 300, 310],
    [40, 380, 520, 460],
    [60, 150, 210, 240],
  ];
  const heat = (r: number, c: number) => {
    const v = Math.sin((c / 13) * Math.PI) * 0.75 + (r >= 4 ? 0.2 : 0) + ((r * 7 + c * 3) % 5) * 0.03;
    return Math.max(0.08, Math.min(1, v));
  };
  return (
    <Frame label="Illustration of the AbaciCount dashboard: visitor stats, traffic charts, an occupancy matrix and a heatmap">
      <g clipPath="url(#count-clip)">
        <AdminShell id="count" brand="AbaciCount" menu={["Dashboard", "Zones", "Sensors", "Reports", "Settings"]} />

        {/* Stat cards */}
        {stats.map(([label, value], i) => (
          <g key={label} transform={`translate(${152 + i * 91.5} 88)`}>
            <rect width={84} height={46} rx={6} className="f-panel" />
            <text x={10} y={17} className="f-xxs f-muted">{label}</text>
            <text x={10} y={36} className={i === 2 ? "f-stat f-stat-accent" : "f-stat"}>{value}</text>
          </g>
        ))}

        {/* Daily traffic bars */}
        <rect x={152} y={142} width={221} height={120} rx={6} className="f-panel" />
        <text x={164} y={160} className="f-sm">Visitors this week</text>
        {bars.map((v, i) => (
          <g key={i}>
            <rect x={172 + i * 28} y={242 - v * 0.75} width={16} height={v * 0.75} rx={2}
              className={i === 4 ? "m-accent" : "f-bar"} />
            <text x={180 + i * 28} y={254} className="f-xxs f-muted" textAnchor="middle">{days[i]}</text>
          </g>
        ))}

        {/* Hourly line */}
        <rect x={381} y={142} width={221} height={120} rx={6} className="f-panel" />
        <text x={393} y={160} className="f-sm">Occupancy by hour</text>
        {[0, 1, 2].map((i) => (
          <line key={i} x1={393} x2={592} y1={252 - i * 30} y2={252 - i * 30} className="f-grid" />
        ))}
        <polyline points={linePts} className="f-line-green" />

        {/* Occupancy matrix */}
        <rect x={152} y={270} width={221} height={130} rx={6} className="f-panel" />
        <text x={164} y={288} className="f-sm">Occupancy matrix</text>
        {["9 AM", "1 PM", "5 PM", "9 PM"].map((t, c) => (
          <text key={t} x={262 + c * 28} y={304} className="f-xxs f-muted" textAnchor="middle">{t}</text>
        ))}
        {zones.map((z, r) => (
          <g key={z}>
            <text x={164} y={322 + r * 20} className="f-xxs">{z}</text>
            {matrix[r].map((v, c) => (
              <g key={c}>
                <rect x={250 + c * 28} y={312 + r * 20} width={24} height={15} rx={2}
                  className="m-accent" style={{ opacity: 0.15 + (v / 520) * 0.8 }} />
                <text x={262 + c * 28} y={322.5 + r * 20} className={v > 300 ? "f-cell f-cell-light" : "f-cell"} textAnchor="middle">{v}</text>
              </g>
            ))}
          </g>
        ))}

        {/* Heatmap */}
        <rect x={381} y={270} width={221} height={130} rx={6} className="f-panel" />
        <text x={393} y={288} className="f-sm">Weekly heatmap</text>
        {Array.from({ length: 7 }).map((_, r) =>
          Array.from({ length: 14 }).map((__, c) => (
            <rect key={`${r}-${c}`} x={407 + c * 13.5} y={298 + r * 13.5} width={11.5} height={11.5} rx={2}
              className="f-heat" style={{ opacity: heat(r, c) }} />
          ))
        )}
        {days.map((d, r) => (
          <text key={r} x={396} y={307 + r * 13.5} className="f-xxs f-muted">{d}</text>
        ))}
      </g>
    </Frame>
  );
}

export function ZaairMock() {
  const menu = ["Dashboard", "Visitors", "Companies", "Events", "Email templates", "ID cards", "Settings"];
  const visitors = [
    ["AK", "Visitor 01", "Company A", "Checked in", "z-ok"],
    ["RM", "Visitor 02", "Company B", "Expected", "z-wait"],
    ["SN", "Visitor 03", "Company C", "Checked in", "z-ok"],
    ["JT", "Visitor 04", "Company A", "Checked out", "z-out"],
  ];
  const fields = [
    ["Visitor name", "Text"],
    ["Visit date", "Date"],
    ["Photo ID", "Image"],
    ["Purpose", "Options"],
  ];
  const wave = Array.from({ length: 24 }, (_, i) => `${176 + i * 6.2},${150 - Math.sin(i / 3.6) * 14}`).join(" ");
  return (
    <Frame label="Illustration of the Zaair visitor management dashboard: visitor stats, recent visitors and custom fields">
      <defs>
        <clipPath id="zaair-clip">
          <rect x={28} y={28} width={584} height={384} rx={14} />
        </clipPath>
      </defs>
      <g clipPath="url(#zaair-clip)">
        <rect x={28} y={28} width={584} height={384} className="z-page" />

        {/* Sidebar */}
        <rect x={36} y={36} width={104} height={368} rx={12} className="z-side" />
        <circle cx={52} cy={58} r={6} className="z-logo" />
        <text x={64} y={62} className="z-brand">Zaair</text>
        {menu.map((m, i) => (
          <g key={m} transform={`translate(44 ${86 + i * 26})`}>
            {i === 0 && <rect x={-2} y={-12} width={92} height={18} rx={5} className="z-side-on" />}
            <rect x={4} y={-7} width={8} height={8} rx={2} className="z-side-icon" />
            <text x={18} y={0} className={i === 0 ? "z-side-text z-side-active" : "z-side-text"}>{m}</text>
          </g>
        ))}

        {/* Top bar */}
        <rect x={150} y={36} width={454} height={28} rx={8} className="z-card" />
        <circle cx={164} cy={50} r={4} className="z-search" />
        <text x={174} y={53} className="z-xs z-muted">Search visitors...</text>
        <circle cx={590} cy={50} r={8} className="z-avatar" />
        <text x={576} y={53} className="z-xs" textAnchor="end">Admin</text>

        <text x={152} y={86} className="z-h">Overview</text>
        <rect x={204} y={74} width={112} height={18} rx={5} className="z-seg" />
        <rect x={276} y={76} width={38} height={14} rx={4} className="z-seg-on" />
        <text x={226} y={86} className="z-xxs" textAnchor="middle">Weekly</text>
        <text x={258} y={86} className="z-xxs" textAnchor="middle">Monthly</text>
        <text x={295} y={86} className="z-xxs z-white" textAnchor="middle">Yearly</text>

        {/* Pastel tiles */}
        <rect x={152} y={100} width={168} height={128} rx={10} className="z-yellow" />
        <text x={164} y={120} className="z-sm">Visitors today</text>
        <polyline points={wave} className="z-wave" />
        <text x={164} y={208} className="z-big">248</text>
        <text x={222} y={208} className="z-xxs z-up">+12%</text>

        {[
          { x: 328, y: 100, cls: "z-pink", label: "Checked in", value: "192", note: "+8%" },
          { x: 468, y: 100, cls: "z-green", label: "Events", value: "4", note: "today" },
          { x: 328, y: 168, cls: "z-purple", label: "Pre-registered", value: "56", note: "+5%" },
          { x: 468, y: 168, cls: "z-blue", label: "Companies", value: "38", note: "active" },
        ].map((t) => (
          <g key={t.label} transform={`translate(${t.x} ${t.y})`}>
            <rect width={132} height={60} rx={10} className={t.cls} />
            <text x={12} y={20} className="z-sm">{t.label}</text>
            <text x={12} y={46} className="z-mid">{t.value}</text>
            <text x={60} y={46} className="z-xxs z-muted">{t.note}</text>
          </g>
        ))}

        {/* Recent visitors */}
        <rect x={152} y={238} width={250} height={166} rx={10} className="z-card" />
        <text x={164} y={258} className="z-sm">Recent visitors</text>
        {visitors.map(([ini, name, co, status, cls], i) => (
          <g key={name} transform={`translate(164 ${276 + i * 32})`}>
            <circle cx={10} cy={6} r={10} className="z-avatar" />
            <text x={10} y={9} className="z-ini" textAnchor="middle">{ini}</text>
            <text x={28} y={4} className="z-xs z-strong">{name}</text>
            <text x={28} y={15} className="z-xxs z-muted">{co}</text>
            <rect x={160} y={-3} width={66} height={16} rx={8} className={cls} />
            <text x={193} y={8} className="z-xxs" textAnchor="middle">{status}</text>
          </g>
        ))}

        {/* Custom fields */}
        <rect x={410} y={238} width={194} height={166} rx={10} className="z-card" />
        <text x={422} y={258} className="z-sm">Custom fields</text>
        {fields.map(([n, t], i) => (
          <g key={n} transform={`translate(422 ${270 + i * 26})`}>
            <rect width={170} height={20} rx={5} className="z-field" />
            <text x={8} y={13.5} className="z-xs">{n}</text>
            <rect x={116} y={4} width={48} height={12} rx={6} className="z-chip" />
            <text x={140} y={13} className="z-xxs" textAnchor="middle">{t}</text>
          </g>
        ))}
        <rect x={422} y={376} width={84} height={18} rx={9} className="z-btn" />
        <text x={464} y={388} className="z-xxs z-white" textAnchor="middle">+ Add field</text>
      </g>
    </Frame>
  );
}

export function FogMock() {
  const menu = ["Dashboard", "FOG Collection", "Violations", "Users", "GTCC", "Inspections", "Reports", "Logs"];
  const cap = [150, 120, 95, 10, 10, 75, 130, 10, 10, 10, 10, 10, 10, 45, 90, 10, 150, 10, 10];
  const sen = [175, 140, 110, 10, 10, 95, 160, 10, 10, 10, 10, 10, 10, 60, 110, 10, 180, 10, 10];
  const toPts = (arr: number[]) =>
    arr.map((v, i) => `${166 + i * 15.5},${252 - v * 0.62}`).join(" ");
  const rows = [
    ["Contractor A", "640", "910"],
    ["Contractor B", "215", "305"],
    ["Contractor C", "1,040", "1,480"],
    ["Contractor D", "2,310", "3,280"],
    ["Contractor E", "760", "1,080"],
    ["Contractor F", "530", "750"],
  ];
  const wave = Array.from({ length: 30 }, (_, i) => `${166 + i * 9.6},${372 - (Math.sin(i / 3) * 10 + 14 + (i % 4) * 2)}`).join(" ");
  return (
    <Frame label="Illustration of the Fogwatch dashboard: waste collection chart, contractor table, sensor graph and tank status">
      <g clipPath="url(#fog-clip)">
        <AdminShell id="fog" brand="FOGwatch" menu={menu} />

        {/* Collection chart */}
        <rect x={152} y={88} width={300} height={182} rx={6} className="f-panel" />
        {["Hourly", "Daily", "Monthly", "Yearly"].map((t, i) => (
          <text key={t} x={164 + i * 46} y={108} className={i === 0 ? "f-xs f-tab-on" : "f-xs"}>{t}</text>
        ))}
        <rect x={162} y={112} width={32} height={1.5} className="m-accent" />
        <text x={164} y={130} className="f-sm">FOG waste collection</text>
        <rect x={344} y={122} width={16} height={8} rx={4} className="m-accent" />
        <circle cx={356} cy={126} r={3.2} fill="#fff" />
        <text x={364} y={129} className="f-xxs">Capacity</text>
        <rect x={398} y={122} width={16} height={8} rx={4} className="f-green" />
        <circle cx={410} cy={126} r={3.2} fill="#fff" />
        <text x={418} y={129} className="f-xxs">Sensor</text>
        {[0, 1, 2, 3].map((i) => (
          <line key={i} x1={164} x2={442} y1={252 - i * 32} y2={252 - i * 32} className="f-grid" />
        ))}
        <polyline points={toPts(sen)} className="f-line-green" />
        <polyline points={toPts(cap)} className="f-line-blue" />

        {/* Contractor table */}
        <rect x={462} y={88} width={140} height={182} rx={6} className="f-panel" />
        <text x={472} y={110} className="f-xxs f-th">Name</text>
        <text x={548} y={110} className="f-xxs f-th" textAnchor="end">Capacity</text>
        <text x={592} y={110} className="f-xxs f-th" textAnchor="end">Fee</text>
        <line x1={472} x2={592} y1={116} y2={116} className="f-grid" />
        {rows.map((r, i) => (
          <g key={r[0]} className="f-xxs">
            <text x={472} y={134 + i * 22}>{r[0]}</text>
            <text x={548} y={134 + i * 22} textAnchor="end">{r[1]}</text>
            <text x={592} y={134 + i * 22} textAnchor="end">{r[2]}</text>
          </g>
        ))}

        {/* Sensor data */}
        <rect x={152} y={280} width={300} height={120} rx={6} className="f-panel" />
        <text x={164} y={300} className="f-sm">Sensor data</text>
        <rect x={378} y={292} width={16} height={8} rx={4} className="m-accent" />
        <circle cx={390} cy={296} r={3.2} fill="#fff" />
        <text x={398} y={299} className="f-xxs">Auto mode</text>
        {[0, 1, 2].map((i) => (
          <line key={i} x1={164} x2={442} y1={386 - i * 26} y2={386 - i * 26} className="f-grid" />
        ))}
        <polyline points={wave} className="f-line-blue" />

        {/* Tank status */}
        <rect x={462} y={280} width={140} height={120} rx={6} className="f-panel" />
        <rect x={514} y={292} width={36} height={78} rx={12} className="m-input" />
        <rect x={514} y={318} width={36} height={52} rx={12} className="m-accent" />
        <text x={532} y={386} className="f-xxs" textAnchor="middle">Tank status</text>
        <text x={532} y={396} className="f-xs f-strong" textAnchor="middle">640 gal</text>
      </g>
    </Frame>
  );
}

export const mockups = {
  count: CountMock,
  zaair: ZaairMock,
  fog: FogMock,
};
