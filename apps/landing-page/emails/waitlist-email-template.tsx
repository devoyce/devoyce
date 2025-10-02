import 'dotenv/config'

import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Img,
} from '@react-email/components'

const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://devoyce.com'

export const WaitlistEmailTemplate = () => (
  <Html>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Body style={main}>
      <Preview>You are now enrolled on our list of early adopters!</Preview>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`${baseUrl}/img/icon-192.png`}
            width={32}
            height={32}
            style={logo}
            alt="Devoyce"
          />
          <Text style={logoText}>Devoyce</Text>
          <Hr style={hr} />
          <Text style={paragraph}>
            Thanks for entering the waitlist for Devoyce. You are now enrolled
            on our list of early adopters and will be among the first to hear
            when we launch!
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export default WaitlistEmailTemplate

const main = {
  backgroundColor: '#e9faf1',
  fontFamily:
    'Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const logo = {
  float: 'left' as const,
}

const logoText = {
  color: '#0f172b',
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '16px',
  margin: 0,
  marginLeft: '40px',
  marginTop: '16px',
  transform: 'translateY(-50%)',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginTop: '64px',
  marginBottom: '64px',
}

const box = {
  padding: '0 48px',
}

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
}

const paragraph = {
  color: '#0f172b',

  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
}
