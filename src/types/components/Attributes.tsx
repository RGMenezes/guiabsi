
// Mudança posterior nos "any"s.
export interface Attributes {
   childs: [
      {etiqueta: string}, // Cabeçalho
      {etiqueta: string, content: string}, // Título
      {etiqueta?: string, content?: string}, // Tag essêncial (ou não)
      {etiqueta: string, content: string}, // Descrição
      {etiqueta?: string, content?: string} // Url
   ],
}