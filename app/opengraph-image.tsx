import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

export const alt = 'JestSolution | Desarrollo de Software SaaS y Automatización para Negocios'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const fontSemiBold = await readFile(join(process.cwd(), 'app/fonts/Inter-SemiBold.ttf'))

  return new ImageResponse(
    (
      <div
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 52% -5%, rgba(99,102,241,0.32) 0%, transparent 100%),' +
            'radial-gradient(ellipse 45% 40% at 88% 105%, rgba(34,197,94,0.18) 0%, transparent 100%),' +
            'radial-gradient(ellipse 35% 30% at 5% 95%, rgba(99,102,241,0.10) 0%, transparent 100%),' +
            '#0B0F14',
          width: '100%',
          height: '100%',
          display: 'flex',
          fontFamily: '"Inter", sans-serif',
          overflow: 'hidden',
          position: 'relative',
        }}
      >


        {/* ── Grid punteado sutil ── */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
            display: 'flex',
          }}
        />

        {/* ── Contenido principal ── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '56px 80px',
            width: '100%',
            height: '100%',
            position: 'relative',
            }}
        >
          {/* Logo mark */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: 13,
                background: 'rgba(99,102,241,0.12)',
                border: '1.5px solid rgba(99,102,241,0.32)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#818cf8',
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              JT
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <span
                style={{
                  display: 'flex',
                  color: '#f9fafb',
                  fontSize: 21,
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}
              >
                Jest
                <span style={{ color: '#818cf8' }}>Solution</span>
              </span>
              <span
                style={{
                  color: '#374151',
                  fontSize: 10,
                  letterSpacing: '0.24em',
                  textTransform: 'uppercase',
                  lineHeight: 1,
                }}
              >
                Software Solutions Studio
              </span>
            </div>
          </div>

          {/* Eyebrow badge — idéntico al del hero */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginTop: 52,
              padding: '7px 16px',
              borderRadius: 999,
              border: '1px solid rgba(99,102,241,0.20)',
              background: 'rgba(17,24,39,0.70)',
              alignSelf: 'flex-start',
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 10px rgba(34,197,94,0.8)',
                display: 'flex',
              }}
            />
            <span
              style={{
                color: '#9ca3af',
                fontSize: 13,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
              }}
            >
              Disponibles para proyectos remotos — Colombia
            </span>
          </div>

          {/* Headline principal */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: 28,
              gap: 0,
            }}
          >
            <span
              style={{
                color: '#f9fafb',
                fontSize: 72,
                fontWeight: 700,
                lineHeight: 0.97,
                letterSpacing: '-0.045em',
              }}
            >
              Software SaaS,
            </span>
            <span
              style={{
                color: '#818cf8',
                fontSize: 72,
                fontWeight: 700,
                lineHeight: 0.97,
                letterSpacing: '-0.045em',
              }}
            >
              automatización
            </span>
            <span
              style={{
                color: '#f9fafb',
                fontSize: 72,
                fontWeight: 700,
                lineHeight: 0.97,
                letterSpacing: '-0.045em',
              }}
            >
              y plataformas web.
            </span>
          </div>

          {/* Subheadline */}
          <span
            style={{
              color: '#6b7280',
              fontSize: 20,
              lineHeight: 1.5,
              marginTop: 22,
              maxWidth: 680,
            }}
          >
            Convertimos procesos desordenados en sistemas listos para generar ingresos.
          </span>

          {/* Barra inferior */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 'auto',
              paddingTop: 20,
              borderTop: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <span
              style={{
                color: '#374151',
                fontSize: 15,
                letterSpacing: '0.02em',
              }}
            >
              www.jestsolution.dev
            </span>

            <div style={{ display: 'flex', gap: 8 }}>
              {[
                'SaaS',
                'Automatización',
                'WhatsApp Bots',
                'A medida',
                'Colombia',
              ].map((tag) => (
                <div
                  key={tag}
                  style={{
                    display: 'flex',
                    color: '#818cf8',
                    fontSize: 12,
                    padding: '5px 13px',
                    borderRadius: 999,
                    border: '1px solid rgba(99,102,241,0.22)',
                    background: 'rgba(99,102,241,0.07)',
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: fontSemiBold,
          weight: 400,
          style: 'normal',
        },
        {
          name: 'Inter',
          data: fontSemiBold,
          weight: 700,
          style: 'normal',
        },
      ],
    },
  )
}
