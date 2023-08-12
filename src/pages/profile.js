import { getSession } from "next-auth/react"

export default function SignUp() {
  return (
    <div className="flex flex-col items-center bg-slate-900 h-[100vh]">
        <h1 className="text-[5rem] text-purple-700 pt-[12rem]">PROFILE PAGE</h1>
      </div>
  )
};

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  }
}
