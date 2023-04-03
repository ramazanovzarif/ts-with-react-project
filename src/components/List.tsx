import { ReactNode } from "react";

interface ListProps<t> {
  items: t[];
  render: (item: t) => ReactNode;
}

const List = <t,>({ items, render }: ListProps<t>) => {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{render(item)}</li>
      ))}
    </ul>
  );
};
export default List;
