import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-6 py-32 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-accent">404</p>
      <h1 className="mt-2 font-serif text-4xl text-foreground">This path hasn't been mapped yet</h1>
      <Link to="/" className="mt-6 text-accent underline underline-offset-4">
        Return home
      </Link>
    </div>
  );
}
