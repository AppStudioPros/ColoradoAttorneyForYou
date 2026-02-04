import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend only if API key is available
let resend: Resend | null = null
if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 're_placeholder_replace_with_your_key') {
  resend = new Resend(process.env.RESEND_API_KEY)
}

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

    // Log the submission
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      message,
      practiceArea,
      sourcePage,
      timestamp: new Date().toISOString(),
    })

    // Send email via Resend if API key is configured
    if (resend) {
      try {
        await resend.emails.send({
          from: 'Domangue Law <website@mail.coloradoattorneyforyou.com>',
          to: ['warren.domangue@du.edu'],
          replyTo: email,
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
      } catch (emailError) {
        console.error('Failed to send email via Resend:', emailError)
        // Don't fail the request if email fails
      }
    }

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
