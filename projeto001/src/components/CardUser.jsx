const CardUser = (props) => {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          border: '1px solid #000',
          width: '70%',
          height: '100px',
          borderRadius: '10px',
          padding: '10px',
          marginBottom: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #000',
            height: '60px',
            width: '60px',
            borderRadius: '50%',
            backgroundColor: '#f5f5f5',
            marginRight: '15px', // Espaço entre a foto e o nome/email
          }}
        >
          {/* Foto do usuário */}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{ margin: '0', fontSize: '18px' }}>{props.nome}</h1>
          <p style={{ margin: '0', fontSize: '14px', color: '#777' }}>{props.email}</p>
        </div>
      </div>
    );
  };
  
  export default CardUser;
  