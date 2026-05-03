import { DropZone } from "./components/DropZone";
import { Sidebar } from "./components/Sidebar";

export const App = () => {
  return (
    <main className="app-shell">
      <Sidebar />
      <section className="main-screen" aria-label="Workspace">
        <DropZone />
      </section>
    </main>
  );
};
