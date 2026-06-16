
interface headerAttr { // Header component
   titleText: string;
   children: React.ReactNode;
}

interface categoryAttr {
   titleText: string;
   divider?: boolean;
   children: React.ReactNode;
}

interface cardAttr {
   tagText?: string;
   titleText: string;
   url?: string;
   children: React.ReactNode;
}

interface cardData {
   href: string;
   tag: string;
   title: string;
   desc: string;
   color: string;
}

interface listItemAttr {
   tagContent?: string;
   children: React.ReactNode;
}

interface labelAttr {
   dynamic?: boolean;
   children: React.ReactNode;
}

interface callToActionAttr {
   url?: string;
   click?: () => void;
   children: React.ReactNode;
}