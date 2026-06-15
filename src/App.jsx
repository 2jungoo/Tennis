import { useState } from 'react'
import heroImage from './assets/hero-creativity.jpg'
import team1 from './assets/team-1.jpg'
import team2 from './assets/team-2.jpg'
import team3 from './assets/team-3.jpg'
import team4 from './assets/team-4.jpg'
import { ArrowIcon, CalendarIcon, LocationIcon } from './components/icons.jsx'

const NAV = ['소개', '멤버', '추억', '함께하기']

const TAGS = [
  { label: '테니스', tone: 'white50' },
  { label: '맥주', tone: 'gradient' },
  { label: '소주', tone: 'white50' },
  { label: '막걸리', tone: 'white30' },
  { label: '치킨', tone: 'white' },
  { label: '노래방', tone: 'white' },
  { label: '술게임', tone: 'white50' },
  { label: '라켓', tone: 'white30' },
  { label: '새벽감성', tone: 'white' },
  { label: '해장', tone: 'white50' },
]

// 멤버 (사진은 team-1~4.png 교체)
const MEMBERS = [
  {
    img: team1,
    name: '이준구',
    role: '회장',
    quote: '테니스 치자고 모았는데, 어느새 다들 술잔을 들고 있다.',
  },
  {
    img: team2,
    name: '정혜민',
    role: '총무',
    quote: '회비는 결국 다 술값으로 쓰입니다. 그게 특수반이죠.',
  },
  {
    img: team3,
    name: '조상율',
    role: '에이스',
    quote: '코트에선 진심, 술자리에선 더 진심.',
  },
  {
    img: team4,
    name: '김도현',
    role: '분위기 메이커',
    quote: '한 잔 더? 한 잔 더!',
  },
]

const MEMORIES = [
  {
    title: '창단 첫 모임',
    date: '2024.03',
    place: '학교 앞 호프집',
    body: '라켓 한 번 잡아보지도 못하고 호프집으로 직행했던 우리의 시작. 테니스 동아리라는 이름이 무색하게, 그날 우리는 새벽까지 술잔을 부딪치며 특수반이라는 크루를 만들었다. 모든 추억의 시작점.',
  },
  { title: '봄 MT', date: '2024.05', place: '가평 펜션' },
  { title: '한강 치맥 번개', date: '2024.07', place: '뚝섬 한강공원' },
  { title: '종강 파티', date: '2024.12', place: '홍대 노래방' },
  {
    title: '제주도 여행',
    date: '2026.01.06',
    place: '제주도',
    body: '새해 첫 여행으로 다 같이 제주도로 떠난 특수반. 라켓은 집에 두고 떠났지만, 바다 보며 마신 한라산 소주와 흑돼지에 또 잊지 못할 추억이 쌓였다. 추운 겨울 바람도 우리의 텐션은 못 막았던, 가장 따뜻했던 1월.',
  },
]

const FORM_FIELDS = [
  { label: '이름', placeholder: '홍길동' },
  { label: '별명 / 포지션', placeholder: '예: 막내, 에이스' },
  { label: '연락처', placeholder: '010-0000-0000' },
  { label: '한마디', placeholder: '특수반에 들어오고 싶은 이유' },
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
        <h1 className="text-[96px] leading-[106px] text-white/30">라켓을 들었지만</h1>
        <h1 className="text-[96px] leading-[106px] text-white">결국 술잔을 든 우리</h1>
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
          <h2 className="text-[50px] leading-[60px] text-white/30">테니스 동아리인데</h2>
          <h2 className="text-[50px] leading-[60px] text-white">사실은 술 동아리</h2>
        </div>
        <p className="text-[16px] font-medium leading-[26px] text-white">
          특수반은 테니스 동아리에서 시작했지만, 코트보다 술자리에서 더 자주 만나는 우리들의 크루입니다. 이준구, 정혜민,
          조상율, 김도현 — 네 명이 모이면 라켓은 잠시 내려놓고, 한 잔 기울이며 쌓아온 추억들이 이곳에 차곡차곡 저장됩니다.
          진지한 랠리보다 진심 어린 건배가 더 많았던, 그래도 매 순간이 좋았던 우리의 기록.
        </p>
        <Button>함께하기</Button>
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
        <h2 className="text-[50px] leading-[60px] text-[#06050F]/40">특수반을 만드는</h2>
        <h2 className="text-[50px] leading-[60px] text-[#06050F]">네 명의 주정뱅이</h2>
      </div>
      <div className="relative">
        <div className="flex gap-[20px] overflow-x-auto pb-4 pr-[100px]">
          {MEMBERS.map((m) => (
            <MemberCard key={m.name} {...m} />
          ))}
        </div>
        {/* 드래그 안내 칩 */}
        <span className="pointer-events-none absolute right-[120px] top-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-[16px] font-medium text-[#06050F] shadow">
          <ArrowIcon className="h-4 w-4 -scale-x-100" /> 드래그 <ArrowIcon className="h-4 w-4" />
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
            {open ? '접기' : '자세히'}
            <ArrowIcon className={`h-5 w-5 transition-transform ${open ? 'rotate-90' : ''}`} />
          </button>
        ) : (
          <button className="ml-auto flex items-center gap-2 text-[16px] font-medium text-[#CDA5D5]">
            자세히 <ArrowIcon className="h-5 w-5" />
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
        <h2 className="text-[50px] leading-[60px] text-white/30">함께 쌓아온</h2>
        <h2 className="text-[50px] leading-[60px] text-white">우리들의 추억 기록</h2>
      </div>
      <div className="flex flex-col items-start gap-[30px]">
        <div className="flex w-full flex-col gap-[10px]">
          {MEMORIES.map((m) => (
            <MemoryRow key={m.title} {...m} />
          ))}
        </div>
        <Button>전체 추억 보기</Button>
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
            <h2 className="text-[50px] leading-[60px] text-[#06050F]/40">특수반에</h2>
            <h2 className="text-[50px] leading-[60px] text-[#06050F]">들어오고 싶다면</h2>
          </div>
          <p className="text-[16px] font-medium leading-[26px] text-[#06050F]">
            테니스를 잘 칠 필요는 없습니다. 술을 잘 마실 필요도 없어요. 그냥 함께 웃고 떠들 준비만 되어 있다면 충분합니다.
            아래에 한마디 남겨주세요. 다음 모임에서 한 잔 기울이며 만나요!
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
          <Button color="yellow">신청하기</Button>
          <p className="text-[14px] leading-[21px] text-[#06050F]/40">
            신청한다고 해서 술을 강요하지 않습니다. (아마도요.)
          </p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const columns = [
    { title: '팔로우:', links: ['Instagram', 'KakaoTalk 오픈채팅', 'YouTube'] },
    { title: '연락처:', links: ['teuksuban@crew.com', '010-0000-0000'] },
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
            이 사이트는 특수반 멤버들끼리 노는 용도로 만들어진 비공식 추억 저장소입니다. 여기 담긴 모든 사진과 기록은 오직
            우리만의 것이며, 무단으로 술자리를 따라하는 것은 권장하지 않습니다.
          </p>
          <p className="text-[14px] leading-[21px] text-white/50">
            특수반 · 이준구 · 정혜민 · 조상율 · 김도현 · since 2024
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
          Made with 🎾🍺 by 특수반
        </div>
      </div>
    </div>
  )
}

export default App
