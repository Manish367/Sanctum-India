export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-muted-foreground">
        <p className="font-serif text-base text-foreground">Sanctum India</p>
        <p className="mt-2 max-w-2xl">
          An independent digital pilgrimage project exploring the stories, history, and
          traditions of India's sacred temples. Mythology is presented as tradition, not
          verified fact; documented history is kept separate. See each temple's Sources note.
        </p>
        <p className="mt-6">&copy; {new Date().getFullYear()} Sanctum India.</p>
      </div>
    </footer>
  );
}
