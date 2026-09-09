const GOOGLE_APPS_SCRIPT_URL = process.env.GOOGLE_APPS_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbx96QWbBUyMEJUruBwIIwZt3TGbH7sPRAIp7t_3ddDuvNYiHmEZH-QIZsy8kBfaRKfu/exec';

const jsonResponse = (statusCode, body) => ({
  statusCode,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
});

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return jsonResponse(405, { error: 'Method not allowed.' });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch {
    return jsonResponse(400, { error: 'Invalid request.' });
  }

  const email = String(payload.email || '').trim().toLowerCase();
  const password = String(payload.password || '');

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || password.length < 6) {
    return jsonResponse(401, { error: 'Invalid email or password.' });
  }

  try {
    const sheetsResponse = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        status: 'success',
        method: 'email-password login',
      }),
    });

    if (!sheetsResponse.ok) {
      throw new Error(`Google Apps Script returned ${sheetsResponse.status}`);
    }

    return jsonResponse(200, { user: { email } });
  } catch (error) {
    console.error('Unable to record login in Google Sheets:', error.message);
    return jsonResponse(500, { error: 'Login service is not configured yet.' });
  }
};