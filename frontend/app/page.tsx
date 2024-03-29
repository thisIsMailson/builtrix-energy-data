
import { redirect } from "next/navigation"

export default function Home() {
  // this is just to so we can see the login page without having to add anything to this page
  redirect('/login')
}