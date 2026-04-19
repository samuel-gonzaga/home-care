import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MessageCircle, Check, AlertCircle, Shield, Heart, Clock, Phone, Star, Users, Activity } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
const LandingPage = () => {
  const whatsappUrl = "https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20serviço%20de%20acompanhamento";
  const painPoints = [{
    icon: Clock,
    text: "Preocupação constante com o bem-estar"
  }, {
    icon: Phone,
    text: "Falta de informações sobre o estado de saúde"
  }, {
    icon: Heart,
    text: "Medo de deixar seu familiar sozinho"
  }, {
    icon: Users,
    text: "Dificuldade em conciliar trabalho e cuidados"
  }];
  const included = ["Visitas diárias no horário combinado", "Monitoramento de medicamentos e sinais vitais", "Comunicação constante com a família", "Relatórios diários detalhados", "Auxílio em atividades do dia a dia", "Acompanhamento em consultas médicas"];
  const notIncluded = ["Procedimentos cirúrgicos", "Diagnósticos médicos", "Internação hospitalar", "Medicamentos e materiais médicos", "Transporte em ambulância"];
  const benefits = [{
    icon: Shield,
    text: "Tranquilidade 24 horas por dia"
  }, {
    icon: Heart,
    text: "Seu familiar recebe atenção personalizada"
  }, {
    icon: MessageCircle,
    text: "Comunicação clara e constante"
  }, {
    icon: Activity,
    text: "Recuperação mais rápida e segura"
  }, {
    icon: Check,
    text: "Redução de complicações"
  }, {
    icon: Users,
    text: "Volta à rotina com segurança"
  }];
  const differentials = [{
    icon: Star,
    title: "Experiência comprovada",
    description: "8 anos dedicados ao cuidado humanizado"
  }, {
    icon: Heart,
    title: "Abordagem humanizada",
    description: "Tratamento com respeito, carinho e dignidade"
  }, {
    icon: Clock,
    title: "Disponibilidade 24h",
    description: "Sempre presente quando você precisar"
  }, {
    icon: Users,
    title: "Referências verificadas",
    description: "Famílias satisfeitas que recomendam"
  }];
  const testimonials = [{
    quote: "Ana Paula cuidou da minha mãe com tanto carinho e profissionalismo. Fiquei tranquila sabendo que ela estava em boas mãos. Recomendo de coração!",
    name: "Maria Silva",
    relationship: "Filha de Dona Helena",
    rating: 5
  }, {
    quote: "Profissional excepcional! Sempre atenciosa, pontual e dedicada. Meu pai se recuperou muito mais rápido graças aos cuidados dela.",
    name: "Carlos Oliveira",
    relationship: "Filho de Sr. José",
    rating: 5
  }, {
    quote: "Não tenho palavras para agradecer o cuidado e a atenção que Ana Paula teve com minha avó. Uma pessoa de confiança e muito competente.",
    name: "Beatriz Santos",
    relationship: "Neta de Dona Maria",
    rating: 5
  }];
  return <>
      <Helmet>
        <title>Acompanhamento Humanizado 24h - Ana Paula Santos | Técnica de Enfermagem</title>
        <meta name="description" content="Acompanhamento profissional e humanizado com técnica de enfermagem experiente. Cuidados 24h para seu familiar com tranquilidade e segurança." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 md:px-8 lg:px-12" style={{
        backgroundImage: 'url(https://images.unsplash.com/flagged/photo-1566868091579-8e02646d0218)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
          <div className="absolute inset-0 bg-black/40" />
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="relative z-10 max-w-4xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Seu familiar não precisa passar por isso sozinho
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Acompanhamento humanizado 24h com técnica de enfermagem experiente
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <MessageCircle className="mr-2 h-6 w-6" />
                Falar com Ana Paula
              </Button>
            </a>
          </motion.div>
        </section>

        {/* Problema Section */}
        <section className="py-16 px-6 md:px-8 lg:px-12 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                Você não consegue estar presente o tempo todo
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {painPoints.map((point, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <point.icon className="h-8 w-8 text-emerald-600 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">{point.text}</p>
                  </motion.div>)}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Profissional Section */}
        <section className="py-16 px-6 md:px-8 lg:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                Quem vai cuidar do seu familiar
              </h2>
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div className="w-full lg:w-1/2">
                  <img src="https://images.unsplash.com/photo-1590611936760-eeb9bc598548" alt="Ana Paula Santos - Técnica de Enfermagem" className="rounded-2xl shadow-xl w-full h-auto object-cover" />
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Ana Paula</h3>
                    <p className="text-lg text-emerald-600 font-semibold mb-1">
                      Técnica de Enfermagem COREN-SP
                    </p>
                    <p className="text-md text-gray-600">
                      8 anos de experiência em cuidados domiciliares
                    </p>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Com formação técnica completa e anos de experiência, Ana Paula se dedica a oferecer cuidados humanizados e personalizados. Sua abordagem combina competência técnica com empatia genuína, garantindo que cada paciente receba não apenas tratamento profissional, mas também o carinho e a atenção que merece.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Especializada em acompanhamento de idosos e pacientes em recuperação, Ana Paula entende as necessidades únicas de cada família e trabalha para proporcionar tranquilidade e segurança em momentos delicados.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Incluso/Nao Incluso Section */}
        <section className="py-16 px-6 md:px-8 lg:px-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                O que você precisa saber
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Incluso */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-emerald-600 mb-6 flex items-center gap-2">
                    <Check className="h-7 w-7" />
                    O que está incluso
                  </h3>
                  <ul className="space-y-4">
                    {included.map((item, index) => <li key={index} className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-lg">{item}</span>
                      </li>)}
                  </ul>
                </div>

                {/* Não Incluso */}
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-2">
                    <AlertCircle className="h-7 w-7" />
                    O que NÃO está incluso
                  </h3>
                  <ul className="space-y-4">
                    {notIncluded.map((item, index) => <li key={index} className="flex items-start gap-3">
                        <AlertCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-lg">{item}</span>
                      </li>)}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Beneficios Section */}
        <section className="py-16 px-6 md:px-8 lg:px-12 bg-white">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                Benefícios diretos para sua família
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => <motion.div key={index} initial={{
                opacity: 0,
                scale: 0.9
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.4,
                delay: index * 0.1
              }} className="flex items-start gap-4 p-6 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors duration-300">
                    <benefit.icon className="h-8 w-8 text-emerald-600 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-800 font-medium">{benefit.text}</p>
                  </motion.div>)}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Diferenciais Section */}
        <section className="py-16 px-6 md:px-8 lg:px-12 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                Por que confiar em Ana Paula
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {differentials.map((diff, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }} className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300">
                    <diff.icon className="h-12 w-12 text-emerald-600 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {diff.title}
                    </h3>
                    <p className="text-gray-700">
                      {diff.description}
                    </p>
                  </motion.div>)}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Depoimentos Section */}
        <section className="py-16 px-6 md:px-8 lg:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
                O que famílias dizem
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => <motion.div key={index} initial={{
                opacity: 0,
                scale: 0.95
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.5,
                delay: index * 0.15
              }} className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <p className="text-gray-700 mb-6 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="font-bold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.relationship}</p>
                    </div>
                  </motion.div>)}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 px-6 md:px-8 lg:px-12 bg-gradient-to-br from-emerald-600 to-emerald-700">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Precisa de acompanhamento agora?
              </h2>
              <p className="text-xl text-emerald-50 mb-8">
                Converse com Ana Paula pelo WhatsApp
              </p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  <MessageCircle className="mr-2 h-6 w-6" />
                  Iniciar conversa
                </Button>
              </a>
              <p className="mt-6 text-emerald-50">
                ✓ Estou aqui para te ajudar
              </p>
            </motion.div>
          </div>
        </section>

        {/* WhatsApp Sticky Button */}
        <WhatsAppButton url={whatsappUrl} />
      </div>
    </>;
};
export default LandingPage;