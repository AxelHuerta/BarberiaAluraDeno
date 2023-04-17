export function About() {
  return (
    <div class="grid grid-cols-3">
      <div>
        <img
          src="https://raw.githubusercontent.com/AxelHuerta/BarberiaAluraDeno/main/assets/images/utensilios.jpg"
          alt="utensilios"
        />
      </div>
      <div class="col-span-2 flex flex-col justify-center mx-28">
        <h2 class="text-3xl capitalize font-bold">sobre la barbería alura</h2>
        <p>
          Ubicada en el corazón de la ciudad, la Barbería Alura trae para el
          mercado lo que hay de mejor para su cabello y barba. Fundada en 2020,
          la Barbería Alura ya es destaque en la ciudad y conquista nuevos
          clientes diariamente.
        </p>

        <p class="text-xl font-bold text-center my-5">
          Nuestra misión es:{" "}
          <i>
            "Proporcionar autoestima y calidad de vida a nuestros clientes"
          </i>.
        </p>

        <p>
          Ofrecemos profesionales experimentados que están constantemente
          observando los cambios y movimiento en el mundo de la moda, para así
          ofrecer a nuestros clientes las últimas tendencias. El atendimiento
          posee un padrón de excelencia y agilidad, garantizando calidad y
          satisfacción de nuestros clientes.
        </p>
      </div>
    </div>
  );
}
