'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Search, Rocket, TrendingUp, Users, Globe, BarChart } from 'lucide-react';

const ExpansionStrategiesPage = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      title: 'Exploración',
      icon: <Search className="w-8 h-8 text-blue-500" />,
      description: 'Analizamos el mercado mexicano, identificamos oportunidades y evaluamos la viabilidad de tu expansión. Realizamos estudios de mercado, análisis de competencia y definimos tu propuesta de valor única.',
    },
    {
      title: 'Implementación',
      icon: <Rocket className="w-8 h-8 text-green-500" />,
      description: 'Ejecutamos la estrategia de entrada al mercado. Esto incluye la creación de alianzas estratégicas, establecimiento de operaciones locales, adaptación de productos/servicios y desarrollo de canales de distribución.',
    },
    {
      title: 'Crecimiento',
      icon: <TrendingUp className="w-8 h-8 text-purple-500" />,
      description: 'Optimizamos y escalamos tu presencia en el mercado mexicano. Implementamos estrategias de marketing locales, expandimos tu red de contactos y buscamos nuevas oportunidades de crecimiento y diversificación.',
    },
  ];

  const openCalendly = () => {
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/alberto-balderas'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Estrategias de Expansión en México</h1>
          <p className="text-xl mb-8">Descubre cómo podemos ayudarte a explorar y conquistar el mercado mexicano</p>
          <Button onClick={openCalendly} size="lg" className="bg-white text-blue-600 hover:bg-blue-100">
            Agenda una Consultoría Gratuita
          </Button>
        </div>
      </section>

      {/* Estrategias de Expansión */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Nuestras Estrategias de Expansión</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Cómo podemos ayudarte</h3>
              <ul className="space-y-4">
                {['Análisis de mercado', 'Desarrollo de alianzas estratégicas', 'Optimización de procesos', 'Implementación tecnológica', 'Estrategias de marketing local'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/expansion-strategies-image-NNhYKFfNzAWTYLkfuKWgCnwma03PE4.jpg"
                alt="Estrategias de Expansión"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fases de Expansión */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Fases de Expansión</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-md cursor-pointer transition-all ${
                  activePhase === index ? 'border-2 border-blue-500' : ''
                }`}
                onClick={() => setActivePhase(index)}
              >
                <div className="flex items-center mb-4">
                  {phase.icon}
                  <h3 className="text-xl font-semibold ml-2">{phase.title}</h3>
                </div>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Beneficios de Expandirse en México</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Globe className="w-12 h-12" />, title: 'Acceso a un mercado en crecimiento' },
              { icon: <Users className="w-12 h-12" />, title: 'Fuerza laboral calificada y competitiva' },
              { icon: <BarChart className="w-12 h-12" />, title: 'Oportunidades de diversificación' },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para expandir tu negocio en México?</h2>
          <p className="text-xl mb-8">Nuestro equipo de expertos está aquí para guiarte en cada paso del camino</p>
          <Button onClick={openCalendly} size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
            Comienza tu Viaje de Expansión
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ExpansionStrategiesPage;