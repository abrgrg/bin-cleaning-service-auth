import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/login');
  }

  return (
    <div className="max-w-2xl mx-auto mt-20">
      <h1 className="text-3xl font-bold">Welcome, {session.user.email}</h1>
      <p className="mt-4">This is your dashboard.</p>
    </div>
  );
}
