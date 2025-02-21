import Header from "../components/Header";
import Sidebar from "../components/SideBar";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";
import CardUser from "@/components/CardUser";

export default function home(){

  return(
    <main>
      <div
      style={{
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f4f4f4',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      {/* Header */}
      <Header />

      {/* Container com menu lateral e área principal */}
      <div
        style={{
          display: 'flex',
          width: '100%',
          flexGrow: 1,
          gap: '20px',
          marginBottom: '20px',
        }}
      >
        {/* Menu Lateral */}
        <Sidebar />

        {/* Área Principal */}
        <MainContent />
        
      </div>

      {/* Footer */}
      <Footer />
    </div>
    </main> 
  )  
}