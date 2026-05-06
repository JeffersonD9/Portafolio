import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Términos y Condiciones | JestSolution",
  description: "Términos y condiciones de uso de los servicios de desarrollo de software de JestSolution.",
  robots: { index: true, follow: true },
}

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Volver al inicio
      </Link>

      <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-foreground">Términos y Condiciones</h1>
      <p className="mt-3 text-sm text-muted-foreground">Última actualización: mayo de 2026</p>

      <div className="prose prose-invert mt-10 max-w-none space-y-8 text-muted-foreground">

        <section>
          <h2 className="text-xl font-semibold text-foreground">1. Identificación del Prestador</h2>
          <p className="mt-3 leading-relaxed">
            Estos términos regulan el uso del sitio web{" "}
            <a href="https://www.jestsolution.dev" className="text-primary underline underline-offset-4">
              www.jestsolution.dev
            </a>{" "}
            y la contratación de los servicios ofrecidos por JestSolution, estudio de desarrollo de software operado
            por Jefferson Steven Muñoz Delgado, con domicilio en Bucaramanga, Santander, Colombia. Contacto:{" "}
            <a href="mailto:jestdetechsolutions@gmail.com" className="text-primary underline underline-offset-4">
              jestdetechsolutions@gmail.com
            </a>
            .
          </p>
          {/* TODO: Añadir NIT o número de RUT cuando esté disponible */}
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">2. Servicios Ofrecidos</h2>
          <p className="mt-3 leading-relaxed">
            JestSolution ofrece servicios de desarrollo de software a medida, que incluyen pero no se limitan a:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Desarrollo de aplicaciones SaaS (Software como Servicio)</li>
            <li>Automatización de procesos de negocio</li>
            <li>Desarrollo e integración de bots de WhatsApp</li>
            <li>Diseño y desarrollo de plataformas web y CRM</li>
            <li>Desarrollo de software a medida</li>
            <li>Landing pages y sitios web corporativos</li>
          </ul>
          <p className="mt-3 leading-relaxed">
            Las condiciones específicas de cada proyecto (alcance, plazos, costos y entregables) se acuerdan por escrito
            entre las partes antes del inicio del trabajo.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">3. Uso del Sitio Web</h2>
          <p className="mt-3 leading-relaxed">
            Al acceder a este sitio web, aceptas usarlo únicamente con fines lícitos y de manera que no infrinja los
            derechos de terceros. Queda prohibido:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Intentar acceder a sistemas o datos sin autorización</li>
            <li>Transmitir contenido malicioso, spam o materiales ilegales</li>
            <li>Reproducir o distribuir el contenido del sitio sin autorización previa por escrito</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">4. Propiedad Intelectual</h2>
          <p className="mt-3 leading-relaxed">
            Todo el contenido de este sitio web (textos, gráficos, logotipos, código fuente) es propiedad de
            JestSolution o de sus respectivos titulares y está protegido por la legislación colombiana e internacional
            sobre propiedad intelectual.
          </p>
          <p className="mt-3 leading-relaxed">
            En cuanto al software desarrollado para clientes, los derechos de propiedad intelectual sobre el producto
            final se transfieren al cliente una vez completado el pago total acordado, salvo que se estipule lo
            contrario en el contrato específico del proyecto.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">5. Confidencialidad</h2>
          <p className="mt-3 leading-relaxed">
            JestSolution se compromete a mantener la confidencialidad de la información de negocio que los clientes
            compartan durante el proceso de consultoría o desarrollo. Esta información no será divulgada a terceros sin
            consentimiento expreso del cliente.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">6. Limitación de Responsabilidad</h2>
          <p className="mt-3 leading-relaxed">
            JestSolution no será responsable de daños indirectos, incidentales o consecuentes derivados del uso o la
            imposibilidad de usar los servicios contratados, salvo en los casos en que la ley colombiana aplicable no
            permita dicha limitación.
          </p>
          <p className="mt-3 leading-relaxed">
            La responsabilidad máxima de JestSolution frente a un cliente por cualquier reclamación relacionada con un
            proyecto específico no superará el valor total pagado por dicho proyecto.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">7. Formulario de Contacto</h2>
          <p className="mt-3 leading-relaxed">
            El envío de un mensaje a través del formulario de contacto no constituye un contrato de servicios ni genera
            obligación alguna de contratación para ninguna de las partes. Las propuestas formales de servicios se
            entregan por escrito y requieren aceptación explícita.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">8. Ley Aplicable y Jurisdicción</h2>
          <p className="mt-3 leading-relaxed">
            Estos términos se rigen por las leyes de la República de Colombia. Cualquier controversia que surja de la
            interpretación o ejecución de estos términos se someterá a la jurisdicción de los tribunales competentes
            de la ciudad de Bucaramanga, Santander, Colombia.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">9. Modificaciones</h2>
          <p className="mt-3 leading-relaxed">
            JestSolution se reserva el derecho de actualizar estos términos en cualquier momento. Los cambios entran en
            vigencia en el momento de su publicación en este sitio. El uso continuado del sitio web tras la publicación
            de cambios implica la aceptación de los nuevos términos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">10. Contacto</h2>
          <p className="mt-3 leading-relaxed">
            Para consultas sobre estos términos y condiciones:
          </p>
          <ul className="mt-3 list-none space-y-1 pl-0">
            <li>
              <span className="text-foreground">Correo:</span>{" "}
              <a href="mailto:jestdetechsolutions@gmail.com" className="text-primary underline underline-offset-4">
                jestdetechsolutions@gmail.com
              </a>
            </li>
            <li>
              <span className="text-foreground">WhatsApp:</span>{" "}
              <a href="https://wa.me/573245220410" className="text-primary underline underline-offset-4">
                +57 324 522 0410
              </a>
            </li>
            <li>
              <span className="text-foreground">Ubicación:</span> Bucaramanga, Santander, Colombia
            </li>
          </ul>
        </section>

      </div>
    </main>
  )
}
