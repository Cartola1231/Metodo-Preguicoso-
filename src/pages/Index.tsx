
import BenefitItem from "@/components/BenefitItem";
import CtaButton from "@/components/CtaButton";
import FloatingMoney from "@/components/FloatingMoney";
import Testimonial from "@/components/Testimonial";
import UrgencyBanner from "@/components/UrgencyBanner";

const Index = () => {
  // Example affiliate link variables - these would typically be customizable
  const affiliateLink = "https://example.com/affiliate";
  
  return (
    <div className="min-h-screen bg-lazycash-black relative overflow-hidden">
      <FloatingMoney />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header Section */}
        <header className="text-center mb-16">
          <div className="inline-block bg-lazycash-red px-4 py-1 rounded font-bold text-sm mb-4 animate-pulse">
            ATENÇÃO: ESTE CONTEÚDO PODE SER REMOVIDO A QUALQUER MOMENTO
          </div>
          
          <h1 className="font-anton text-4xl md:text-6xl text-lazycash-white mb-4">
            COMO LUCREI <span className="text-lazycash-green">R$874</span> EM 3 DIAS
            <br/>VENDENDO UM PDF FEITO NO WORD
          </h1>
          
          <p className="text-xl md:text-2xl text-lazycash-white font-bold mt-6">
            <span className="underline decoration-lazycash-yellow decoration-4 underline-offset-4">
              O método preguiçoso pra ganhar dinheiro
            </span> sem aparecer,<br/>sem curso, sem tráfego pago.
          </p>
        </header>
        
        {/* Main Image Section */}
        <div className="mb-12 text-center">
          <img 
            src="/lovable-uploads/fb2a7388-f266-4310-af80-92ae81f2c583.png" 
            alt="Método Preguiçoso" 
            className="rounded-lg shadow-2xl mx-auto max-w-full mb-8 border-2 border-lazycash-red"
          />
          
          <CtaButton 
            text="QUERO GANHAR NO AUTOMÁTICO" 
            href={affiliateLink}
            className="mx-auto"
          />
        </div>
        
        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-anton text-lazycash-yellow mb-6 text-center">
            O QUE VOCÊ VAI DESCOBRIR:
          </h2>
          
          <div className="space-y-3">
            <BenefitItem text="Crie PDFs com IA em minutos (sem escrever uma linha)" />
            <BenefitItem text="Monte funil fake no Telegram e venda como se fosse golpe" />
            <BenefitItem text="Use vídeos estilo 'golpe de TikTok' pra atrair tráfego" />
            <BenefitItem text="Venda no automático com chatbot (enquanto você dorme)" />
            <BenefitItem text="Técnicas PROIBIDAS que ninguém te conta" />
          </div>
          
          <div className="mt-8 text-center">
            <CtaButton 
              text="ME MOSTRA COMO FAZ PIX COM PDF" 
              href={affiliateLink} 
            />
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-anton text-lazycash-yellow mb-6 text-center">
            VEJA QUEM JÁ ESTÁ LUCRANDO:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <Testimonial 
              quote="Comprei e nem sei como vendi 5 em 2 dias. Cabuloso esse negócio."
              author="João, 22 anos"
            />
            <Testimonial 
              quote="Meu chefe viu meu Pix e me perguntou se eu tô vendendo droga kkkk"
              author="Daniel do TikTok"
            />
            <Testimonial 
              quote="Ganhei mais com esse PDF que com meu OnlyFans. Valeu demais!!!"
              author="Ana, influencer"
            />
            <Testimonial 
              quote="Tô repassando pros amigos e ganhando comissão. Nem sei se pode, mas tô fazendo 🤫"
              author="Vagabundo Profissional"
            />
          </div>
          
          <div className="text-center">
            <CtaButton 
              text="QUERO ENTRAR NO ESQUEMA" 
              href={affiliateLink} 
            />
          </div>
        </section>
        
        {/* Price Section */}
        <section className="bg-lazycash-gray-dark bg-opacity-50 backdrop-blur-md p-8 rounded-lg border border-lazycash-red border-opacity-50 mb-16">
          <div className="text-center mb-6">
            <h2 className="font-anton text-3xl text-white mb-2">
              PREÇO NORMAL: <span className="line-through opacity-70">R$97,00</span>
            </h2>
            <h3 className="font-bold text-lazycash-yellow text-xl mb-6">
              HOJE POR APENAS:
            </h3>
            
            <div className="price-tag">
              R$18,73
            </div>
            
            <p className="text-sm text-lazycash-white opacity-70 mt-2 mb-6">
              *PAGAMENTO ÚNICO - SEM MENSALIDADES
            </p>
            
            <CtaButton 
              text="CLICA AQUI ANTES QUE TIREM DO AR" 
              href={affiliateLink}
              className="mx-auto"
            />
            
            <div className="mt-6 flex items-center justify-center gap-4">
              <img src="https://via.placeholder.com/40x25" alt="Pix" className="h-6" />
              <img src="https://via.placeholder.com/60x25" alt="Cartão" className="h-6" />
              <img src="https://via.placeholder.com/80x25" alt="Boleto" className="h-6" />
            </div>
          </div>
        </section>
        
        {/* Final CTA */}
        <section className="text-center mb-16">
          <h2 className="font-anton text-3xl text-lazycash-yellow mb-6 shimmer-text">
            ESTÁ PRONTO PARA GANHAR DINHEIRO IGUAL TROUXA?
          </h2>
          
          <div className="grid grid-cols-1 gap-4">
            <CtaButton text="QUERO GANHAR NO AUTOMÁTICO" href={affiliateLink} />
            <CtaButton text="VER MÉTODO AGORA" href={affiliateLink} />
            <CtaButton text="ME MOSTRA COMO FAZ PIX COM PDF" href={affiliateLink} />
            <CtaButton 
              text="CLICA AQUI ANTES QUE TIREM DO AR" 
              href={affiliateLink}
            />
          </div>
        </section>
        
        {/* Disclaimer */}
        <footer className="text-center text-xs text-gray-500 mb-20">
          <p>Este conteúdo não garante resultados. O sucesso depende de vários fatores individuais.</p>
          <p className="mt-1">Os resultados apresentados são fictícios - provavelmente você vai fracassar como em tudo na vida.</p>
        </footer>
      </div>
      
      <UrgencyBanner />
    </div>
  );
};

export default Index;
