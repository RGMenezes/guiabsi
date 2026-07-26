
interface cardAttr extends TitleContent {
  tagText?: string;
  url?: string;
}

interface callToActionAttr {
  url?: string;
  click?: () => void;
  children: React.ReactNode;
}

interface categoryAttr extends TitleContent { divider?: boolean; }

interface figureAttr {
  img: string;
  alt: string;
  landscape?: boolean;
  children: React.ReactNode;
}

interface headerAttr extends TitleContent {}

interface labelAttr {
  dynamic?: boolean;
  children: React.ReactNode;
}

interface listItemAttr {
  tagContent?: string;
  children: React.ReactNode;
}