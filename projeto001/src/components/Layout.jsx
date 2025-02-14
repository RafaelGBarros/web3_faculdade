import Logo from "../components/Logo";

const Layout = () => {
  return (
    <div 
      style={{
        fontFamily: 'Arial, sans-serif', 
        backgroundColor: '#f4f4f4', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'flex-start', 
        minHeight: '100vh', // Garante que o layout ocupe toda a altura da tela
        padding: '20px',
      }}
    >
      {/* Header */}
      <header 
        style={{
          display: 'flex', 
          alignItems: 'center', 
          width: '100%', 
          marginBottom: '20px',
          border: '1px solid #000', // Borda de 1px
          borderRadius: '10px',
          padding: '10px'
        }}
      >
        {/* Logo */}
        <div 
          style={{
            width: '50px', 
            height: '50px', 
            border: '1px solid #000', // Borda de 1px
            borderRadius: '10px', 
            marginRight: '20px', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center' // Para centralizar o conteúdo do Logo
          }}
        >
          <Logo /> {/* Logo da aplicação */}
        </div>

        {/* Header Text */}
        <div 
          style={{
            flexGrow: '1', 
            border: '1px solid #000', // Borda de 1px
            borderRadius: '10px', 
            height: '50px', // Altura do header
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center', // Centraliza o texto no header
          }}
        >
          Header
        </div>
      </header>

      {/* Container com menu lateral e área principal */}
      <div 
        style={{
          display: 'flex',
          width: '100%',
          flexGrow: 1, // Permite que este container cresça para preencher o espaço disponível
          gap: '20px',
          marginBottom: '20px'
        }}
      >
        {/* Menu Lateral */}
        <nav 
          style={{
            width: '200px', 
            border: '1px solid #000', // Borda de 1px
            borderRadius: '10px', 
            padding: '20px',
          }}
        >
          Menu Lateral
        </nav>

        {/* Área Principal */}
        <main 
          style={{
            flexGrow: '1', 
            border: '1px solid #000', // Borda de 1px
            borderRadius: '10px', 
            padding: '20px',
          }}
        >
          Área Principal
        </main>
      </div>

      {/* Footer */}
      <footer 
        style={{
          width: '100%', 
          border: '1px solid #000', // Borda de 1px
          borderRadius: '10px', 
          padding: '20px', 
          textAlign: 'center',
          marginTop: 'auto',
        }}
      >
        Footer Padrão
      </footer>
    </div>
  );
}

export default Layout;

  