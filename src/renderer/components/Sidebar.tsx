import { Button } from "./Button";

export const Sidebar = () => {
  return (
    <aside className="sidebar" aria-label="Primary actions">
      <Button>Choose folder</Button>
      <Button>Settings</Button>
    </aside>
  );
};
