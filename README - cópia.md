# Despensa TOT - MVP

App web/PWA para tablet, preparada para:

- catálogo de produtos sem preços;
- encomendas por cliente;
- controlo de stock por entrada/saída;
- registo por código de barras/SKU;
- alerta de stock mínimo;
- encomenda sugerida;
- histórico de movimentos.

## Como correr

```bash
npm install
npm run dev
```

## Próximas integrações

1. Substituir produtos demo por produtos reais da loja TOT/Odoo.
2. Criar backend/API para clientes, produtos, stocks, movimentos e encomendas.
3. Enviar encomendas diretamente para Odoo ou email comercial.
4. Ativar leitura por câmara com BarcodeDetector/ZXing.
5. Configurar tablet em modo quiosque.

## Estrutura de dados base

Produto:
- id
- sku
- barcode
- name
- category
- pack
- image
- minStock
- stock

Movimento:
- productId
- delta
- reason
- clientId
- createdAt

Encomenda:
- client
- status
- lines
- createdAt
