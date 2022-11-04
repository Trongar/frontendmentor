import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="min-w-full min-h-screen bg-base-100 grid place-items-center" >
    <div class="w-screen h-screen mx-auto max-w-[375px] md:max-w-[1440px] max-h-[667px] md:max-h-[800px] bg-cream shadow-2xl grid place-items-center p-5">
      <div class="card lg:card-side bg-white md:w-[600px] md:h-[450px] shadow-xl">
        <figure class="h-[240px] md:h-full md:w-1/2"><img src="/image-product-desktop.jpg" alt="Product"/></figure>
        <div class="card-body md:w-1/2">
          <p class="uppercase text-dark-grayish-blue font-medium grow-0 font-['Montserrat']">Perfume</p>
          <p class="card-title font-['Fraunces'] text-3xl md:text-4xl">Gabrielle Essence Eau De Parfum</p>
          <p class="text-dark-grayish-blue text-sm font-['Montserrat']">A floral, solar and voluptuous interpretation composed by Olivier Polge, 
          Perfumer-Creator for the House of CHANEL.</p>
          <div class="flex">
            <p class="text-3xl md:text-4xl font-bold font-serif text-dark-cyan">$149.99</p>
            <p class="text-md text-dark-grayish-blue line-through">$169.99</p>
          </div>
          <div class="card-actions">
            <button class="btn btn-block bg-dark-cyan hover:bg-very-dark-blue">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  
    <div class="attribution fixed bottom-4 left-1/2 -translate-x-1/2">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Trongar</a>.
    </div>
  </div>
`
