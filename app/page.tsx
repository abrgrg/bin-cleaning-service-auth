  export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">Professional Bin Cleaning Service</h1>
      <p className="mb-8 text-lg">
        Serving households across South Africa. Choose a plan and enjoy a fresh, sanitized bin all year round.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {["Weekly", "Biweekly", "Monthly"].map((plan) => (
          <div key={plan} className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-2">{plan} Plan</h2>
            <p className="mb-4">Get your bin cleaned on a {plan.toLowerCase()} basis.</p>
            <a href="/register">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Get Started
              </button>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
