export function formatSlug(text) {
  if (text) {
    return text.toLowerCase().replace(/ /g, '_');
  }

  return '';
}
