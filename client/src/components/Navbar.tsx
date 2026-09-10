import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Flame, Menu, X } from 'lucide-react';
import clsx from 'clsx';

const links = [
  { to: '/jyotirlingas', label: 'Jyotirlingas' },
  { to: '/shakti-peethas', label: 'Shakti Peethas' },
  { to: '/navdurga', label: 'Navdurga' },
  { to: '/aarti', label: 'Aarti & Stotra' },
  { to: '/explore', label: 'Explore' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2 font-serif text-xl tracking-wide text-foreground"
        >
          <Flame className="h-5 w-5 text-accent" aria-hidden="true" />
          Sanctum India
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                clsx(
                  'cursor-pointer text-sm font-medium tracking-wide transition-colors duration-200',
                  isActive ? 'text-accent' : 'text-muted-foreground hover:text-foreground',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="cursor-pointer p-2 text-foreground md:hidden"
        >
          {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {isOpen && (
        <nav
          aria-label="Primary mobile"
          className="border-t border-border bg-background px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    clsx(
                      'block cursor-pointer text-base font-medium tracking-wide transition-colors duration-200',
                      isActive ? 'text-accent' : 'text-muted-foreground hover:text-foreground',
                    )
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
