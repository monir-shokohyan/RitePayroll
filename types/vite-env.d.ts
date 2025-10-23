/// <reference types="vite/client" />

import { readonly } from "zod"

interface ImportMetaEnv {
  readonly VITE_APP_API_URL: string
  readonly VITE_EMAILJS_SERVICE_ID :string
  readonly VITE_EMAILJS_TEMPLATE_ID : string
  readonly VITE_EMAILJS_PUBLIC_KEY : string

  
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
