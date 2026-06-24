
interface cardsData extends NDC {
   href: string;
   tag: string;
}

interface faqsData {
   category: string;
   doubts: {question: string, answer: string;}[];
}

interface HoursTypesData { // 'unlimited' and 'fixed' tables
   text: string;
   label?: string;
}

interface LinkWithIconData extends Name { // data of 'Groups' page
   link: string;
   icon: React.ReactNode;
}

interface PortalsData extends NamedDesc { // data of the 'Portals' page
   tag?: string | null;
   url: string;
}

interface recordingHoursData extends NamedDesc { url: string; }

interface scholarshipsData extends NamedDesc {}

interface schoolScheduleData {
   semester: string;
   subjects: {info: NamedColor; hours: string; name: string;}[];
}

interface teamsData extends NDC {
   tag: string;
   insta?: string;
   site?: string;
   siteInter?: string;
   email?: string;
}

interface trilhasData {
   algorithm: NamedColor;
   eletiva: NamedColor;
   infra: NamedColor;
   management: NamedColor;
   others: NamedColor;
   software: NamedColor;
}

interface veteranWorksData extends NamedDesc {}
