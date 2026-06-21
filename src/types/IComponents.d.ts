
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

interface headerAttr extends TitleContent {}

interface labelAttr {
   dynamic?: boolean;
   children: React.ReactNode;
}

interface listItemAttr {
   tagContent?: string;
   children: React.ReactNode;
}