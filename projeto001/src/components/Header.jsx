import Logo from "./Logo";

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
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        Header
      </div>
    </header>
  );
};

export default Header;
