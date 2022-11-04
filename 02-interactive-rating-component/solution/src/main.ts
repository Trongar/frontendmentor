import './style.css'
let istep = true;
let irate = 5;
let start = `
<button class="btn btn-circle btn-active btn-ghost rating">
    <input type="radio" name="" class="mask mask-star-2 bg-orange-400" checked/>
  </button>
    <h2 class="card-title text-4xl text-stone-50">How did we do?</h2>
    <p class="grow-0">Please let us know how we did with your support request. All feedback is appreciated 
    to help us improve our offering!</p>
    <div class="flex justify-between">
    <button class="option btn btn-active btn-ghost btn-circle bg-[hsl(213,19%,18%)] focus:bg-[hsl(217,12%,63%)] hover:bg-[hsl(25,97%,53%)]">1</button>
    <button class="option btn btn-active btn-ghost btn-circle bg-[hsl(213,19%,18%)] focus:bg-[hsl(217,12%,63%)] hover:bg-[hsl(25,97%,53%)]">2</button>
    <button class="option btn btn-active btn-ghost btn-circle bg-[hsl(213,19%,18%)] focus:bg-[hsl(217,12%,63%)] hover:bg-[hsl(25,97%,53%)]">3</button>
    <button class="option btn btn-active btn-ghost btn-circle bg-[hsl(213,19%,18%)] focus:bg-[hsl(217,12%,63%)] hover:bg-[hsl(25,97%,53%)]">4</button>
    <button class="option btn btn-active btn-ghost btn-circle bg-[hsl(213,19%,18%)] focus:bg-[hsl(217,12%,63%)] hover:bg-[hsl(25,97%,53%)]">5</button>
    </div>
    <button id="submit" class="btn btn-block rounded-full bg-[hsl(25,97%,53%)] hover:text-primary hover:bg-white">Submit</button>
  `
  let end = (rate:number) => `
  <figure><img alt="result" src="/images/illustration-thank-you.svg"></figure>
  <span class="badge badge-ghost text-[hsl(25,97%,53%)] mx-auto">You selected ${rate} out of 5</span>
  <h2 class="card-title text-4xl text-stone-50 text-center">Thank you!</h2>
    <p class="grow-0 text-center
    ">We appreciate you taking the time to give a rating. If you ever need more support, 
    don’t hesitate to get in touch!</p>
  `
  function render(step=istep, rate=irate){

    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="min-w-full min-h-screen bg-base-100 grid place-items-center" data-theme="halloween">
      <div class="w-screen h-screen mx-auto max-w-[375px] md:max-w-[1440px] max-h-[667px] md:max-h-[800px] bg-cream shadow-2xl grid place-items-center p-5">
      <div class="card w-[325px] md:w-[415px] h-[355px] md:h-[415px] bg-gradient-to-b from-[hsl(213,19%,18%)] via-[hsl(213,19%,18%)] to-[hsl(216,12%,8%)] shadow-xl">
      <div class="card-body justify-between">
      ${(step)?start:end(rate)}
      </div>
    </div>
    
      </div>
          
    
      
      <div class="attribution fixed bottom-4 left-1/2 -translate-x-1/2">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Trongar</a>.
        </div>
      </div>
    `
  }
  render()
  document.querySelectorAll(".option").forEach((option:any, key:number)=>{
    option.addEventListener("click", ()=>{
      irate = key+1
    })
  })
document.querySelector("#submit")?.addEventListener("click", () =>{
  console.log(false, irate)
  render(false, irate)
})
/*
<!-- Rating state start -->

  How did we do?

  Please let us know how we did with your support request. All feedback is appreciated 
  to help us improve our offering!

  1 2 3 4 5

  Submit

  <!-- Rating state end -->

  <!-- Thank you state start -->

  You selected <!-- Add rating here --> out of 5

  Thank you!

  We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!

  <!-- Thank you state end -->
  */