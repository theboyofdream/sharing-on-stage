import { Button } from "./components/ui/button";

function App() {
  return (
    <main id="body" className="p-0 m-0 w-screen h-screen dark">
      <div id="banner" className="w-full p-1 text-sm text-center bg-primary-foreground border-b-2">
        Open to new opportunities.
      </div>
      <div className="w-full h-full flex gap-2 justify-center items-center">
        <Button>Join as speaker</Button>
        <Button>Create room</Button>
      </div>
    </main>
  );
}

export default App;
