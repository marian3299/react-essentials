import ComponenteC from "./ComponenteC"

export default function ComponenteA({ titulo }) {
  return (
    <div>
        <ComponenteC emoji=":D" />
        <div>{titulo}</div>
    </div>
  )
}
