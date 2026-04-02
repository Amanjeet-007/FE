/* eslint-disable react/prop-types */
export default function HighlightMatch({ text = "", query = "" }) {

  if (!text) return null;

  const parts = text.split(new RegExp(`(${query})`, "gi"));

  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase()
      ?  <strong key={i}>{part}</strong>
      :  part
  );
}