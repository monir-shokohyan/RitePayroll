import { companyInfo } from '@features/chatBot/constant'
import { SavedColors } from '@shared/constants'
import { FaFacebook, FaLinkedin, FaGithub, FaGlobe, FaEnvelope } from 'react-icons/fa'

export const SocialMediaUi = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: companyInfo.facebook,
      icon: FaFacebook,
      color: '#1877F2',
      bgColor: '#E7F3FF'
    },
    {
      name: 'LinkedIn',
      url: companyInfo.linkedin,
      icon: FaLinkedin,
      color: '#0A66C2',
      bgColor: '#E8F4FF'
    },
    {
      name: 'GitHub',
      url: companyInfo.github,
      icon: FaGithub,
      color: '#181717',
      bgColor: '#F3F4F6'
    },
    {
      name: 'Website',
      url: companyInfo.website,
      icon: FaGlobe,
      color: '#059669',
      bgColor: '#D1FAE5'
    },
    {
      name: 'Email',
      url: `mailto:${companyInfo.email}`,
      icon: FaEnvelope,
      color: '#DC2626',
      bgColor: '#FEE2E2'
    }
  ]

  return (
    <div style={{
      padding: '0px',
      borderRadius: '10px',
      background: `${SavedColors.PrimaryWhite}`,
    }}>
      <div style={{ textAlign: 'center', marginBottom: '16px' }}>
        <h3 style={{
          color: `${SavedColors.TextColor}`,
          fontSize: '16px',
          fontWeight: '700',
          margin: '0 0 4px 0'
        }}>
          Connect With Us
        </h3>
        <p style={{
          color: `${SavedColors.TextColor}`,
          fontSize: '12px',
          margin: 0
        }}>
          Follow us on social media & stay updated
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '8px'
      }}>
        {socialLinks.map((link) => {
          const Icon = link.icon
          return (
              <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px',
                background: 'white',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: link.bgColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Icon size={18} color={link.color} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  color: '#1F2937'
                }}>
                  {link.name}
                </div>
                <div style={{
                  fontSize: '10px',
                  color: '#6B7280'
                }}>
                  Visit now
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}