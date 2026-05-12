// Listings reais do Luís Viveiros — Century 21 Azor (Açores)
// Fonte: https://century21.pt/comprar?agent_handler=luis-viveiros
export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  beds?: number;
  baths?: number;
  area?: number;
  image: string;
  url: string;
  badge?: string;
  tag?: string;
  type?: "venda" | "arrendamento";
}

export const properties: Property[] = [
  { id: "C0276-02748", title: "Belíssimo Apartamento T3, em Ribeira Grande", location: "Ribeira Grande, São Miguel", price: "€ 387.500", beds: 3, baths: 2, area: 165, image: "https://images.century21.pt/9f466645-1769-443e-bb20-03ae94771b50/alfredina00105.jpg?width=1024&quality=80", url: "https://century21.pt/comprar/C0276-02748", badge: "Destaque", tag: "T3" },
  { id: "C0276-02714", title: "Casa de Arquitetura Moderna em Localização Premium", location: "São Miguel, Açores", price: "€ 975.000", beds: 4, baths: 3, area: 276, image: "https://images.century21.pt/29e852e2-c6cf-4fd4-a534-34008775226c/artur-atalhada00030.jpg?width=1024&quality=80", url: "https://century21.pt/comprar/C0276-02714", badge: "Exclusivo", tag: "Premium" },
  { id: "C0276-02685", title: "Casa Moderna em Achadinha, Nordeste", location: "Achadinha, Nordeste — São Miguel", price: "€ 839.000", beds: 3, baths: 3, area: 256, image: "https://images.century21.pt/062c19ad-8814-4ce5-ad42-35546ef9a364/rui-e-andre00027.jpg?width=1024&quality=80", url: "https://century21.pt/comprar/C0276-02685", badge: "Novo", tag: "Moderna" },
  { id: "C0276-02524", title: "Deslumbrante Moradia com Vista Mar em Ribeira Quente", location: "Ribeira Quente, Povoação", price: "€ 460.000", beds: 3, baths: 2, area: 173, image: "https://images.century21.pt/1e0acf70-2655-4286-a83f-a3268401ae17/WhatsAppImage2025-09-03at15.04.30.jpeg?width=1024&quality=80", url: "https://century21.pt/comprar/C0276-02524", badge: "Vista Mar", tag: "Oportunidade" },
  { id: "C0276-02706", title: "Casa Histórica e Charmosa em Vila Franca do Campo", location: "Vila Franca do Campo, São Miguel", price: "€ 470.000", beds: 5, baths: 3, area: 539, image: "https://images.century21.pt/1b90709c-0676-4961-b262-8e8b2a3e7954/fabio-vila-franca-do-campo00002.jpg?width=1024&quality=80", url: "https://century21.pt/comprar/C0276-02706", badge: "Histórica", tag: "Charme" },
  { id: "C0276-02730", title: "Acolhedora Moradia Rústica T3+1 na Fajã Grande", location: "Fajã Grande, Ilha das Flores", price: "€ 375.000", beds: 3, baths: 2, area: 221, image: "https://images.century21.pt/da71e24c-6ab4-4970-b0af-9243bc7c1c97/graca00008.jpg?width=1024&quality=80", url: "https://century21.pt/comprar/C0276-02730", badge: "Rústica", tag: "Flores" },
  { id: "C0276-02726", title: "Restaurante à venda em Achadinha, Nordeste", location: "Achadinha, Nordeste — São Miguel", price: "€ 550.000", baths: 4, area: 264, image: "https://images.century21.pt/81dac093-185e-4294-b273-0e7f7b942101/aYVVHOWpiMEY2ZFd3LTIwMjQwNDA4MTUzODI1202404081615041764524ee947.jpg?width=1024&quality=80", url: "https://century21.pt/comprar/C0276-02726", badge: "Comercial", tag: "Negócio" },
  { id: "C0276-02724", title: "Apartamento T1 no Paim, em Ponta Delgada", location: "Ponta Delgada, São Miguel", price: "€ 285.000", beds: 1, baths: 1, area: 115, image: "https://images.century21.pt/1cd74d86-7b6e-4d5c-a0bc-7be01c0ff6ff/6.jpg?width=1024&quality=80", url: "https://century21.pt/comprar/C0276-02724", badge: "T1", tag: "Centro" },
  { id: "C0276-02681", title: "Apartamento T2 em Lagoa", location: "Lagoa, São Miguel", price: "€ 269.000", beds: 2, baths: 1, area: 115, image: "https://images.century21.pt/6058dad5-eee8-43a8-acf4-00a623b4f9a7/rui-e-bruno00030.jpg?width=1024&quality=80", url: "https://century21.pt/comprar/C0276-02681", badge: "T2", tag: "Lagoa" },
  { id: "C0276-02620", title: "Espaço Comercial em Ponta Delgada", location: "Ponta Delgada, São Miguel", price: "€ 235.000", beds: 3, baths: 1, area: 122, image: "https://images.century21.pt/4a8b8259-ba6c-465c-a642-1a2cf600b93f/Photo20230811123731.jpg?width=1024&quality=80", url: "https://century21.pt/comprar/C0276-02620", badge: "Comercial", tag: "Investimento" },
  { id: "C0276-02622", title: "Casa para Recuperação em Santa Cruz das Flores", location: "Santa Cruz das Flores", price: "€ 350.000", beds: 8, baths: 4, area: 370, image: "https://images.century21.pt/c6f5be60-c122-4894-b5b7-79ab5557de53/praca-de-sta-cruz00008.jpg?width=1024&quality=80", url: "https://century21.pt/comprar/C0276-02622", badge: "Recuperação", tag: "Flores" },
  { id: "C0276-02464", title: "Edifício Histórico no Centro da Ribeira Grande", location: "Ribeira Grande, São Miguel", price: "€ 319.600", beds: 7, baths: 3, area: 588, image: "https://images.century21.pt/41b91d1a-5655-47b9-982d-6b1476ff25e7/rib-grande-4600019.jpg?width=1024&quality=80", url: "https://century21.pt/comprar/C0276-02464", badge: "Histórico", tag: "Centro" },
  { id: "C0276-02463", title: "Duas Casas Antigas na Cidade da Ribeira Grande", location: "Ribeira Grande, São Miguel", price: "€ 593.800", beds: 12, baths: 1, area: 1056, image: "https://images.century21.pt/2e31964e-9714-4103-a473-f79133d8a2dd/rib-grande-4600028.jpg?width=1024&quality=80", url: "https://century21.pt/comprar/C0276-02463", badge: "Oportunidade", tag: "Único" },
  { id: "C0276-02294", title: "2 Imóveis em Pedra Tradicional, Nordeste — Vista Mar", location: "Nordeste, São Miguel", price: "€ 350.000", beds: 1, baths: 1, area: 133, image: "https://images.century21.pt/ae910dde-ad87-4f59-b251-ba0e3aca1071/6429879528075408359276814788939975863304192o.jpg?width=1024&quality=80", url: "https://century21.pt/comprar/C0276-02294", badge: "Pedra", tag: "Vista Mar" },
  { id: "C0276-02715", title: "Terreno Urbano à Venda no Pópulo, Ponta Delgada", location: "Pópulo, Ponta Delgada", price: "€ 215.000", image: "https://images.century21.pt/4e86404a-625d-46a1-8209-76cdc9412b22/1.jpeg?width=1024&quality=80", url: "https://century21.pt/comprar/C0276-02715", badge: "Terreno", tag: "Urbano" },
  { id: "C0276-02178", title: "Terreno com Viabilidade de Construção, nos Ginetes", location: "Ginetes, São Miguel", price: "€ 140.000", image: "https://images.century21.pt/dji-0215_900ff18f-c6a8-465e-bc4c-77e4227c1038.JPG?width=1024&quality=80", url: "https://century21.pt/comprar/C0276-02178", badge: "Terreno", tag: "Construção" },
  { id: "C0276-02196", title: "Quinta na Fajã Grande, Ilha das Flores", location: "Fajã Grande, Flores", price: "€ 45.000", image: "https://images.century21.pt/5_1d7e6ed2-8d26-4bb5-830f-07956aa313ca.jpg?width=1024&quality=80", url: "https://century21.pt/comprar/C0276-02196", badge: "Quinta", tag: "Flores" },
  { id: "C0276-02184", title: "Terreno na Fajãzinha, Ilha das Flores", location: "Fajãzinha, Flores", price: "€ 35.000", image: "https://images.century21.pt/aywfxegtzu2h4zfdwcgftrnlhv0vwltiwmjqwnza0mtyzoda2-20240704164116-79256-7ed958d_809adcac-c4ee-4c13-8da0-129681f4d720.jpg?width=1024&quality=80", url: "https://century21.pt/comprar/C0276-02184", badge: "Terreno", tag: "Flores" },
  { id: "C0276-02609", title: "Espaço Comercial em Pré-Construção, Arrifes", location: "Arrifes, Ponta Delgada", price: "€ 600 / mês", area: 79, image: "https://images.century21.pt/6a9f1737-60b8-430c-a963-e28a26fa1ae1/Photo20231109160613.jpg?width=1024&quality=80", url: "https://century21.pt/arrendar/C0276-02609", badge: "Arrendar", tag: "Comercial", type: "arrendamento" },
  { id: "C0276-02608", title: "Espaço Comercial em Pré-Construção, Arrifes", location: "Arrifes, Ponta Delgada", price: "€ 600 / mês", area: 78, image: "https://images.century21.pt/39b8afa1-9758-4e35-814d-df0c701643bc/Photo20231109160331.jpg?width=1024&quality=80", url: "https://century21.pt/arrendar/C0276-02608", badge: "Arrendar", tag: "Comercial", type: "arrendamento" },
];

export const featuredProperties = properties.slice(0, 6);
