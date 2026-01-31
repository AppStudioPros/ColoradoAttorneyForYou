import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, practiceArea, sourcePage } = body

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // TODO: Replace with actual Resend integration when API key is available
    // For now, just log the submission
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      message,
      practiceArea,
      sourcePage,
      timestamp: new Date().toISOString(),
    })

    // Uncomment when Resend API key is available:
    /*
    const data = await resend.emails.send({
      from: 'Law Office <noreply@coloradoattorneyforyou.com>',
      to: ['warren@coloradoattorneyforyou.com'],
      subject: `New Contact Form Submission - ${practiceArea}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Practice Area:</strong> ${practiceArea}</p>
        <p><strong>Source Page:</strong> ${sourcePage}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })
    */

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your message has been received.',
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
