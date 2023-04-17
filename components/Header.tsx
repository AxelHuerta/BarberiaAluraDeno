
export function Header() {
  return (
    <header style={{backgroundColor: '#7b98a4'}} class='flex justify-around uppercase font-bold items-center'>
      <img src="https://raw.githubusercontent.com/AxelHuerta/BarberiaAluraDeno/main/assets/images/logo.png" alt="Logo" />
      <nav>
        <ul class="flex text-2xl justify-between w-full">
          <li class="mx-5">home</li>
          <li class="mx-5">productos</li>
          <li class="mx-5">contacto</li>
        </ul>
      </nav>
    </header>
  );
}