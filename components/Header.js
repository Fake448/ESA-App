import Link from 'next/link';
import NavBar from './NavBar';

const style = {
  background: 'linear-gradient(to right bottom, #ffffff, #0081ff)',
  height: "100px"
}

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div style={style}>
    <div>
      <NavBar />
    </div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;
