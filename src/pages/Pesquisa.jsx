import React from "react";

const Pesquisa = () => {
  const cards = Array(4).fill({
    title: "Rua Eduardo Bezerra, 1182",
    location: "São João do Tauape, Fortaleza/CE",
    description: "Casa para alugar, 500m² - Excelente Casa à venda ou Locação",
    area: "500m²",
    quartos: 3,
    garagem: 5,
    preco: "R$ 5.000"
  });

  return (
    <div className="bg-white min-h-screen w-full">
      <header className="flex items-center justify-between p-4 shadow">
        <div className="flex items-center gap-2">
          <div className="bg-orange-600 p-2 rounded-full">
            <span className="text-white font-bold">🏠</span>
          </div>
          <h1 className="text-xl font-bold text-orange-600">Aluga Web</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">Favoritos</span>
          <span className="text-sm font-bold text-orange-600">Sílvio Santos</span>
        </div>
      </header>

      <main className="flex">
        {/* Sidebar Filtros */}
        <aside className="w-80 p-4 border-r border-gray-200">
          <div className="bg-gray-100 p-2 rounded-md flex justify-between">
            <button className="w-1/2 py-2 text-sm font-medium text-gray-700">Comprar</button>
            <button className="w-1/2 py-2 text-sm font-medium text-white bg-orange-600 rounded-md">Alugar</button>
          </div>

          <div className="mt-4">
            <label className="text-sm font-semibold">Localização</label>
            <input type="text" placeholder="Digite o bairro, rua ou cidade" className="mt-1 w-full p-2 border border-gray-300 rounded" />
            <span className="inline-block mt-2 text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded">Fortaleza - CE ✕</span>
          </div>

          <div className="mt-4">
            <label className="text-sm font-semibold">Tipos de imóveis</label>
            <div className="flex gap-2 mt-2">
              <button className="w-1/2 border border-gray-300 rounded px-2 py-1">Casa</button>
              <button className="w-1/2 bg-orange-600 text-white rounded px-2 py-1">Apartamento</button>
            </div>
          </div>

          <div className="mt-4">
            <label className="text-sm font-semibold">Preço a partir de</label>
            <div className="flex gap-2 mt-2">
              <input type="number" placeholder="0" className="w-1/2 p-2 border border-gray-300 rounded" />
              <input type="number" placeholder="0" className="w-1/2 p-2 border border-gray-300 rounded" />
            </div>
          </div>

          {['Quantidade de quartos', 'Banheiros', 'Garagens'].map((label, idx) => (
            <div key={idx} className="mt-4">
              <label className="text-sm font-semibold">{label}</label>
              <div className="flex gap-2 mt-2">
                {[1, 2, 3, 4].map(n => (
                  <button key={n} className={`px-2 py-1 rounded border text-sm ${n === 1 ? 'bg-orange-600 text-white' : 'border-gray-300 text-gray-700'}`}>+{n}</button>
                ))}
              </div>
            </div>
          ))}
        </aside>

        {/* Conteúdo */}
        <section className="flex-1 p-6">
          <div className="mb-4">
            <nav className="text-sm text-gray-500">
              Casas para alugar &gt; CE &gt; Fortaleza
            </nav>
            <h2 className="text-xl font-bold text-orange-600">
              122 Casas para alugar em Fortaleza - CE
            </h2>
          </div>

          <div className="mb-4 flex justify-end">
            <select className="border border-gray-300 p-2 rounded-md text-sm">
              <option>Mais relevantes</option>
            </select>
          </div>

          <div className="space-y-4">
            {cards.map((card, index) => (
              <div key={index} className="flex border rounded shadow-sm overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
                  alt="Casa"
                  className="w-[250px] h-full object-cover"
                />
                <div className="p-4 flex-1">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-semibold text-sm text-gray-800">{card.title}</h3>
                      <p className="text-sm text-gray-500">{card.location}</p>
                      <p className="text-sm mt-1">{card.description}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-400">♥</span>
                      <div className="text-orange-600 text-lg font-bold">{card.preco}</div>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500 flex gap-4">
                    <span>{card.area}</span>
                    <span>{card.quartos} Quartos</span>
                    <span>{card.garagem} Garagem</span>
                  </div>
                  <div className="mt-4">
                    <button className="bg-orange-600 text-white px-4 py-2 rounded">Contatar</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-orange-600 text-white text-sm text-center py-3 mt-8">
        Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Pesquisa;
