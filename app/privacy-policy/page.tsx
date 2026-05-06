import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Política de Privacidad | JestSolution",
  description: "Política de privacidad de JestSolution: cómo recopilamos, usamos y protegemos tu información personal.",
  robots: { index: true, follow: true },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <Link
        href="/"
        className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        ← Volver al inicio
      </Link>

      <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-foreground">Política de Privacidad</h1>
      <p className="mt-3 text-sm text-muted-foreground">Última actualización: 1 de mayo de 2026</p>

      <div className="prose prose-invert mt-10 max-w-none space-y-8 text-muted-foreground">

        <section>
          <h2 className="text-xl font-semibold text-foreground">1. Quiénes Somos</h2>
          <p className="mt-3 leading-relaxed">
            JestSolution es un estudio de software que desarrolla bots de automatización para WhatsApp, productos SaaS,
            sistemas CRM y software para negocios. Es operado por Jefferson Steven Muñoz Delgado, con sede en
            Bucaramanga, Colombia. Puedes contactarnos en{" "}
            <a href="mailto:jestdetechsolutions@gmail.com" className="text-primary underline underline-offset-4">
              jestdetechsolutions@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">2. Información que Recopilamos</h2>
          <p className="mt-3 leading-relaxed">
            Cuando usas nuestro formulario de contacto o interactúas con nuestros bots de WhatsApp, podemos recopilar:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Tu nombre y dirección de correo electrónico</li>
            <li>Tu número de teléfono o WhatsApp</li>
            <li>El nombre de tu empresa y el contenido de tu mensaje</li>
            <li>Mensajes e interacciones enviados a través de bots de WhatsApp operados por nuestros clientes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">3. Cómo Usamos tu Información</h2>
          <p className="mt-3 leading-relaxed">Usamos la información recopilada para:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Responder tus consultas y prestarte los servicios que solicitaste</li>
            <li>Operar y mejorar nuestros servicios de automatización de WhatsApp para nuestros clientes</li>
            <li>Procesar pedidos y enviar notificaciones relacionadas a través de bots de WhatsApp</li>
            <li>Enviar comunicaciones relacionadas con el servicio</li>
          </ul>
          <p className="mt-3 leading-relaxed">
            No vendemos, alquilamos ni compartimos tus datos personales con terceros para fines de marketing.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">4. WhatsApp y la Plataforma Meta</h2>
          <p className="mt-3 leading-relaxed">
            Nuestros bots de WhatsApp están construidos sobre la API en la Nube de Meta (WhatsApp Business Platform).
            Cuando interactúas con un bot de WhatsApp desarrollado por JestSolution, tus mensajes se transmiten a través
            de la infraestructura de Meta. La política de privacidad propia de Meta aplica a esas interacciones. Solo
            accedemos al contenido del mensaje necesario para operar el flujo del bot y no almacenamos el historial de
            mensajes más allá de lo requerido para propósitos operativos.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">5. Almacenamiento y Seguridad de Datos</h2>
          <p className="mt-3 leading-relaxed">
            Los envíos del formulario de contacto se entregan por correo electrónico y no se almacenan en una base de
            datos pública. Los datos de conversación de los bots de WhatsApp se almacenan de forma segura en nuestros
            servidores y solo son accesibles para el operador del negocio (nuestro cliente) y JestSolution con fines de
            soporte. Aplicamos medidas de seguridad estándar, incluyendo conexiones cifradas (HTTPS) y controles de
            acceso.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">6. Retención de Datos</h2>
          <p className="mt-3 leading-relaxed">
            Conservamos los datos de contacto y conversación solo el tiempo necesario para prestar el servicio. Puedes
            solicitar la eliminación de tus datos en cualquier momento contactándonos en{" "}
            <a href="mailto:jestdetechsolutions@gmail.com" className="text-primary underline underline-offset-4">
              jestdetechsolutions@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">7. Tus Derechos</h2>
          <p className="mt-3 leading-relaxed">Tienes derecho a:</p>
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Acceder a los datos personales que tenemos sobre ti</li>
            <li>Solicitar la corrección de datos inexactos</li>
            <li>Solicitar la eliminación de tus datos</li>
            <li>Retirar el consentimiento para comunicaciones en cualquier momento</li>
          </ul>
          <p className="mt-3 leading-relaxed">
            Para ejercer cualquiera de estos derechos, contáctanos en{" "}
            <a href="mailto:jestdetechsolutions@gmail.com" className="text-primary underline underline-offset-4">
              jestdetechsolutions@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">8. Cookies</h2>
          <p className="mt-3 leading-relaxed">
            Este sitio web no usa cookies de publicidad ni de rastreo. Usamos Vercel Analytics para análisis de tráfico
            anónimo y agregado. No se recopila información de identificación personal a través del análisis.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">9. Cambios en Esta Política</h2>
          <p className="mt-3 leading-relaxed">
            Podemos actualizar esta política de privacidad de vez en cuando. La fecha en la parte superior de esta
            página refleja la revisión más reciente. El uso continuado de nuestros servicios después de cualquier
            cambio constituye la aceptación de la política actualizada.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">10. Contacto</h2>
          <p className="mt-3 leading-relaxed">
            Para cualquier pregunta sobre esta política de privacidad o sobre cómo manejamos tus datos, contáctanos en:
          </p>
          <ul className="mt-3 list-none space-y-1 pl-0">
            <li>
              <span className="text-foreground">Correo:</span>{" "}
              <a href="mailto:jestdetechsolutions@gmail.com" className="text-primary underline underline-offset-4">
                jestdetechsolutions@gmail.com
              </a>
            </li>
            <li>
              <span className="text-foreground">Sitio web:</span>{" "}
              <a href="https://www.jestsolution.dev" className="text-primary underline underline-offset-4">
                jestsolution.dev
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
