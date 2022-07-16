export function formatDate(date: string) {
  return new Date(date).toLocaleString('pt-BR', {
    month: 'long',
    year: 'numeric',
  })
}
