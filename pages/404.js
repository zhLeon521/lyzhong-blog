import Link from "@/components/Link";
import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/data/siteMetadata";

export default function FourZeroFour() {
    return (
        <>
            <PageSEO
                title={`404 - ${siteMetadata.author}`}
                description={siteMetadata.description}
            />
            <div className="my-24 flex flex-col items-start justify-start md:flex-row md:items-center md:justify-center md:space-x-6">
                <div className="space-x-2 pt-6 pb-8 md:space-y-5">
                    <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:border-r-2 md:px-6 md:text-8xl md:leading-14">
                        404
                    </h1>
                </div>
                <div className="max-w-md">
                    <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
                        抱歉，我们找不到此页面。
                    </p>
                    <p className="mb-8">
                        但别担心，您可以在我们的首页上找到很多其他内容。
                    </p>
                    <Link href="/">
                        <button className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500">
                            返回首页
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}
