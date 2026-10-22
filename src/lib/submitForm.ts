const accessKey = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined

// Sends form values to the CA's inbox through Web3Forms (static sites have no backend)
export async function submitForm(subject: string, values: Record<string, string>): Promise<boolean> {
  if (!accessKey) {
    console.warn('VITE_WEB3FORMS_KEY is not set; form submission is disabled. See .env.example')
    return false
  }
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ access_key: accessKey, subject, ...values }),
    })
    const json = (await res.json()) as { success: boolean }
    return json.success
  } catch {
    return false
  }
}
