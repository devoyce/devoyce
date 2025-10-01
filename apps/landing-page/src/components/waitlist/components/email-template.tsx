import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'

export const WaitlistEmailTemplate = () => (
  <Html>
    <Head />
    <Body style={main}>
      <Preview>You are now enrolled on our list of early adopters!</Preview>
      <Container style={container}>
        <Section style={box}>
          <Text>Devoyce</Text>
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
