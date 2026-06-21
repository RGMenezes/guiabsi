
interface Name { name: string; }
interface NamedColor extends Name { color: string; }
interface NamedDesc extends Name { desc: string; }
interface NDC extends NamedDesc { color: string; }

interface TitleContent {
   titleText: string;
   children: React.ReactNode;
}