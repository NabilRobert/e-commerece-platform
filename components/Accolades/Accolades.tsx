export default function AccoladesSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-10 text-center md:grid-cols-4">

          {/* 1 */}
          <div>
            <div className="text-3xl">🕒</div>
            <h3 className="mt-4 text-lg font-semibold">
              24/7 Customer Support
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Our team is always available to assist you anytime, anywhere.
            </p>
          </div>

          {/* 2 */}
          <div>
            <div className="text-3xl">🚚</div>
            <h3 className="mt-4 text-lg font-semibold">
              Fast & Reliable Shipping
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Get your orders delivered quickly with secure handling.
            </p>
          </div>

          {/* 3 */}
          <div>
            <div className="text-3xl">🔒</div>
            <h3 className="mt-4 text-lg font-semibold">
              Secure Payments
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              We use encrypted systems to keep your transactions safe.
            </p>
          </div>

          {/* 4 */}
          <div>
            <div className="text-3xl">⭐</div>
            <h3 className="mt-4 text-lg font-semibold">
              Trusted by Thousands
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Join a growing community of satisfied customers worldwide.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}