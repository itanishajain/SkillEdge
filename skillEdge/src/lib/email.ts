import sgMail from '@sendgrid/mail';

// Initialize SendGrid with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

interface TicketData {
  id: string;
  subject: string;
  description: string;
  priority: string;
  status: string;
  createdAt: string;
}

export const sendTicketEmail = async (ticketData: TicketData) => {
  const msg = {
    to: process.env.SUPPORT_EMAIL,
    from: 'support@skilledge.com',
    subject: `New Support Ticket: ${ticketData.subject}`,
    text: `
      New support ticket created:
      
      Ticket ID: ${ticketData.id}
      Subject: ${ticketData.subject}
      Description: ${ticketData.description}
      Priority: ${ticketData.priority}
      Status: ${ticketData.status}
      Created At: ${ticketData.createdAt}
    `,
    html: `
      <h2>New Support Ticket Created</h2>
      <p><strong>Ticket ID:</strong> ${ticketData.id}</p>
      <p><strong>Subject:</strong> ${ticketData.subject}</p>
      <p><strong>Description:</strong> ${ticketData.description}</p>
      <p><strong>Priority:</strong> ${ticketData.priority}</p>
      <p><strong>Status:</strong> ${ticketData.status}</p>
      <p><strong>Created At:</strong> ${ticketData.createdAt}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData) => {
  const msg = {
    to: process.env.SUPPORT_EMAIL,
    from: 'support@skilledge.com',
    subject: `Contact Form Submission: ${formData.subject}`,
    text: `
      New contact form submission:
      
      Name: ${formData.name}
      Email: ${formData.email}
      Subject: ${formData.subject}
      Message: ${formData.message}
    `,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Subject:</strong> ${formData.subject}</p>
      <p><strong>Message:</strong> ${formData.message}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};