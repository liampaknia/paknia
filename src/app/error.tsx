"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex-center h-screen p-10 text-center">
      <div>
        <h2 className="text-error-main mb-4">خطایی رخ داد.</h2>
        {error.message && (
          <p className="text-error-main mb-4 text-xl font-semibold">
            {error.message}
          </p>
        )}
        <p className="mb-6 text-sm text-gray-600">
          لطفاً صفحه را مجدد بارگذاری کنید یا بعداً تلاش نمایید.
        </p>
        <button
          onClick={() => {
            location.reload();
          }}
          className="bg-amber-500 cursor-pointer rounded px-4 py-2 text-white"
        >
          تلاش مجدد
        </button>
      </div>
    </div>
  );
}
