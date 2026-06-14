import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BarChart3,
  Camera,
  Check,
  Cpu,
  Minus,
  PackagePlus,
  Plus,
  RefreshCcw,
  ScanBarcode,
  Search,
  Send,
  ShoppingCart,
  Warehouse,
} from 'lucide-react';
import './styles.css';

const DEFAULT_PRODUCTS = [
  {
    id: 'monina-multiusos-5l',
    sku: 'SBX-MON-MULTI-5L',
    barcode: '5600000000011',
    name: 'Monina Multiusos 5L',
    category: 'Detergentes',
    pack: 'Unidade 5L',
    image: 'https://placehold.co/640x480/f3f4f6/111111?text=Monina+5L',
    minStock: 4,
    stock: 8,
  },
  {
    id: 'papel-maos-zigzag',
    sku: 'SBX-PAP-ZIGZAG',
    barcode: '5600000000028',
    name: 'Papel Mãos Zig-Zag',
    category: 'Papel',
    pack: 'Caixa',
    image: 'https://placehold.co/640x480/f3f4f6/111111?text=Papel+Maos',
    minStock: 3,
    stock: 5,
  },
  {
    id: 'sacos-lixo-100l',
    sku: 'SBX-SACOS-100L',
    barcode: '5600000000035',
    name: 'Sacos do Lixo 100L',
    category: 'Sacos',
    pack: 'Rolo',
    image: 'https://placehold.co/640x480/f3f4f6/111111?text=Sacos+100L',
    minStock: 6,
    stock: 10,
  },
  {
    id: 'luvas-nitrilo-m',
    sku: 'SBX-LUV-NIT-M',
    barcode: '5600000000042',
    name: 'Luvas Nitrilo Tamanho M',
    category: 'EPIs',
    pack: 'Caixa 100 un.',
    image: 'https://placehold.co/640x480/f3f4f6/111111?text=Luvas+Nitrilo',
    minStock: 5,
    stock: 7,
  },
];

const CLIENT = {
  id: 'demo-environment',
  name: 'Demo Environment',
  location: 'Main Storage Room',
};

function loadProducts() {
  const saved = localStorage.getItem('stockbox-products');
  return saved ? JSON.parse(saved) : DEFAULT_PRODUCTS;
}

function saveProducts(products) {
  localStorage.setItem('stockbox-products', JSON.stringify(products));
}

function loadMovements() {
  return JSON.parse(localStorage.getItem('stockbox-movements') || '[]');
}

function saveMovements(movements) {
  localStorage.setItem('stockbox-movements', JSON.stringify(movements));
}

function Logo() {
  return (
    <div className="brandMark" aria-label="StockBox logo">
      <span>S</span>
    </div>
  );
}

function Home({ setMode }) {
  return (
    <>
      <section className="landingHero">
        <div className="heroOverlay" />
        <div className="heroCopy">
          <p className="brandKicker">StockBox</p>
          <h1>O stock deixa de ser um problema.</h1>
          <p className="heroSubtitle">The Intelligent Inventory Platform</p>
          <p className="heroText">
            Automatize inventários, acompanhe consumos em tempo real e transforme qualquer despensa,
            armazém ou loja num espaço inteligente.
          </p>
          <div className="heroActions">
            <button className="lightButton" onClick={() => setMode('platform')}>Conhecer a plataforma <ArrowRight size={18} /></button>
            <button className="outlineButton" onClick={() => setMode('plans')}>Ver planos</button>
          </div>
        </div>
      </section>

      <section className="featureStrip">
        <div><Warehouse size={28} /><strong>Controlo total</strong><span>Inventário em tempo real por local.</span></div>
        <div><ScanBarcode size={28} /><strong>Leitura inteligente</strong><span>Código de barras, QR Code, IA e RFID.</span></div>
        <div><BarChart3 size={28} /><strong>Decisões melhores</strong><span>Dados e relatórios acionáveis.</span></div>
        <div><RefreshCcw size={28} /><strong>Reposição automática</strong><span>Alertas, sugestões e fluxos de compra.</span></div>
        <div><Cpu size={28} /><strong>Integração total</strong><span>Preparada para ERP e faturação.</span></div>
      </section>

      <section className="darkStory">
        <article>
          <span>O problema</span>
          <h2>Inventários manuais custam tempo e dinheiro.</h2>
          <p>Erros, ruturas e processos manuais prejudicam a eficiência da operação.</p>
        </article>
        <article>
          <span>A solução</span>
          <h2>Automatize. Controle. Evolua.</h2>
          <p>A StockBox transforma a gestão de stock num processo simples, automático e fiável.</p>
        </article>
        <article>
          <span>Para quem é</span>
          <h2>Solução adaptada a vários setores.</h2>
          <p>Lares, hospitais, hotéis, retalho, indústria, restauração e muito mais.</p>
        </article>
      </section>

      <section className="sectionBlock" id="platform">
        <p className="sectionLabel">Plataforma</p>
        <h2>Uma base única para todos os níveis de automação.</h2>
        <div className="platformGrid">
          <div><strong>Basic</strong><p>App, código de barras, QR Code e controlo operacional.</p></div>
          <div><strong>Smart</strong><p>Câmaras, IA e reconhecimento automático de artigos.</p></div>
          <div><strong>Autonomous</strong><p>RFID, portais e inventário permanente em tempo real.</p></div>
        </div>
      </section>

      <footer className="landingFooter">
        <strong>StockBox</strong>
        <span>The Intelligent Inventory Platform</span>
        <small>Powered by TOT Technologies</small>
      </footer>
    </>
  );
}

function Plans() {
  const plans = [
    ['StockBox Basic', 'App · Código de barras · Telemóvel', ['Gestão de produtos', 'Entradas e saídas', 'Stock mínimo', 'QR Code', 'Integração ERP']],
    ['StockBox Smart', 'Câmaras · IA · Deteção automática', ['Reconhecimento automático', 'Inventário assistido por IA', 'Contagem inteligente', 'Relatórios avançados']],
    ['StockBox Autonomous', 'RFID · Portais · Inventário em tempo real', ['Portais RFID', 'Inventário permanente', 'Entradas e saídas automáticas', 'Reposição automática']],
  ];

  return (
    <section className="plansPage">
      <p className="sectionLabel">Planos</p>
      <h1>Três níveis. Uma única plataforma.</h1>
      <div className="plansGrid">
        {plans.map(([title, subtitle, items]) => (
          <article className="planCard" key={title}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <ul>{items.map((item) => <li key={item}><Check size={16} /> {item}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function App() {
  const [products, setProducts] = useState(loadProducts);
  const [movements, setMovements] = useState(loadMovements);
  const [cart, setCart] = useState({});
  const [query, setQuery] = useState('');
  const [mode, setMode] = useState('home');
  const [barcode, setBarcode] = useState('');
  const [message, setMessage] = useState('');

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter((p) =>
      [p.name, p.category, p.sku, p.barcode].join(' ').toLowerCase().includes(q)
    );
  }, [products, query]);

  const lowStock = products.filter((p) => p.stock <= p.minStock);

  function updateProductStock(product, delta, reason) {
    const nextProducts = products.map((p) =>
      p.id === product.id ? { ...p, stock: Math.max(0, p.stock + delta) } : p
    );
    const movement = {
      id: crypto.randomUUID(),
      productId: product.id,
      productName: product.name,
      sku: product.sku,
      barcode: product.barcode,
      delta,
      reason,
      clientId: CLIENT.id,
      createdAt: new Date().toISOString(),
    };
    const nextMovements = [movement, ...movements].slice(0, 200);
    setProducts(nextProducts);
    setMovements(nextMovements);
    saveProducts(nextProducts);
    saveMovements(nextMovements);
    setMessage(`${reason}: ${product.name} (${delta > 0 ? '+' : ''}${delta})`);
  }

  function findByBarcode(code) {
    return products.find((p) => p.barcode === code.trim() || p.sku.toLowerCase() === code.trim().toLowerCase());
  }

  function handleBarcodeAction(action) {
    const product = findByBarcode(barcode);
    if (!product) {
      setMessage('Código não encontrado. Confirme o código ou associe este produto na plataforma StockBox.');
      return;
    }
    updateProductStock(product, action === 'in' ? 1 : -1, action === 'in' ? 'Entrada de stock' : 'Saída de stock');
    setBarcode('');
  }

  function addToCart(product, qty = 1) {
    setCart((current) => ({ ...current, [product.id]: (current[product.id] || 0) + qty }));
  }

  function removeFromCart(product) {
    setCart((current) => {
      const next = { ...current };
      next[product.id] = Math.max(0, (next[product.id] || 0) - 1);
      if (!next[product.id]) delete next[product.id];
      return next;
    });
  }

  function addSuggestedOrder() {
    const suggested = { ...cart };
    lowStock.forEach((p) => {
      suggested[p.id] = Math.max(suggested[p.id] || 0, p.minStock * 2 - p.stock);
    });
    setCart(suggested);
    setMode('order');
    setMessage('Produtos em stock mínimo adicionados à encomenda sugerida.');
  }

  function submitOrder() {
    const lines = Object.entries(cart).map(([id, qty]) => {
      const p = products.find((product) => product.id === id);
      return { productId: id, sku: p.sku, barcode: p.barcode, name: p.name, qty };
    });
    if (!lines.length) {
      setMessage('A encomenda está vazia.');
      return;
    }
    const order = {
      id: `SBX-${Date.now()}`,
      client: CLIENT,
      status: 'received',
      createdAt: new Date().toISOString(),
      lines,
    };
    const orders = JSON.parse(localStorage.getItem('stockbox-orders') || '[]');
    localStorage.setItem('stockbox-orders', JSON.stringify([order, ...orders]));
    setCart({});
    setMessage(`Encomenda ${order.id} criada na plataforma StockBox.`);
  }

  const isPlatform = ['order', 'stock', 'scanner', 'history'].includes(mode);

  return (
    <main className="app">
      <header className="siteHeader">
        <button className="brandButton" onClick={() => setMode('home')}>
          <Logo />
          <span>STOCKBOX</span>
        </button>
        <nav className="siteNav">
          <button className={mode === 'home' ? 'active' : ''} onClick={() => setMode('home')}>Plataforma</button>
          <button className={isPlatform ? 'active' : ''} onClick={() => setMode('order')}>Demo</button>
          <button className={mode === 'plans' ? 'active' : ''} onClick={() => setMode('plans')}>Planos</button>
          <button onClick={() => setMode('platform')}>Soluções</button>
        </nav>
        <button className="demoButton" onClick={() => setMode('order')}>Pedir Demonstração</button>
      </header>

      {mode === 'home' && <Home setMode={setMode} />}
      {mode === 'plans' && <Plans />}
      {mode === 'platform' && <Home setMode={setMode} />}

      {isPlatform && (
        <>
          <header className="hero">
            <div>
              <p className="eyebrow">StockBox Platform</p>
              <h1>Demo Environment</h1>
              <p>{CLIENT.name} · {CLIENT.location}</p>
            </div>
            <div className="heroStats">
              <span><Warehouse size={18} /> {products.length} produtos</span>
              <span><ShoppingCart size={18} /> {Object.keys(cart).length} linhas</span>
            </div>
          </header>

          <nav className="tabs">
            <button className={mode === 'order' ? 'active' : ''} onClick={() => setMode('order')}>Encomendar</button>
            <button className={mode === 'stock' ? 'active' : ''} onClick={() => setMode('stock')}>Stock</button>
            <button className={mode === 'scanner' ? 'active' : ''} onClick={() => setMode('scanner')}>Código de barras</button>
            <button className={mode === 'history' ? 'active' : ''} onClick={() => setMode('history')}>Histórico</button>
          </nav>

          {message && <section className="message">{message}</section>}

          {lowStock.length > 0 && (
            <section className="alert">
              <strong>{lowStock.length} produto(s) em stock mínimo.</strong>
              <button onClick={addSuggestedOrder}>Gerar encomenda sugerida</button>
            </section>
          )}

          {(mode === 'order' || mode === 'stock') && (
            <section className="searchBox">
              <Search size={20} />
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Pesquisar produto, categoria, SKU ou código" />
            </section>
          )}

          {mode === 'scanner' && (
            <section className="scannerPanel">
              <Camera size={40} />
              <h2>Registar entrada ou saída</h2>
              <p>Leia com scanner Bluetooth ou introduza o código manualmente. A integração por câmara será preparada com BarcodeDetector/ZXing.</p>
              <input value={barcode} onChange={(e) => setBarcode(e.target.value)} placeholder="Código de barras ou SKU" autoFocus />
              <div className="scannerActions">
                <button className="success" onClick={() => handleBarcodeAction('in')}><PackagePlus size={22} /> Entrada</button>
                <button className="danger" onClick={() => handleBarcodeAction('out')}><Minus size={22} /> Saída</button>
              </div>
            </section>
          )}

          {(mode === 'order' || mode === 'stock') && (
            <section className="grid">
              {filteredProducts.map((product) => (
                <article key={product.id} className="card">
                  <img src={product.image} alt={product.name} />
                  <div className="cardBody">
                    <span className="category">{product.category}</span>
                    <h3>{product.name}</h3>
                    <p>{product.pack}</p>
                    <p className="sku">SKU: {product.sku}</p>
                    <div className={product.stock <= product.minStock ? 'stock low' : 'stock'}>
                      Stock: <strong>{product.stock}</strong> · Mínimo: {product.minStock}
                    </div>
                    {mode === 'order' ? (
                      <div className="qtyRow">
                        <button onClick={() => removeFromCart(product)}><Minus size={18} /></button>
                        <span>{cart[product.id] || 0}</span>
                        <button onClick={() => addToCart(product)}><Plus size={18} /></button>
                      </div>
                    ) : (
                      <div className="qtyRow">
                        <button onClick={() => updateProductStock(product, 1, 'Entrada manual')}><Plus size={18} /> Entrada</button>
                        <button onClick={() => updateProductStock(product, -1, 'Saída manual')}><Minus size={18} /> Saída</button>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </section>
          )}

          {mode === 'history' && (
            <section className="history">
              <h2>Movimentos de stock</h2>
              {movements.length === 0 ? <p>Ainda não existem movimentos.</p> : movements.map((m) => (
                <div key={m.id} className="movement">
                  <strong>{m.productName}</strong>
                  <span>{m.reason}</span>
                  <span>{m.delta > 0 ? '+' : ''}{m.delta}</span>
                  <small>{new Date(m.createdAt).toLocaleString('pt-PT')}</small>
                </div>
              ))}
            </section>
          )}

          {mode === 'order' && (
            <footer className="orderBar">
              <div>
                <strong>Encomenda atual</strong>
                <span>{Object.values(cart).reduce((sum, qty) => sum + qty, 0)} unidades</span>
              </div>
              <button onClick={submitOrder}><Send size={20} /> Submeter encomenda</button>
            </footer>
          )}
        </>
      )}
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
