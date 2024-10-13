

export default async function Page() {
  const session = await getServerSession(authOptions);  
  if (session?.user) {
    redirect('/dashboard')
  }  
  else {
    redirect('/api/auth/signin')
  }
}
//hello
//test ci pipeline
