import { useState } from 'react'
import heroImage from './assets/hero-creativity.jpg'
import team1 from './assets/team-1.jpg'
import team2 from './assets/team-2.jpg'
import team3 from './assets/team-3.jpg'
import team4 from './assets/team-4.jpg'
import { ArrowIcon, CalendarIcon, LocationIcon } from './components/icons.jsx'

const NAV = ['우리누구?', '멤버띵', '추억박제', '드루와']

const TAGS = [
  { label: '테니스(폼)', tone: 'white50' },
  { label: '쏘맥', tone: 'gradient' },
  { label: '소주', tone: 'white50' },
  { label: '막걸리', tone: 'white30' },
  { label: '치킨각', tone: 'white' },
  { label: '노래방', tone: 'white' },
  { label: '술게임', tone: 'white50' },
  { label: '라켓(장식)', tone: 'white30' },
  { label: '새벽갬성', tone: 'white' },
  { label: '해장각', tone: 'white50' },
]

// 멤버 (사진은 team-1~4.jpg 교체)
const MEMBERS = [
  {
    img: team1,
    name: '이준구',
    role: '회장(자칭)',
    quote: '테니스 치자며 모았는데 다들 술잔 듦 ㅋㅋ 이게 스불재지 ㅇㅈ',
  },
  {
    img: team2,
    name: '정혜민',
    role: '총무(돈줄)',
    quote: '회비? 다 술값으로 순삭됨 ㅋㅋㄹㅃㅃ 이게 특수반 국룰임',
  },
  {
    img: team3,
    name: '조상율',
    role: '자칭에이스',
    quote: '코트에선 폼 미쳤고 술자리에선 더 미침 ㄹㅇ',
  },
  {
    img: team4,
    name: '김도현',
    role: '분위기 만렙',
    quote: '한 잔 더? ㄱㅇㄷ 무조건 ㄱㄱ 🍺',
  },
]

const MEMORIES = [
  {
    title: '창단썰 ㅋㅋ',
    date: '2024.03',
    place: '학교 앞 호프집',
    body: '라켓 한 번 못 잡고 바로 호프집 직행 ㅋㅋㅋ 테니스 동아리 맞냐고요? ㄴㄴ 그날 새벽까지 달리면서 특수반 탄생함 ㅇㅈ. 찐 시작점이자 레전드 갬성, 완전 럭키비키잖아 🍀',
  },
  { title: '봄 MT(찐텐)', date: '2024.05', place: '가평 펜션' },
  { title: '한강 치맥 번개각', date: '2024.07', place: '뚝섬 한강공원' },
  { title: '종강 파티 불태움 🔥', date: '2024.12', place: '홍대 노래방' },
  {
    title: '제주도 여행 ㄹㅇ갓생',
    date: '2026.01.06',
    place: '제주도',
    body: '새해 첫 여행 제주도로 ㄱㄱ 라켓은 집에 박제하고 떠남 ㅋㅋ 바다 보며 한라산 소주 + 흑돼지 콜라보 미쳤고 ㄹㅇ 겨울바람도 우리 찐텐은 못 막음. 1월인데 젤 따뜻했던 날, 완전 럭키비키 🍀',
  },
]

const FORM_FIELDS = [
  { label: '이름', placeholder: '김특수' },
  { label: '별명(부캐)', placeholder: '예: 술고래, 막내띵' },
  { label: '연락처(필수ㅋ)', placeholder: '010-0000-0000' },
  { label: '하고픈 말 ㄱㄱ', placeholder: '왜 입덕하고 싶냐면요...' },
]

// 공용 퍼플/옐로 버튼
function Button({ children, color = 'purple', className = '' }) {
  const bg = color === 'yellow' ? 'bg-[#E8FE74]' : 'bg-[#CDA5D5]'
  return (
    <button
      className={`inline-flex items-center gap-2 rounded-[20px] ${bg} px-6 py-4 text-[16px] font-medium text-[#06050F] transition-transform hover:scale-[1.02] ${className}`}
    >
      {children}
      <ArrowIcon className="w-5 h-5" />
    </button>
  )
}

function Header() {
  return (
    <header className="flex w-full items-center justify-between px-[100px] py-[30px]">
      <span className="text-[30px] leading-[40px] tracking-[0.15em] text-white">특수반</span>
      <nav className="flex items-center gap-[50px]">
        {NAV.map((item) => (
          <a key={item} href="#" className="text-[20px] leading-[30px] text-white transition-opacity hover:opacity-70">
            {item}
          </a>
        ))}
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="flex flex-col items-center gap-[50px] pb-[50px]">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-[96px] leading-[106px] text-white/30">라켓은 장식이고</h1>
        <h1 className="text-[96px] leading-[106px] text-white">찐텐은 술자리지 ㅋㅋㄹㅃㅃ</h1>
      </div>
      <div className="h-[505px] w-[1240px] max-w-full overflow-hidden rounded-[100px] bg-[#CDA5D5]">
        <img src={heroImage} alt="특수반" className="h-full w-full object-cover" />
      </div>
    </section>
  )
}

function Tag({ label, tone }) {
  const toneMap = {
    white: 'border-white text-white',
    white50: 'border-white/50 text-white/50',
    white30: 'border-white/30 text-white/30',
  }
  if (tone === 'gradient') {
    return (
      <span className="rounded-full bg-[linear-gradient(-56deg,#CDA5D5_0%,#FBE4FF_47%,#E8FE74_100%)] p-[2px] text-[20px] leading-[30px]">
        <span className="block rounded-full bg-[#06050F] px-6 py-2">
          <span className="bg-[linear-gradient(-56deg,#CDA5D5_0%,#FBE4FF_47%,#E8FE74_100%)] bg-clip-text text-transparent">
            {label}
          </span>
        </span>
      </span>
    )
  }
  return (
    <span className={`rounded-full border px-6 py-2 text-[20px] leading-[30px] ${toneMap[tone]}`}>{label}</span>
  )
}

function AboutUs() {
  return (
    <section className="flex items-center justify-center gap-[80px] bg-[#06050F] px-[100px] py-[90px]">
      <div className="flex w-1/2 flex-col gap-[30px]">
        <div className="flex flex-col">
          <h2 className="text-[50px] leading-[60px] text-white/30">테니스 동아리인 척</h2>
          <h2 className="text-[50px] leading-[60px] text-white">사실 술 동아리 ㅇㅈ?</h2>
        </div>
        <p className="text-[16px] font-medium leading-[26px] text-white">
          특수반? ㄹㅇ 테니스로 시작했는데 어쩌다 술이 메인 됨 ㅋㅋㅋ 이준구·정혜민·조상율·김도현 네 명 모이면 라켓은
          인테리어고 한 잔 각 잡는 게 국룰임. 진지하게 랠리한 적? 글쎄~ ㅋㅋ 근데 건배는 만렙 찍음 ㅇㅈ. 암튼 개꿀잼 추억
          여기 다 박제해놨음. 완전 럭키비키잖아 🍀
        </p>
        <Button>드루와~</Button>
      </div>
      <div className="flex w-1/2 flex-wrap content-start gap-3">
        {TAGS.map((t) => (
          <Tag key={t.label} {...t} />
        ))}
      </div>
    </section>
  )
}

function MemberCard({ img, name, role, quote }) {
  return (
    <div className="relative h-[460px] w-[360px] shrink-0 overflow-hidden rounded-[60px] bg-white">
      <img src={img} alt={name} className="h-full w-full object-cover" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-3 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
        <p className="text-[35px] leading-[45px] text-white">
          {name} <span className="text-white/50">{role}</span>
        </p>
        <p className="text-[16px] font-medium leading-[26px] text-white">{quote}</p>
      </div>
    </div>
  )
}

function Members() {
  return (
    <section className="flex flex-col gap-[40px] bg-[#E8FE74] py-[90px] pl-[100px]">
      <div className="flex flex-col">
        <h2 className="text-[50px] leading-[60px] text-[#06050F]/40">특수반 캐리하는</h2>
        <h2 className="text-[50px] leading-[60px] text-[#06050F]">찐주당 4인방 ㅋㅋ</h2>
      </div>
      <div className="relative">
        <div className="flex gap-[20px] overflow-x-auto pb-4 pr-[100px]">
          {MEMBERS.map((m) => (
            <MemberCard key={m.name} {...m} />
          ))}
        </div>
        {/* 드래그 안내 칩 */}
        <span className="pointer-events-none absolute right-[120px] top-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-[16px] font-medium text-[#06050F] shadow">
          <ArrowIcon className="h-4 w-4 -scale-x-100" /> 밀어밀어 <ArrowIcon className="h-4 w-4" />
        </span>
      </div>
    </section>
  )
}

function MemoryRow({ title, date, place, body }) {
  const [open, setOpen] = useState(Boolean(body))
  const expanded = open && body
  return (
    <div className={`rounded-[20px] border p-8 ${expanded ? 'border-2 border-[#CDA5D5]' : 'border-white/30'}`}>
      <h3 className="text-[35px] leading-[45px] text-white">{title}</h3>
      <div className="mt-6 flex flex-wrap items-center gap-8">
        <span className="flex items-center gap-2 text-[16px] font-medium text-white">
          <CalendarIcon className="h-5 w-5" /> {date}
        </span>
        <span className="flex items-center gap-2 text-[16px] font-medium text-white">
          <LocationIcon className="h-5 w-5" /> {place}
        </span>
        {body ? (
          <button
            onClick={() => setOpen((v) => !v)}
            className="ml-auto flex items-center gap-2 text-[16px] font-medium text-[#CDA5D5]"
          >
            {open ? '접기 ㄱㄱ' : '더보기 ㄱㄱ'}
            <ArrowIcon className={`h-5 w-5 transition-transform ${open ? 'rotate-90' : ''}`} />
          </button>
        ) : (
          <button className="ml-auto flex items-center gap-2 text-[16px] font-medium text-[#CDA5D5]">
            더보기 ㄱㄱ <ArrowIcon className="h-5 w-5" />
          </button>
        )}
      </div>
      {expanded && (
        <div className="mt-6 flex flex-col gap-6">
          <p className="text-[16px] font-medium leading-[26px] text-white">{body}</p>
        </div>
      )}
    </div>
  )
}

function Memories() {
  return (
    <section className="flex flex-col gap-[40px] bg-[#06050F] px-[100px] py-[90px]">
      <div className="flex flex-col">
        <h2 className="text-[50px] leading-[60px] text-white/30">다 같이 박제한</h2>
        <h2 className="text-[50px] leading-[60px] text-white">추억모음.zip ㅋㅋ</h2>
      </div>
      <div className="flex flex-col items-start gap-[30px]">
        <div className="flex w-full flex-col gap-[10px]">
          {MEMORIES.map((m) => (
            <MemoryRow key={m.title} {...m} />
          ))}
        </div>
        <Button>더 보여줘잉</Button>
      </div>
    </section>
  )
}

function Application() {
  return (
    <section className="bg-[#06050F] px-[100px] pb-[100px]">
      <div className="flex items-center gap-[80px] rounded-[80px] bg-[#CDA5D5] p-[80px]">
        <div className="flex w-1/2 flex-col gap-[30px]">
          <div className="flex flex-col">
            <h2 className="text-[50px] leading-[60px] text-[#06050F]/40">특수반 입덕</h2>
            <h2 className="text-[50px] leading-[60px] text-[#06050F]">하고 싶음? ㅋㅋ</h2>
          </div>
          <p className="text-[16px] font-medium leading-[26px] text-[#06050F]">
            테니스 못 쳐도 ㄱㅊ 술 못 마셔도 ㄱㅊ 그냥 같이 깔깔댈 준비만 되면 ㅇㅋ임. 밑에 한마디 툭 남겨봐 ㄱㄱ 다음
            모임에서 한 잔 ㄱㅇㄷ 🍻
          </p>
        </div>
        <div className="flex w-1/2 flex-col gap-[30px]">
          <div className="flex flex-col gap-[10px]">
            {FORM_FIELDS.map((f) => (
              <label key={f.label} className="flex flex-col gap-1 rounded-[20px] border border-[#06050F]/30 px-6 py-4">
                <span className="text-[14px] leading-[21px] text-[#06050F]/40">{f.label}</span>
                <input
                  type="text"
                  placeholder={f.placeholder}
                  className="bg-transparent text-[16px] font-medium text-[#06050F] placeholder:text-[#06050F]/60 focus:outline-none"
                />
              </label>
            ))}
          </div>
          <Button color="yellow">신청 ㄱㄱ</Button>
          <p className="text-[14px] leading-[21px] text-[#06050F]/40">
            신청한다고 술 강요는 안 함 ㅇㅈ? (아마도 ㅋㅋ)
          </p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const columns = [
    { title: '팔로우 ㄱㄱ:', links: ['Instagram', 'KakaoTalk 오픈채팅', 'YouTube'] },
    { title: '연락처(찐):', links: ['teuksuban@crew.com', '010-0000-0000'] },
  ]
  return (
    <footer className="flex flex-col gap-[70px] bg-[#06050F] px-[100px] pb-[70px]">
      <div className="flex justify-between gap-12">
        {columns.map((col) => (
          <div key={col.title} className="flex flex-col gap-4 border-t border-white/15 pt-6">
            <span className="text-[16px] font-medium text-white">{col.title}</span>
            <div className="flex flex-col gap-2">
              {col.links.map((l) => (
                <a key={l} href="#" className="text-[14px] leading-[21px] text-white hover:underline">
                  {l}
                </a>
              ))}
            </div>
          </div>
        ))}
        <div className="flex max-w-[420px] flex-col gap-4 border-t border-white/15 pt-6">
          <p className="text-[14px] leading-[21px] text-white/50">
            이 사이트 그냥 특수반끼리 노는 추억 박제용임 ㅋㅋ 여기 사진이랑 글 다 우리꺼니까 함부로 술자리 따라하기 ㄴㄴ.
            무단도용? 그거 완전 킹받음 ㅋㅋ 낄끼빠빠 부탁ㅎㅎ
          </p>
          <p className="text-[14px] leading-[21px] text-white/50">
            특수반 · 이준구 · 정혜민 · 조상율 · 김도현 · since 2024 ㅋㅋ
          </p>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen w-full bg-[#06050F] font-['Schibsted_Grotesk'] flex justify-center">
      <div className="w-full max-w-[1440px]">
        <Header />
        <Hero />
        <AboutUs />
        <Members />
        <Memories />
        <Application />
        <Footer />
        <div className="flex items-center justify-center gap-2 bg-[linear-gradient(-56deg,#CDA5D5_0%,#FBE4FF_47%,#E8FE74_100%)] py-3.5 text-[14px] leading-[21px] text-[#06050F]/40">
          특수반 ㄹㅇ갓생 · made with 🎾🍺 ㅋㅋ
        </div>
      </div>
    </div>
  )
}

export default App
