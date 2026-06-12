
interface headerAttr { // Header component
   titleText: string;
   children: React.ReactNode;
}

interface listElement { // ListItem component
   text: string;
   label?: string;
}

interface cardLinkElems { // CardLink component
   titleText: string;
   tagText: string;
   children: React.ReactNode;
}