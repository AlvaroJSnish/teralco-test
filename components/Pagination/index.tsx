import Link from "next/link";
import { useRouter } from "next/dist/client/router";

export default function Pagination() {
  const router = useRouter();
  return (
    <nav
      className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          {router.query?.page ? (
            <span className="font-medium">Page {router.query.page}</span>
          ) : (
            <span className="font-medium">Page 1</span>
          )}
        </p>
      </div>
      <div className="flex-1 flex justify-between sm:justify-end">
        {parseInt(router.query.page as string) > 1 && (
          <Link
            href={`/?username=${router.query.username}&repository=${
              router.query.repository
            }&page=${(parseInt(router.query.page as string) || 1) - 1}`}
          >
            <a className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </a>
          </Link>
        )}
        <Link
          href={`/?username=${router.query.username}&repository=${
            router.query.repository
          }&page=${(parseInt(router.query.page as string) || 1) + 1}`}
        >
          <a className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Next
          </a>
        </Link>
      </div>
    </nav>
  );
}
