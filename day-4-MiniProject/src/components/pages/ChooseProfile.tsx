import { Link, Outlet } from 'react-router-dom';

export default function ChooseProfile() {
  return (
    <div>
      <h1>Choose Profile Type</h1>
      <nav>
        <Link to="/choose-profile/groom">Groom</Link>
        <Link to="/choose-profile/bride">Bride</Link>
      </nav>
      <Outlet />
    </div>
  );
}