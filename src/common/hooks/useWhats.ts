import { useRouter } from 'next/router'

export const useWhats = () => {
  const router = useRouter()

  const sendToWhats = () => {
    router.push('https://api.whatsapp.com/send?phone=5582987347452')
  }

  return {
    sendToWhats
  }
}
