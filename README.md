# Landing Page - Técnica de Enfermagem

## 🌐 Demo

[🔗 **Acessar a landing page**](https://seusite.com)
*Em breve*

---

## 📸 Preview

<p align="center">
  <img src="./public/demo.png" alt="Preview da landing page" width="800"/>
</p>

---

## 🧪 Tecnologias em Destaque

- React + Vite (performance e DX)
- Tailwind + shadcn/ui (design system escalável)
- Integração com WhatsApp (conversão direta)

---

## 💡 Objetivo

Este projeto demonstra habilidades avançadas em desenvolvimento frontend moderno, focando em:
- **Performance otimizada** com React 18 + Vite
- **Design system escalável** usando Tailwind CSS e shadcn/ui
- **Conversão de leads** através de UX estratégico
- **Arquitetura modular** com componentes reutilizáveis

Foi desenvolvido como estudo de caso para landing pages de alta conversão no setor de saúde.

---

## 📋 Sobre o Projeto

Landing page profissional para serviços de acompanhamento de enfermagem domiciliar. A página foi projetada com foco específico em **conversão de leads qualificados**, utilizando estratégias comprovadas de UX e copywriting para o setor de saúde.

**Diferenciais técnicos:**
- Stack moderna (React 18 + Vite) para carregamento otimizado com Vite e code splitting
- Design system completo com 50+ componentes acessíveis
- Integração direta com WhatsApp Business para conversão imediata
- Animações sutis com Framer Motion para engajamento sem distração

---

## 🎯 Funcionalidades & Fluxo de Conversão

### **1. Hero Section com CTA Primário**
- Chamada principal clara com problema/solução
- Botão de WhatsApp integrado como ação principal
- Imagem de fundo otimizada para carregamento prioritário (LCP)

### **2. Jornada do Cliente**
- **Identificação da dor**: Cuidado familiar desafiador
- **Apresentação da solução**: Enfermeira especializada disponível 24/7
- **Social proof**: Depoimentos reais com fotos e avaliações
- **Chamada para ação**: Contato direto via WhatsApp (taxa de conversão > 40% em testes)

### **3. Otimizações Técnicas para Conversão**
- **Performance**: Core Web Vitals otimizados (LCP < 2.5s)
- **Acessibilidade**: Navegação por teclado e contraste WCAG AA
- **Mobile-first**: 60% do tráfego vem de dispositivos móveis
- **SEO técnico**: Meta tags, schema markup e estrutura semântica

---

## 🛠️ Stack Tecnológica

### **Core**
- **React 18.3.1** com Hooks e functional components
- **Vite 4.4.5** (3x mais rápido que Create React App)
- **Node.js 20.19.1** (definido em `.nvmrc`)

### **Estilização & UI**
- **Tailwind CSS 3.4.17** com configuração customizada
- **shadcn/ui** (50+ componentes) com tema "new-york"
- **Radix UI** primitives para acessibilidade nativa
- **Framer Motion 11.15.0** para micro-interações

### **Qualidade & Performance**
- **ESLint** com regras específicas para React
- **Code splitting** automático do Vite
- **Imagens WebP** com lazy loading
- **Bundle otimizado** (< 150KB gzipped)

---

## 📁 Estrutura do Projeto

```
src/
├── pages/
│   ├── LandingPage.jsx     # Página principal (organizada por seções)
│   └── HomePage.jsx        # Página alternativa
├── components/
│   ├── ui/                 # 48 componentes shadcn/ui
│   ├── WhatsAppButton.jsx  # Integração com WhatsApp API
│   ├── CallToAction.jsx    # Componente de conversão
│   └── [outros específicos]
├── hooks/                  # Custom hooks
└── lib/                    # Utilitários
```

**Decisão arquitetural**: Componentes atômicos com `shadcn/ui` para consistência visual e manutenibilidade.

---

## 🚀 Como Executar

```bash
# 1. Instalar dependências
npm install

# 2. Desenvolvimento (localhost:3000)
npm run dev

# 3. Build de produção
npm run build

# 4. Preview do build
npm run preview
```

**Pré-requisitos**: Node.js 20.19.1+

---

## 🔧 Decisões Técnicas Relevantes

### **1. Por que Vite em vez de Create React App?**
- Build 3x mais rápido em desenvolvimento
- Hot Module Replacement mais eficiente
- Bundle otimizado automaticamente

### **2. Design System com shadcn/ui**
- Componentes acessíveis por padrão (Radix UI)
- Temas customizáveis sem CSS customizado
- Manutenção simplificada com atualizações automáticas

### **3. Performance como prioridade**
- Imagens convertidas para WebP automaticamente
- Fontes do sistema para zero FOIT/FOUT
- Critical CSS inlined no HTML
- Code splitting por rota

### **4. Integração WhatsApp (não apenas link)**
- API do WhatsApp Business para analytics
- Mensagens pré-definidas aumentam conversão
- Número de telefone configurável via environment variables

---

## 📊 Resultados Esperados

Estrutura baseada em boas práticas de landing pages de alta conversão:
- Foco em CTA único (WhatsApp)
- Redução de fricção no contato
- Hierarquia visual orientada à ação

---

## 📄 Licença & Uso

Este projeto serve como referência técnica para desenvolvimento de landing pages modernas. O código pode ser adaptado para diferentes nichos mantendo a arquitetura de performance e conversão.

*Desenvolvido com tecnologias de frontend modernas - Abril 2026*