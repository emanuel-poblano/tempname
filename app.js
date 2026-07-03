const translations = {
  en: {
    eyebrow: "AI-guided financial starter for first-time investors",
    heroTitle: "From $0 to your first investment with a trusted coach.",
    heroText:
      "A bilingual platform that blends coaching, brokerage guidance, and a supportive community to help people start building wealth step by step.",
    ctaPrimary: "Start my plan",
    ctaSecondary: "Explore the model",
    cardTitle: "The three-part experience",
    cardItem1: "AI coaching that guides you from zero to first investment",
    cardItem2: "Brokerage comparisons and account setup support",
    cardItem3: "A paid community for accountability and live Q&A",
    productsTitle: "One platform, three growth engines",
    productCoachTitle: "AI Financial Coach",
    productCoachText:
      "Personalized roadmaps for emergency funds, Roth IRAs, index funds, and long-term investing with bilingual support.",
    productBrokerageTitle: "Brokerage Referral Platform",
    productBrokerageText:
      "Compare brokerages, recommend the best fit, and help users open and fund accounts with referral commissions.",
    productCommunityTitle: "Paid Investing Community",
    productCommunityText:
      "Offer live Q&A, monthly challenges, accountability groups, and premium workshops for recurring revenue.",
    journeyTitle: "Your roadmap from beginner to first investment",
    step1Title: "1. Build confidence",
    step1Text: "Learn the basics of budgeting, debt, and emergency savings without pressure.",
    step2Title: "2. Create the foundation",
    step2Text: "Set a starter emergency fund and define a realistic monthly investing rhythm.",
    step3Title: "3. Open the first account",
    step3Text: "Choose a brokerage, open an account, and fund it with guidance from the platform.",
    step4Title: "4. Invest with intention",
    step4Text: "Start with a simple index fund plan and keep learning through the community.",
    plannerTitle: "Make the next move",
    plannerLabel: "How much could you save each month?",
    revenueTitle: "Revenue model that can scale",
    revenue1Title: "Premium coaching",
    revenue1Text: "Monthly subscriptions for guided plans, premium courses, and workshops.",
    revenue2Title: "Brokerage referrals",
    revenue2Text: "Earn commissions when users open and fund qualified accounts.",
    revenue3Title: "Membership community",
    revenue3Text: "Charge for live Q&A, accountability circles, and sponsored events."
  },
  es: {
    eyebrow: "Inicio financiero guiado por IA para inversionistas primerizos",
    heroTitle: "De $0 a tu primera inversión con un coach de confianza.",
    heroText:
      "Una plataforma bilingüe que combina coaching, orientación en corretajes y una comunidad de apoyo para ayudar a las personas a empezar a construir riqueza paso a paso.",
    ctaPrimary: "Comenzar mi plan",
    ctaSecondary: "Explorar el modelo",
    cardTitle: "La experiencia en tres partes",
    cardItem1: "Coaching de IA que te guía desde cero hasta la primera inversión",
    cardItem2: "Comparación de brokerages y apoyo para abrir cuentas",
    cardItem3: "Una comunidad paga para rendición de cuentas y sesiones en vivo",
    productsTitle: "Una plataforma, tres motores de crecimiento",
    productCoachTitle: "Coach Financiero con IA",
    productCoachText:
      "Rutas personalizadas para fondos de emergencia, Roth IRA, fondos indexados e inversiones a largo plazo con soporte bilingüe.",
    productBrokerageTitle: "Plataforma de Referidos de Brokerages",
    productBrokerageText:
      "Compara brokerages, recomienda la mejor opción y ayuda a abrir y financiar cuentas con comisiones por referidos.",
    productCommunityTitle: "Comunidad de Inversión de Pago",
    productCommunityText:
      "Ofrece sesiones en vivo, desafíos mensuales, grupos de responsabilidad y talleres premium para ingresos recurrentes.",
    journeyTitle: "Tu ruta desde principiante hasta la primera inversión",
    step1Title: "1. Construye confianza",
    step1Text: "Aprende lo básico de presupuesto, deudas y ahorro de emergencia sin presión.",
    step2Title: "2. Crea la base",
    step2Text: "Establece un fondo inicial de emergencia y define un ritmo realista de inversión mensual.",
    step3Title: "3. Abre la primera cuenta",
    step3Text: "Elige un brokerage, abre una cuenta y financíala con orientación de la plataforma.",
    step4Title: "4. Invierte con intención",
    step4Text: "Comienza con un plan simple de fondos indexados y sigue aprendiendo con la comunidad.",
    plannerTitle: "Da el siguiente paso",
    plannerLabel: "¿Cuánto podrías ahorrar cada mes?",
    revenueTitle: "Modelo de ingresos que puede escalar",
    revenue1Title: "Coaching premium",
    revenue1Text: "Suscripciones mensuales para planes guiados, cursos premium y talleres.",
    revenue2Title: "Referidos de brokerages",
    revenue2Text: "Gana comisiones cuando los usuarios abren y financian cuentas calificadas.",
    revenue3Title: "Comunidad de membresía",
    revenue3Text: "Cobra por sesiones en vivo, círculos de responsabilidad y eventos patrocinados."
  }
};

const state = { lang: "en" };

export function buildPlanSummary(monthlySavings, lang = state.lang) {
  const value = Number(monthlySavings) || 0;

  if (value < 100) {
    return {
      step: lang === "es" ? "Construye un fondo de emergencia" : "Build an emergency fund",
      message:
        lang === "es"
          ? `Con $${value} al mes, el primer paso es crear un fondo de emergencia antes de invertir.`
          : `With $${value} per month, the first step is to build an emergency fund before investing.`
    };
  }

  if (value < 300) {
    return {
      step: lang === "es" ? "Abre una Roth IRA" : "Open a Roth IRA",
      message:
        lang === "es"
          ? `Con $${value} al mes, una Roth IRA es un siguiente paso sólido para empezar a invertir a largo plazo.`
          : `With $${value} per month, a Roth IRA is a strong next step for long-term investing.`
    };
  }

  return {
    step: lang === "es" ? "Empieza con fondos indexados" : "Start with index funds",
    message:
      lang === "es"
        ? `Con $${value} al mes, ya puedes empezar a automatizar una inversión sencilla en fondos indexados.`
        : `With $${value} per month, you can begin automating a simple index fund investment.`
  };
}

function applyLanguage(lang) {
  state.lang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const value = translations[lang][key];
    if (value) {
      element.textContent = value;
    }
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  renderPlan();
}

function renderPlan() {
  const input = document.getElementById("monthlySavings");
  const result = document.getElementById("planResult");

  if (!input || !result) {
    return;
  }

  const summary = buildPlanSummary(input.value, state.lang);
  result.textContent = `${summary.step} — ${summary.message}`;
}

function init() {
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
  });

  const input = document.getElementById("monthlySavings");
  if (input) {
    input.addEventListener("input", renderPlan);
  }

  applyLanguage(state.lang);
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", init);
}
