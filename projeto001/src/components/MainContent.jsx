import CardUser from "@/components/CardUser";

const MainContent = () => {
  return (
    <main
      style={{
        flexGrow: '1',
        border: '1px solid #000',
        borderRadius: '10px',
        padding: '20px',
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CardUser nome="Joao Lucas" email="joaozinho@gmail.com"/>
      <CardUser nome="Maria Alice" email="mariaalice@gmail.com"/>

    </main>
  );
};

export default MainContent;
