

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-marca2 text-white text-center py-3 w-full">
      <div className="max-w-[1200px] mx-auto flex items-center justify-center">     
          <p>&copy; {year} Pró Saúde. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
