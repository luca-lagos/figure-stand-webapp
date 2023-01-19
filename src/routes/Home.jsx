import { useAppContext } from "../store/Store";

export default function Home() {
  const store = useAppContext();
  return (
    <div>
      Home
      {store.items.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
}
