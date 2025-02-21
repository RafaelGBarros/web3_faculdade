import Logo from "./Logo";
import Link  from "next/link";

const Header = () => {
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        marginBottom: '20px',
        border: '1px solid #000',
        borderRadius: '10px',
        padding: '10px'
      }}
    >
      <div
        style={{
          width: '50px',
          height: '50px',
          border: '1px solid #000',
          borderRadius: '10px',
          marginRight: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Logo />
      </div>

      <div
        style={{
          flexGrow: '1',
          border: '1px solid #000',
          borderRadius: '10px',
          height: '50px',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'right',
        }}
      >
        <Link
          href="/contato"
          style={{
            textDecoration: 'none',
            color: 'black',
          }}
        >
          Contatos
        </Link>

        <Link
          href="/contato"
          style={{
            textDecoration: 'none',
            color: 'black',
          }}
        >
          Sobre nós
        </Link>

      </div>
    </header>
  );
};

export default Header;
