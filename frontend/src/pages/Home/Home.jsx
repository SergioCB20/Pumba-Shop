import React from "react";
import HeroImage from "../../components/Reusables/HeroImage";
import hero1 from "../../assets/home-hero-1.webp";
import hero2 from "../../assets/home-hero-2.webp";
import hero3 from "../../assets/home-hero-3.webp";

export default function Home() {
  return (
    <main className="w-full flex flex-col">
      <HeroImage
        imgUrl={hero1}
        titulo="Aprovecha nuestras promociones 😉"
        contenido="¡Descuentos por tiempo limitado en calzados, ropa y más!"
        textoBoton="IR A LAS PROMOCIONES ⭐"
        posicionTexto="left"
      />
      <HeroImage
        imgUrl={hero2}
        titulo="Revise nuestro catálogo de calzados 🤩"
        contenido="¡Las zapatillas de tus jugadores favoritos en un mismo lugar!"
        textoBoton="IR A LA TIENDA ⭐"
        posicionTexto="right"
      />
      <HeroImage
        imgUrl={hero3}
        titulo="Dale un vistazo a nuestra ropa deportiva 😎"
        contenido="¡Camisetas, pantalones y más!"
        textoBoton="IR A LA TIENDA ⭐"
      />
      <article className="flex flex-col p-10 gap-10 tracking-wider text-justify lg:flex-row lg:text-sm">
        <section>
          <h2 className="font-bold text-2xl pb-2 ilg:text-4xl">
            Historia, pasión y deporte
          </h2>
          <p>
            En el vibrante corazón de la ciudad, donde la pasión por el deporte
            y la moda se fusiona, nació "Pumba", una tienda de ropa deportiva
            que lleva consigo el espíritu del rendimiento y el estilo de vida
            activo. Inspirada por la rica tradición de marcas deportivas
            icónicas como Puma, Pumba se propuso ser más que un lugar para
            comprar ropa, zapatos y accesorios deportivos; aspiraba a ser un
            destino donde la comunidad deportiva se reuniera y se sintiera
            inspirada. La historia de Pumba comenzó con un grupo de entusiastas
            del deporte y la moda que compartían una visión común: ofrecer a los
            clientes algo más que artículos deportivos de alta calidad. Se
            embarcaron en un viaje para crear un espacio donde la pasión por el
            deporte se combinara con la moda moderna, y así nació la tienda
            "Pumba" en 2010. El nombre "Pumba" fue elegido con cuidado,
            reflejando la fuerza, la determinación y el espíritu de superación.
            Al igual que el emblemático lema de la tienda: "Supera tus límites",
            Pumba se convirtió en el destino predilecto para aquellos que
            buscaban superar sus metas deportivas mientras mantenían un estilo
            impecable.
          </p>
        </section>
        <section>
          <h2 className="font-bold text-2xl pb-2 lg:text-4xl">¡No somos una copia!</h2>
          <p>
            La tienda Pumba se propuso seguir los pasos de marcas icónicas como
            Puma, adoptando un enfoque holístico hacia el deporte y la moda.
            Colaboraron con diseñadores locales para crear colecciones
            exclusivas que fusionaran la funcionalidad de la ropa deportiva con
            las últimas tendencias de la moda urbana. Al igual que Puma, Pumba
            se esforzó por ser una marca que no solo vendiera productos, sino
            que también inspirara a la comunidad a vivir una vida activa y
            saludable. Con el tiempo, Pumba estableció alianzas con atletas
            locales, organizó eventos deportivos y lanzó programas comunitarios
            para fomentar la participación activa en el deporte. La tienda se
            convirtió en un centro de encuentro para atletas, entrenadores,
            entusiastas del fitness y amantes de la moda deportiva. Siguiendo el
            ejemplo de Puma, Pumba se comprometió con la sostenibilidad,
            buscando formas de reducir su impacto ambiental y ofrecer productos
            más éticos y ecoamigables. La tienda se convirtió en un faro de
            innovación y conciencia ambiental en la comunidad, inspirando a
            otros a seguir su ejemplo. Hoy, Pumba continúa su historia,
            celebrando el espíritu del deporte, la moda y la comunidad. Con cada
            nueva temporada, la tienda se reinventa, manteniendo viva la llama
            de la inspiración y la excelencia que heredó de sus predecesores en
            la industria deportiva. "Pumba" no es solo una tienda de ropa
            deportiva; es un destino donde los sueños atléticos se encuentran
            con la moda, donde la determinación se une al estilo, y donde la
            comunidad se une para superar sus límites, justo como lo inspiró la
            legendaria marca Puma.
          </p>
        </section>
      </article>
    </main>
  );
}
