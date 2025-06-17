import { useEffect } from 'react'
import netlifyIdentity from 'netlify-identity-widget'

function ConfirmRedirectHandler() {
  useEffect(() => {
    const url = window.location.href
    const match = url.match(/confirmation_token=([^&]+)/)

    if (match && match[1]) {
      netlifyIdentity.confirm(match[1], true)
        .then((user) => {
          console.log('Email confirmed:', user)
          window.location.href = '/admin' // redirect to CMS after confirm
        })
        .catch((err) => {
          console.error('Email confirmation failed:', err)
        })
    }
  }, [])

  return null
}

export default ConfirmRedirectHandler
